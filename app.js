if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}
import { ingredientDatabase, mysteryItem, alchemyProgress, rewards } from './gamedata.js';

// --- State Management ---
const defaultState = {
    schedule: [], 
    dailyLog: {}, 
    xp: 0,
    unlockedRewards: [], 
    lastVisit: new Date().toDateString()
};

let state = JSON.parse(localStorage.getItem('alchemyTrackerState')) || defaultState;

// --- DOM Elements ---
const dom = {
    glassTable: document.getElementById('glass-table'),
    currentDay: document.getElementById('current-day'),
    completionOverlay: document.getElementById('completion-overlay'),
    
    // Config Sidebar
    configSidebar: document.getElementById('config-sidebar'),
    openConfigBtn: document.getElementById('config-btn'),
    closeConfigBtn: document.getElementById('close-config'),
    addInput: document.getElementById('add-input'),
    addBtn: document.getElementById('add-btn'),
    daySelector: document.getElementById('day-selector'),
    activeList: document.getElementById('active-list'),

    // Stats Sidebar
    statsSidebar: document.getElementById('stats-sidebar'),
    openStatsBtn: document.getElementById('stats-btn'),
    closeStatsBtn: document.getElementById('close-stats'),
    xpBar: document.getElementById('xp-bar'),
    playerTitle: document.getElementById('player-title'),
    rewardsContainer: document.getElementById('rewards-container'),
    historyList: document.getElementById('history-list'),
    resetBtn: document.getElementById('reset-progress-btn'), 

    // Effects Container (for popups)
    effectsContainer: document.getElementById('effects-container')
};

// --- Helper Functions ---

function saveState() {
    localStorage.setItem('alchemyTrackerState', JSON.stringify(state));
}

function getTodayKey() { return new Date().toDateString(); }
function getDayName() { return new Date().toLocaleDateString('en-US', { weekday: 'short' }); }

// SOUND ENGINE
const playSound = (soundPath) => {
    if (!soundPath) return;
    
    // This assumes your structure is: assets/SFX/filename.wav
    const audio = new Audio(`assets/${soundPath}`); 
    audio.volume = 0.4; 
    
    // Play and catch errors (e.g. if user hasn't clicked page yet)
    audio.play().catch(err => console.log("Sound play blocked until interaction: ", err));
};

// --- REWARD & NOTIFICATION LOGIC ---

const showItemNotification = (reward) => {
    playSound('SFX/Magic.wav');
    const container = document.getElementById('effects-container');
    if (!container) return; 

    const el = document.createElement('div');
    el.className = 'fixed inset-0 flex items-center justify-center z-[60] pointer-events-none';
    
    // Logic to handle both emojis and image paths
    const visualContent = (reward.sprite && reward.sprite.length > 2) 
        ? `<img src="${reward.sprite}" class="w-full h-full object-contain drop-shadow-lg" style="image-rendering: pixelated;">`
        : `<div class="text-6xl flex items-center justify-center h-full">${reward.sprite || '🎁'}</div>`;
    
    el.innerHTML = `
        <div class="animate-item-pop flex flex-col items-center gap-4">
            <div class="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
            
            <div class="relative bg-gray-900/90 border-2 border-amber-500/50 p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-3 min-w-[280px] max-w-sm backdrop-blur-md">
                
                <div class="w-32 h-32 bg-gray-800/50 rounded-xl p-4 border border-white/10 shadow-inner">
                    ${visualContent}
                </div>
                
                <div class="text-center">
                    <div class="text-amber-400 text-xs font-bold tracking-widest uppercase mb-1">Recipe Discovered</div>
                    <div class="text-3xl font-bold text-white mb-2 font-medieval">${reward.name}</div>
                    <div class="text-white/70 text-sm italic leading-relaxed px-2">"${reward.description}"</div>
                </div>
            </div>
        </div>
    `;

    container.appendChild(el);

    // Fade out and remove from DOM
    setTimeout(() => {
        const inner = el.firstElementChild;
        if (inner) {
            inner.classList.remove('animate-item-pop'); 
            inner.classList.add('animate-item-fade');   
            setTimeout(() => el.remove(), 500);
        }
    }, 5000); 
};

