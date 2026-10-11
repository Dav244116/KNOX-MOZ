// State Variables
let isHeadshotActive = false;
let headshots = 0;
let accuracy = 75;
let fps = 60;

// DOM Elements
const toggleInput = document.getElementById('headshot-toggle');
const toggleText = document.getElementById('toggle-text');
const statusBadge = document.getElementById('mod-status');
const hsCountEl = document.getElementById('hs-count');
const accuracyEl = document.getElementById('accuracy');
const fpsEl = document.getElementById('fps');
const sensitivitySlider = document.getElementById('sensitivity-slider');
const sensitivityValue = document.getElementById('sensitivity-value');

// Toggle Headshot Mode
toggleInput.addEventListener('change', function() {
    isHeadshotActive = this.checked;
    
    if (isHeadshotActive) {
        toggleText.innerText = "Enabled";
        toggleText.style.color = "#ff4757";
        statusBadge.innerText = "LIVE";
        statusBadge.style.color = "#2ed573"; // Green for active
        startSimulation();
    } else {
        toggleText.innerText = "Disabled";
        toggleText.style.color = "#aaa";
        statusBadge.innerText = "OFFLINE";
        statusBadge.style.color = "#ff4757";
        stopSimulation();
    }
});

// Sensitivity Slider Update
sensitivitySlider.addEventListener('input', function() {
    sensitivityValue.innerText = this.value + "%";
    accuracy = this.value; // Update accuracy based on slider
    accuracyEl.innerText = accuracy + "%";
});

// Simulate Match Activity
let simulationInterval;

function startSimulation() {
    simulationInterval = setInterval(() => {
        if (isHeadshotActive) {
            // Randomly increment headshots to simulate gameplay
            const randomHS = Math.random() > 0.7 ? 1 : 0;
            if (randomHS) {
                headshots++;
                hsCountEl.innerText = headshots;
                
                // Visual feedback: Flash the screen slightly red
                document.body.style.backgroundColor = "#2a0a0a";
                setTimeout(() => {
                    document.body.style.backgroundColor = "#0f0f1a";
                }, 100);
            }

            // Simulate FPS fluctuation
            fps = Math.floor(Math.random() * (65 - 58) + 58);
            fpsEl.innerText = fps;
        }
    }, 2000); // Update every 2 seconds
}

function stopSimulation() {
    clearInterval(simulationInterval);
    headshots = 0; // Reset stats when turned off
    hsCountEl.innerText = "0";
    fps = 60;
    fpsEl.innerText = "60";
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log("Knox Mod Panel Loaded");
});