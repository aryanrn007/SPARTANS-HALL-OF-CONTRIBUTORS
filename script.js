// ─── Inject modal + confetti container into the page ───────────────────────
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="confetti-container" id="confetti-container"></div>

        <div class="pixel-overlay" id="celebrate-overlay">
            <div class="pixel-modal">
                <span class="modal-badge">🏆</span>
                <h2>LEGENDARY MOVE!</h2>
                <span class="modal-name" id="modal-contributor-name"></span>
                <p>You're officially an<br>open-source contributor.<br>The Spartans are proud! ⚔️</p>
                <button class="close-btn" onclick="closePopup()">[ CLOSE ]</button>
            </div>
        </div>
    `);

    // Close modal when clicking the backdrop
    document.getElementById('celebrate-overlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('celebrate-overlay')) closePopup();
    });
});

// ─── Show celebration modal ─────────────────────────────────────────────────
function showPopup(name) {
    const nameEl = document.getElementById('modal-contributor-name');
    if (nameEl && name) nameEl.textContent = name + '!';

    document.getElementById('celebrate-overlay').classList.add('active');
    launchConfetti();
}

// ─── Close celebration modal ────────────────────────────────────────────────
function closePopup() {
    document.getElementById('celebrate-overlay').classList.remove('active');
    document.getElementById('confetti-container').innerHTML = '';
}

// ─── Pixel confetti animation ───────────────────────────────────────────────
function launchConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    container.innerHTML = '';

    const colors = ['#facc15', '#3b82f6', '#ef4444', '#f0f0f0', '#a78bfa', '#34d399'];

    for (let i = 0; i < 60; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('confetti-pixel');
        pixel.style.left = Math.random() * 100 + 'vw';
        pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        pixel.style.animationDuration = (1.5 + Math.random() * 2) + 's';
        pixel.style.animationDelay = (Math.random() * 0.8) + 's';
        const size = (6 + Math.random() * 10) + 'px';
        pixel.style.width = size;
        pixel.style.height = size;
        container.appendChild(pixel);
    }
}