function checkRewards() {
    let newUnlock = false;
    rewards.forEach(r => {
        if (state.xp >= r.unlockXP && !state.unlockedRewards.includes(r.id)) {
            state.unlockedRewards.push(r.id);
            showItemNotification(r); 
            newUnlock = true;
        }
    });
    if (newUnlock) saveState();
}

// --- CORE APP LOGIC ---

function init() {
    dom.currentDay.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    
    if (state.lastVisit !== getTodayKey()) {
        state.lastVisit = getTodayKey();
        saveState();
    }

    renderCards();
    renderStats();
    renderConfig();
    
    // Initialize Day Buttons
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    dom.daySelector.innerHTML = days.map(d => 
        `<button class="day-btn border border-gray-500 text-xs w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-900 transition" data-day="${d}">${d}</button>`
    ).join('');
    
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.classList.toggle('bg-amber-600');
            e.target.classList.toggle('text-white');
            e.target.classList.toggle('selected');
        });
    });
}

function renderCards() {
    dom.glassTable.innerHTML = '';
    
    // 1. LAYOUT FIX:
    // grid-cols-2: 2 columns on mobile (readable size)
    // md:grid-cols-4: 4 columns on tablets
    // lg:grid-cols-6: 6 columns on desktop (your request)
    // gap-4: Adds breathing room so they don't spill into each other
    dom.glassTable.className = "glass-panel w-full h-full overflow-y-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 content-start items-start";

    const today = getDayName().slice(0, 2);
    const todayKey = getTodayKey();
    const takenItems = state.dailyLog[todayKey] || [];
    const todaysItems = state.schedule.filter(item => item.days.includes(today));

    if (todaysItems.length === 0) {
        dom.glassTable.innerHTML = `<div class="col-span-full text-center text-gray-400 font-medieval mt-10 text-xl">The table is clear. Rest well.</div>`;
        return;
    }

    todaysItems.forEach(item => {
        const dbItem = ingredientDatabase.find(i => i.id === item.dataId) || { ...mysteryItem, realName: item.customName };
        const isTaken = takenItems.includes(item.instanceId);

        const card = document.createElement('div');
        
        // 2. CARD SIZE FIX:
        // w-full: Forces card to fit the grid column (stops spilling)
        // h-auto: Allows height to adjust based on content
        // min-h-[140px]: Ensures consistent height
        card.className = `card relative w-full h-auto min-h-[140px] overflow-hidden rounded-lg bg-white/5 border border-white/10 flex flex-col items-center justify-between p-2 transition-all ${isTaken ? 'taken opacity-50 grayscale scale-95' : 'hover:scale-105'}`;
        
        // Remove fixed width if it exists in CSS
        card.style.width = '100%';
        card.style.setProperty('--aura-color', dbItem.baseColor);
        
        card.innerHTML = `
            <div class="w-full text-center mt-1">
                <img src="${dbItem.sprite}" alt="icon" class="h-12 w-12 mx-auto object-contain pixel-art drop-shadow-md">
            </div>
            
            <div class="flex-grow flex flex-col justify-center w-full px-1 text-center mt-2">
                <h2 class="font-medieval text-xs text-amber-100 leading-tight mb-1 line-clamp-1 break-words">${dbItem.fantasyName}</h2>
                <p class="text-gray-400 text-[9px] italic leading-tight line-clamp-2 overflow-hidden text-ellipsis">"${dbItem.description}"</p>
            </div>
            
            <div class="border-t border-gray-600 w-full py-1 bg-black/20 rounded-b-lg mt-2 text-center">
                <span class="text-[9px] text-gray-500 uppercase tracking-widest font-bold block truncate px-1">${item.customName || dbItem.realName}</span>
            </div>
        `;

        card.addEventListener('click', () => toggleCardState(item.instanceId, card, isTaken));
        dom.glassTable.appendChild(card);
    });

    if (todaysItems.length > 0 && takenItems.length === todaysItems.length) {
        showDailyComplete();
    }
}

