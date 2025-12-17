// --- STATE MANAGEMENT ---
let loginTimestamp = null; 
let currentMode = null; // 'login' or 'logout'
let timerInterval;

// --- DOM ELEMENTS ---
const overlay = document.getElementById('overlay');
const selectionModal = document.getElementById('selectionModal');
const qrView = document.getElementById('qrView');
const qrStatusText = document.getElementById('qrStatusText');
const timerEl = document.getElementById('timerCount');
const toast = document.getElementById('toastMsg');

// --- EVENT LISTENERS ---
document.getElementById('qrTriggerBtn').addEventListener('click', openSelectionModal);
document.getElementById('btnCancel').addEventListener('click', closeOverlay);
document.getElementById('btnBack').addEventListener('click', backToSelection);
document.getElementById('btnLogin').addEventListener('click', () => openQR('login'));
document.getElementById('btnLogout').addEventListener('click', () => openQR('logout'));
document.getElementById('btnRefresh').addEventListener('click', resetTimer);
document.getElementById('btnSimulate').addEventListener('click', simulateScan);

// --- UI FUNCTIONS ---

function openSelectionModal() {
    overlay.style.display = 'flex';
    selectionModal.style.display = 'flex';
    qrView.style.display = 'none';
}

function closeOverlay() {
    overlay.style.display = 'none';
    stopTimer();
}

function backToSelection() {
    selectionModal.style.display = 'flex';
    qrView.style.display = 'none';
    stopTimer();
}

function openQR(type) {
    currentMode = type;
    selectionModal.style.display = 'none';
    qrView.style.display = 'flex';

    if (type === 'login') {
        qrStatusText.innerText = "تسجيل الدخول";
        qrStatusText.className = "qr-status-text color-green";
    } else {
        qrStatusText.innerText = "تسجيل الخروج";
        qrStatusText.className = "qr-status-text color-red";
    }

    startTimer();
}

// --- TIMER LOGIC ---
function startTimer() {
    let seconds = 30;
    
    clearInterval(timerInterval); // clear any existing
    updateTimerDisplay(seconds);

    timerInterval = setInterval(() => {
        seconds--;
        updateTimerDisplay(seconds);

        if (seconds <= 0) {
            seconds = 30; // Auto reset for demo
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    if (seconds < 10) {
        timerEl.innerText = `0:0${seconds}`;
    } else {
        timerEl.innerText = `0:${seconds}`;
    }
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    startTimer();
}

// --- BUSINESS LOGIC (THE TEST) ---

function showToast(message) {
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function simulateScan() {
    // Close the modal to simulate a "Scan Complete" interaction
    closeOverlay();

    if (currentMode === 'login') {
        // LOGIC: Set the login time
        loginTimestamp = new Date();
        showToast("تم تسجيل الدخول بنجاح");
        console.log("Logged in at: " + loginTimestamp);
    } 
    else if (currentMode === 'logout') {
        // LOGIC: Check time difference
        if (!loginTimestamp) {
            showToast("لم تقم بتسجيل الدخول بعد");
            return;
        }

        const now = new Date();
        const diffInMs = now - loginTimestamp;
        const diffInMinutes = diffInMs / 60000;

        console.log(`Minutes elapsed: ${diffInMinutes}`);

        if (diffInMinutes < 2) {
            // Less than 2 minutes
            showToast("لم يتم تسجيل الخروج بعد الرجاء اكمال حد الساعات المطلوب");
        } else {
            // Success
            showToast("Logout success");
            loginTimestamp = null; // Reset for next day testing
        }
    }

}