function toggleCardState(instanceId, cardElement, wasTaken) {
    const todayKey = getTodayKey();
    if (!state.dailyLog[todayKey]) state.dailyLog[todayKey] = [];

    if (!wasTaken) {
        // --- TAKE THE SUPPLEMENT ---
        
        // 1. Play Sound
        const itemInSchedule = state.schedule.find(s => s.instanceId === instanceId);
        const dbItem = ingredientDatabase.find(i => i.id === itemInSchedule.dataId);
        
        if (dbItem && dbItem.sound) {
            playSound(dbItem.sound);
        }

        // 2. Animate
        cardElement.classList.add('animate-shake');
        
        // 3. Logic
        setTimeout(() => {
            state.dailyLog[todayKey].push(instanceId);
            state.xp += alchemyProgress.xpRewards.itemTaken;
            checkRewards();
            saveState();
            renderStats();
            renderCards();
        }, 300);
    } else {
        // --- UNDO ---
        state.dailyLog[todayKey] = state.dailyLog[todayKey].filter(id => id !== instanceId);
        state.xp = Math.max(0, state.xp - alchemyProgress.xpRewards.itemTaken);
        saveState();
        renderStats();
        renderCards();
    }
}

function showDailyComplete() {
    // --- NEW: Play the Reward Sound ---
    playSound('SFX/03Reward.mp3');
    // ----------------------------------

    dom.completionOverlay.classList.remove('hidden');
    
    // Animation timing
    setTimeout(() => {
        dom.completionOverlay.classList.remove('opacity-0');
        dom.completionOverlay.querySelector('#completion-message').classList.remove('scale-95');
        dom.completionOverlay.querySelector('#completion-message').classList.add('scale-100');
    }, 50);

    // Hide after 3 seconds
    setTimeout(() => {
        dom.completionOverlay.classList.add('opacity-0');
        setTimeout(() => dom.completionOverlay.classList.add('hidden'), 1000);
    }, 3000);
}

function renderStats() {
    // --- 1. Level & Title Logic ---
    // Calculate current level based on XP
    const currentLevel = alchemyProgress.levels.slice().reverse().find(l => state.xp >= l.minXP);
    const nextLevel = alchemyProgress.levels.find(l => l.minXP > state.xp);
    
    // Update UI Title
    dom.playerTitle.innerText = currentLevel ? currentLevel.title : "Novice";
    
    // Update Progress Bar Width
    if (nextLevel) {
        const prevXP = currentLevel ? currentLevel.minXP : 0;
        const percent = ((state.xp - prevXP) / (nextLevel.minXP - prevXP)) * 100;
        dom.xpBar.style.width = `${percent}%`;
    } else {
        // Max level reached
        dom.xpBar.style.width = '100%';
    }

    // --- 2. Rewards Logic (Only Earned Items) ---
    dom.rewardsContainer.innerHTML = '';
    
    // Filter to find only the rewards IDs that are inside the state.unlockedRewards array
    const earnedRewards = rewards.filter(reward => state.unlockedRewards.includes(reward.id));

    if (earnedRewards.length === 0) {
        dom.rewardsContainer.innerHTML = `<div class="text-[10px] text-gray-500 italic text-center w-full py-2">No relics discovered yet...</div>`;
    } else {
        earnedRewards.forEach(reward => {
            const el = document.createElement('div');
            // Styled container for the item
            el.className = `w-10 h-10 flex items-center justify-center p-1 rounded cursor-help transition transform hover:scale-125 reward-item bg-white/5 border border-white/10`;
            
            // Check if sprite is an image path (contains . or /) or an emoji
            const isImage = reward.sprite.includes('/') || reward.sprite.includes('.');
            
            if (isImage) {
                // Render as an Image
                el.innerHTML = `<img src="${reward.sprite}" alt="${reward.name}" class="w-full h-full object-contain pixel-art">`;
            } else {
                // Render as Text/Emoji
                el.innerText = reward.sprite;
                el.classList.add('text-2xl');
            }
            
            // Tooltip on hover
            el.setAttribute('data-desc', `${reward.name}: ${reward.description}`);
            
            dom.rewardsContainer.appendChild(el);
        });
    }

    // --- 3. History Logic (Last 7 Days) ---
    dom.historyList.innerHTML = '';
    const daysBack = 7;
    for (let i = 0; i < daysBack; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateKey = d.toDateString();
        const dateLabel = i === 0 ? "Today" : d.toLocaleDateString('en-US', { weekday: 'short' });
        
        const logs = state.dailyLog[dateKey] || [];
        const itemNames = logs.map(logId => {
            const schedItem = state.schedule.find(s => s.instanceId === logId);
            return schedItem ? (schedItem.customName || "Unknown") : "Retired Item";
        });

        const li = document.createElement('li');
        li.className = "flex justify-between border-b border-gray-700 pb-1";
        
        const statusHTML = itemNames.length > 0 
            ? `<span class="text-green-400 truncate w-40 text-right text-xs">${itemNames.join(', ')}</span>`
            : `<span class="text-gray-600 text-xs">-</span>`;
            
        li.innerHTML = `<span class="text-gray-400 font-mono text-xs">${dateLabel}</span> ${statusHTML}`;
        dom.historyList.appendChild(li);
    }
}

// Render Stats End

function renderConfig() {
    dom.activeList.innerHTML = '';
    state.schedule.forEach(item => {
        const li = document.createElement('li');
        li.className = "flex justify-between items-center bg-gray-800 p-2 rounded border border-gray-700";
        li.innerHTML = `
            <div class="flex flex-col">
                <span class="text-sm font-bold text-amber-100">${item.customName}</span>
                <span class="text-xs text-gray-500">${item.days.length === 7 ? 'Daily' : item.days.join(', ')}</span>
            </div>
            <button class="text-red-400 hover:text-red-200" onclick="removeScheduleItem('${item.instanceId}')">&times;</button>
        `;
        li.querySelector('button').addEventListener('click', () => {
             state.schedule = state.schedule.filter(i => i.instanceId !== item.instanceId);
             saveState();
             renderConfig();
             renderCards();
        });
        dom.activeList.appendChild(li);
    });
}

dom.addBtn.addEventListener('click', () => {
    const inputName = dom.addInput.value.trim();
    if (!inputName) return;

    const selectedButtons = document.querySelectorAll('.day-btn.selected');
    let days = Array.from(selectedButtons).map(btn => btn.dataset.day);
    if (days.length === 0) days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']; 

    const dbMatch = ingredientDatabase.find(i => i.realName.toLowerCase() === inputName.toLowerCase());
    
    state.schedule.push({
        instanceId: Date.now().toString(),
        dataId: dbMatch ? dbMatch.id : "unknown",
        customName: dbMatch ? dbMatch.realName : inputName, 
        days: days
    });

    saveState();
    dom.addInput.value = '';
    document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('bg-amber-600', 'text-white', 'selected'));
    
    renderConfig();
    renderCards();
});

// Sidebar Logic
dom.openConfigBtn.addEventListener('click', () => {
    dom.statsSidebar.classList.add('translate-x-full'); 
    dom.configSidebar.classList.remove('translate-x-full');
});
dom.closeConfigBtn.addEventListener('click', () => dom.configSidebar.classList.add('translate-x-full'));

dom.openStatsBtn.addEventListener('click', () => {
    dom.configSidebar.classList.add('translate-x-full');
    dom.statsSidebar.classList.remove('translate-x-full');
});
dom.closeStatsBtn.addEventListener('click', () => dom.statsSidebar.classList.add('translate-x-full'));

// --- TESTING TOOLS ---

// 1. Factory Reset (Nuke Button)
if (dom.resetBtn) {
    dom.resetBtn.addEventListener('click', () => {
        if(confirm("Factory Reset: Wipe everything?")) {
            localStorage.removeItem('alchemyTrackerState');
            location.reload(); 
        }
    });
}

// 2. Day Reset (Lazy Reset Button)
const testResetBtn = document.getElementById('test-reset-day');
if (testResetBtn) {
    testResetBtn.addEventListener('click', () => {
        const todayKey = getTodayKey();
        state.dailyLog[todayKey] = []; // Clear today
        state.lastVisit = "Jan 01 1900"; // Trick timer
        saveState();
        init(); 
        console.log("✨ Day reset for testing.");
    });
}

init();
