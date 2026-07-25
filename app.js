const firebaseConfig = {
    apiKey: "AIzaSyAf8jwUDifdo5TCcDmzQBRdLjmT8w5W8fo",
    authDomain: "elementaryquiz.firebaseapp.com",
    projectId: "elementaryquiz",
    storageBucket: "elementaryquiz.firebasestorage.app",
    messagingSenderId: "517327642692",
    appId: "1:517327642692:web:397ecf73521b31ca64dc11"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Data
const questionsDb = {
    "1": { // Class 1
        math: [
            { q: {en: "What is 1 + 1?", id: "Berapa 1 + 1?"}, options: {en: ["1", "2", "3", "4"], id: ["1", "2", "3", "4"]}, answer: 1 },
            { q: {en: "What is 2 + 2?", id: "Berapa 2 + 2?"}, options: {en: ["3", "4", "5", "6"], id: ["3", "4", "5", "6"]}, answer: 1 },
            { q: {en: "What is 3 + 1?", id: "Berapa 3 + 1?"}, options: {en: ["2", "3", "4", "5"], id: ["2", "3", "4", "5"]}, answer: 2 },
            { q: {en: "What is 5 - 1?", id: "Berapa 5 - 1?"}, options: {en: ["3", "4", "5", "6"], id: ["3", "4", "5", "6"]}, answer: 1 },
            { q: {en: "What is 4 - 2?", id: "Berapa 4 - 2?"}, options: {en: ["1", "2", "3", "4"], id: ["1", "2", "3", "4"]}, answer: 1 },
            { q: {en: "How many fingers on one hand?", id: "Berapa jumlah jari di satu tangan?"}, options: {en: ["4", "5", "6", "10"], id: ["4", "5", "6", "10"]}, answer: 1 },
            { q: {en: "What is 10 - 5?", id: "Berapa 10 - 5?"}, options: {en: ["4", "5", "6", "7"], id: ["4", "5", "6", "7"]}, answer: 1 },
            { q: {en: "What is 6 + 2?", id: "Berapa 6 + 2?"}, options: {en: ["7", "8", "9", "10"], id: ["7", "8", "9", "10"]}, answer: 1 },
            { q: {en: "What is 9 - 1?", id: "Berapa 9 - 1?"}, options: {en: ["7", "8", "9", "10"], id: ["7", "8", "9", "10"]}, answer: 1 },
            { q: {en: "What is 2 + 5?", id: "Berapa 2 + 5?"}, options: {en: ["5", "6", "7", "8"], id: ["5", "6", "7", "8"]}, answer: 2 }
        ],
        indo: [
            { q: {en: "A is for...", id: "A untuk huruf awalan kata..."}, options: {en: ["Buku", "Ayam", "Kucing", "Bola"], id: ["Buku", "Ayam", "Kucing", "Bola"]}, answer: 1 },
            { q: {en: "B is for...", id: "B untuk huruf awalan kata..."}, options: {en: ["Buku", "Ayam", "Kucing", "Meja"], id: ["Buku", "Ayam", "Kucing", "Meja"]}, answer: 0 },
            { q: {en: "C is for...", id: "C untuk huruf awalan kata..."}, options: {en: ["Buku", "Ayam", "Cicak", "Bola"], id: ["Buku", "Ayam", "Cicak", "Bola"]}, answer: 2 },
            { q: {en: "The opposite of Big is?", id: "Lawan kata Besar adalah?"}, options: {en: ["Kecil", "Tinggi", "Luas", "Panjang"], id: ["Kecil", "Tinggi", "Luas", "Panjang"]}, answer: 0 },
            { q: {en: "The opposite of Hot is?", id: "Lawan kata Panas adalah?"}, options: {en: ["Hangat", "Dingin", "Cerah", "Mendung"], id: ["Hangat", "Dingin", "Cerah", "Mendung"]}, answer: 1 },
            { q: {en: "We read a...", id: "Kita membaca sebuah..."}, options: {en: ["Baju", "Buku", "Sepatu", "Topi"], id: ["Baju", "Buku", "Sepatu", "Topi"]}, answer: 1 },
            { q: {en: "We write with a...", id: "Kita menulis menggunakan..."}, options: {en: ["Pensil", "Piring", "Sendok", "Gelas"], id: ["Pensil", "Piring", "Sendok", "Gelas"]}, answer: 0 },
            { q: {en: "The color of the sky is...", id: "Warna langit adalah..."}, options: {en: ["Merah", "Kuning", "Biru", "Hijau"], id: ["Merah", "Kuning", "Biru", "Hijau"]}, answer: 2 },
            { q: {en: "The sun is...", id: "Matahari bentuknya..."}, options: {en: ["Kotak", "Segitiga", "Bulat", "Panjang"], id: ["Kotak", "Segitiga", "Bulat", "Panjang"]}, answer: 2 },
            { q: {en: "Sugar tastes...", id: "Rasa gula adalah..."}, options: {en: ["Pahit", "Manis", "Asin", "Asam"], id: ["Pahit", "Manis", "Asin", "Asam"]}, answer: 1 }
        ],
        english: [
            { q: {en: "What is this color: 🔴", id: "Apa warna ini: 🔴"}, options: {en: ["Blue", "Red", "Green", "Yellow"], id: ["Biru", "Merah", "Hijau", "Kuning"]}, answer: 1 },
            { q: {en: "What is this color: 🔵", id: "Apa warna ini: 🔵"}, options: {en: ["Blue", "Red", "Green", "Yellow"], id: ["Biru", "Merah", "Hijau", "Kuning"]}, answer: 0 },
            { q: {en: "Which animal is a Cat?", id: "Manakah yang merupakan Kucing?"}, options: {en: ["🐶", "🐱", "🐭", "🐰"], id: ["🐶", "🐱", "🐭", "🐰"]}, answer: 1 },
            { q: {en: "Which animal is a Dog?", id: "Manakah yang merupakan Anjing?"}, options: {en: ["🐶", "🐱", "🐭", "🐰"], id: ["🐶", "🐱", "🐭", "🐰"]}, answer: 0 },
            { q: {en: "How many apples? 🍎🍎", id: "Ada berapa apel? 🍎🍎"}, options: {en: ["One", "Two", "Three", "Four"], id: ["Satu", "Dua", "Tiga", "Empat"]}, answer: 1 },
            { q: {en: "How many stars? ⭐⭐⭐", id: "Ada berapa bintang? ⭐⭐⭐"}, options: {en: ["One", "Two", "Three", "Four"], id: ["Satu", "Dua", "Tiga", "Empat"]}, answer: 2 },
            { q: {en: "Hello means...", id: "Hello artinya..."}, options: {en: ["Halo", "Selamat Pagi", "Terima Kasih", "Maaf"], id: ["Halo", "Selamat Pagi", "Terima Kasih", "Maaf"]}, answer: 0 },
            { q: {en: "Good Morning means...", id: "Good Morning artinya..."}, options: {en: ["Halo", "Selamat Pagi", "Terima Kasih", "Selamat Malam"], id: ["Halo", "Selamat Pagi", "Terima Kasih", "Selamat Malam"]}, answer: 1 },
            { q: {en: "Thank you means...", id: "Thank you artinya..."}, options: {en: ["Halo", "Selamat Pagi", "Terima Kasih", "Sama-sama"], id: ["Halo", "Selamat Pagi", "Terima Kasih", "Sama-sama"]}, answer: 2 },
            { q: {en: "Apple in Indonesian is...", id: "Apple dalam bahasa Indonesia adalah..."}, options: {en: ["Jeruk", "Apel", "Pisang", "Mangga"], id: ["Jeruk", "Apel", "Pisang", "Mangga"]}, answer: 1 }
        ],
        general: [
            { q: {en: "Who teaches in a school?", id: "Siapa yang mengajar di sekolah?"}, options: {en: ["Doctor", "Teacher", "Police", "Farmer"], id: ["Dokter", "Guru", "Polisi", "Petani"]}, answer: 1 },
            { q: {en: "Who helps sick people?", id: "Siapa yang merawat orang sakit?"}, options: {en: ["Doctor", "Teacher", "Singer", "Dancer"], id: ["Dokter", "Guru", "Penyanyi", "Penari"]}, answer: 0 },
            { q: {en: "Who cooks food?", id: "Siapa yang memasak makanan?"}, options: {en: ["Chef", "Pilot", "Driver", "Farmer"], id: ["Koki", "Pilot", "Sopir", "Petani"]}, answer: 0 },
            { q: {en: "Who flies airplanes?", id: "Siapa yang menerbangkan pesawat?"}, options: {en: ["Driver", "Sailor", "Pilot", "Doctor"], id: ["Sopir", "Pelaut", "Pilot", "Dokter"]}, answer: 2 },
            { q: {en: "Who drives a bus?", id: "Siapa yang mengemudikan bus?"}, options: {en: ["Driver", "Sailor", "Pilot", "Teacher"], id: ["Sopir", "Pelaut", "Pilot", "Guru"]}, answer: 0 },
            { q: {en: "Who catches bad guys?", id: "Siapa yang menangkap penjahat?"}, options: {en: ["Police", "Doctor", "Firefighter", "Chef"], id: ["Polisi", "Dokter", "Pemadam Kebakaran", "Koki"]}, answer: 0 },
            { q: {en: "Who puts out fires?", id: "Siapa yang memadamkan api?"}, options: {en: ["Firefighter", "Police", "Doctor", "Teacher"], id: ["Pemadam Kebakaran", "Polisi", "Dokter", "Guru"]}, answer: 0 },
            { q: {en: "Who grows food on a farm?", id: "Siapa yang menanam sayuran di sawah/kebun?"}, options: {en: ["Farmer", "Chef", "Doctor", "Teacher"], id: ["Petani", "Koki", "Dokter", "Guru"]}, answer: 0 },
            { q: {en: "Who fixes our teeth?", id: "Siapa yang mengobati gigi kita?"}, options: {en: ["Dentist", "Eye Doctor", "Nurse", "Chef"], id: ["Dokter Gigi", "Dokter Mata", "Perawat", "Koki"]}, answer: 0 },
            { q: {en: "Who builds houses?", id: "Siapa yang membangun rumah?"}, options: {en: ["Builder", "Teacher", "Doctor", "Pilot"], id: ["Tukang Bangunan", "Guru", "Dokter", "Pilot"]}, answer: 0 }
        ]
    },
    // Placeholders for Classes 2-6
    "2": { math: [], indo: [], english: [], general: [] },
    "3": { math: [], indo: [], english: [], general: [] },
    "4": { math: [], indo: [], english: [], general: [] },
    "5": { math: [], indo: [], english: [], general: [] },
    "6": { math: [], indo: [], english: [], general: [] }
};

const i18n = {
    en: {
        subtitle: "Are you ready to test your knowledge?",
        startBtn: "Play Now!",
        chooseClass: "Choose Your Class",
        class1: "Class 1",
        class2: "Class 2",
        class3: "Class 3",
        class4: "Class 4",
        class5: "Class 5",
        class6: "Class 6",
        chooseSubject: "Choose Your Subject",
        backClass: "Back",
        backSubject: "Back",
        score: "Score: ",
        question: "Question ",
        quizComplete: "Quiz Complete!",
        finalScoreTitle: "Your Final Score",
        playAgain: "Play Again",
        mainMenu: "Main Menu",
        feedbackOutstanding: "Outstanding Performance! 🌟",
        feedbackGood: "Good Job! Keep practicing! 👍",
        feedbackTry: "Nice try! You'll get it next time! 💪",
        subjMath: "Math",
        subjIndo: "Bahasa Indonesia",
        subjEnglish: "English",
        subjGeneral: "Professions",
        chooseMode: "Choose Game Mode",
        singlePlayer: "Single Player",
        multiPlayer: "Multiplayer",
        multiHub: "Multiplayer",
        hostRoom: "Host Room",
        joinRoom: "Join Room",
        joinTitle: "Join a Room",
        joinBtn: "Join",
        waitingPlayers: "Waiting for players...",
        startMulti: "Start Game",
        quitLobby: "Quit Room",
        podiumTitle: "Leaderboard",
        podiumHome: "Main Menu",
        backStartMode: "Back",
        backModeHub: "Back",
        backHubJoin: "Back"
    },
    id: {
        subtitle: "Apakah kamu siap menguji pengetahuanmu?",
        startBtn: "Mulai Bermain!",
        chooseClass: "Pilih Kelasmu",
        class1: "Kelas 1",
        class2: "Kelas 2",
        class3: "Kelas 3",
        class4: "Kelas 4",
        class5: "Kelas 5",
        class6: "Kelas 6",
        chooseSubject: "Pilih Pelajaran",
        backClass: "Kembali",
        backSubject: "Kembali",
        score: "Skor: ",
        question: "Pertanyaan ",
        quizComplete: "Kuis Selesai!",
        finalScoreTitle: "Skor Akhir Kamu",
        playAgain: "Main Lagi",
        mainMenu: "Menu Utama",
        feedbackOutstanding: "Penampilan Luar Biasa! 🌟",
        feedbackGood: "Kerja Bagus! Terus berlatih! 👍",
        feedbackTry: "Usaha yang bagus! Coba lagi! 💪",
        subjMath: "Matematika",
        subjIndo: "Bahasa Indonesia",
        subjEnglish: "Bahasa Inggris",
        subjGeneral: "Profesi",
        chooseMode: "Pilih Mode Permainan",
        singlePlayer: "Pemain Tunggal",
        multiPlayer: "Banyak Pemain",
        multiHub: "Banyak Pemain",
        hostRoom: "Buat Ruangan",
        joinRoom: "Gabung Ruangan",
        joinTitle: "Gabung ke Ruangan",
        joinBtn: "Gabung",
        waitingPlayers: "Menunggu pemain lain...",
        startMulti: "Mulai Permainan",
        quitLobby: "Keluar Ruangan",
        podiumTitle: "Papan Peringkat",
        podiumHome: "Menu Utama",
        backStartMode: "Kembali",
        backModeHub: "Kembali",
        backHubJoin: "Kembali"
    }
};

// State Variables
let currentLang = 'en';
let currentClass = '1';
let currentSubject = '';
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 20;
const TIME_LIMIT = 20;
let audioInitialized = false;

// Multiplayer State
let isMultiplayer = false;
let isHost = false;
let roomPin = null;
let playerId = Math.random().toString(36).substring(2, 10);
let playerName = "";
let roomRef = null;
let playersData = {};
let dbListeners = [];

function getQuestions(cls, subj) {
    if (questionsDb[cls] && questionsDb[cls][subj] && questionsDb[cls][subj].length > 0) {
        return questionsDb[cls][subj];
    }
    return questionsDb["1"][subj];
}

// DOM Elements
const screens = document.querySelectorAll('.screen');
const startBtn = document.getElementById('start-btn');
const classBtns = document.querySelectorAll('.class-btn');
const subjectBtns = document.querySelectorAll('.subject-btn');
const backToStartFromClassBtn = document.getElementById('back-to-start-from-class');
const backToClassFromSubjectBtn = document.getElementById('back-to-class');
const playAgainBtn = document.getElementById('play-again-btn');
const homeBtn = document.getElementById('home-btn');
const langEnBtn = document.getElementById('lang-en');
const langIdBtn = document.getElementById('lang-id');
const questionText = document.getElementById('question-text');
const options = document.querySelectorAll('.option-btn');
const optTexts = document.querySelectorAll('.opt-text');
const scoreDisplay = document.getElementById('current-score');
const timeDisplay = document.getElementById('time-left');
const timerCircle = document.querySelector('.timer-circle');
const currentQNum = document.getElementById('current-q-num');
const totalQNum = document.getElementById('total-q-num');
const finalScore = document.getElementById('final-score');
const feedbackMessage = document.getElementById('feedback-message');

const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const mainBgm = document.getElementById('main-bgm');
const quizBgm = document.getElementById('quiz-bgm');

// Multiplayer DOM
const modeSingleBtn = document.getElementById('mode-single');
const modeMultiBtn = document.getElementById('mode-multi');
const multiHostBtn = document.getElementById('multi-host');
const multiJoinBtn = document.getElementById('multi-join');
const joinNameInput = document.getElementById('join-name');
const joinPinInput = document.getElementById('join-pin');
const joinRoomBtn = document.getElementById('join-room-btn');
const joinError = document.getElementById('join-error');
const lobbyPinDisplay = document.getElementById('lobby-pin');
const playerListDiv = document.getElementById('player-list');
const startMultiBtn = document.getElementById('start-multi-btn');
const waitingHostText = document.getElementById('waiting-host-text');
const quitLobbyBtn = document.getElementById('quit-lobby-btn');
const backToStartFromMode = document.getElementById('back-to-start-from-mode');
const backToModeFromHub = document.getElementById('back-to-mode-from-hub');
const backToHubFromJoin = document.getElementById('back-to-hub-from-join');
const podiumHomeBtn = document.getElementById('podium-home-btn');

// I18N DOM Elements (only updating some core ones for brevity, static translation runs dynamically)
const tSubtitle = document.getElementById('t-subtitle');

function setLanguage(lang) {
    currentLang = lang;
    
    if(lang === 'en') {
        langEnBtn.classList.add('active');
        langIdBtn.classList.remove('active');
    } else {
        langIdBtn.classList.add('active');
        langEnBtn.classList.remove('active');
    }

    // Dynamic Translation Loop
    Object.keys(i18n[lang]).forEach(key => {
        const el = document.getElementById(`t-${key}`);
        if(el) el.textContent = i18n[lang][key];
    });
    
    if (document.getElementById('quiz-screen').classList.contains('active')) {
        const qList = getQuestions(currentClass, currentSubject);
        const currentQ = qList[currentQuestionIndex];
        questionText.textContent = currentQ.q[currentLang];
        currentQ.options[currentLang].forEach((opt, index) => {
            optTexts[index].textContent = opt;
        });
    }
}

function manageAudio(screenId) {
    if (!audioInitialized) return;
    
    if (screenId === 'quiz-screen') {
        mainBgm.pause();
        quizBgm.currentTime = 0;
        quizBgm.play().catch(e => {});
    } else {
        quizBgm.pause();
        if (mainBgm.paused) {
            mainBgm.play().catch(e => {});
        }
    }
}

function showScreen(screenId) {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    manageAudio(screenId);
}

// ---------------- Multiplayer Logic ----------------

function createFirebaseRoom(subject) {
    currentSubject = subject;
    roomPin = Math.floor(1000 + Math.random() * 9000).toString(); // 4 digit pin
    lobbyPinDisplay.textContent = roomPin;
    
    roomRef = db.ref('rooms/' + roomPin);
    roomRef.set({
        status: 'waiting',
        class: currentClass,
        subject: currentSubject,
        currentQuestionIndex: 0,
        hostId: playerId
    });
    
    roomRef.onDisconnect().remove(); // Auto-delete room if host leaves
    
    startMultiBtn.style.display = 'block';
    waitingHostText.style.display = 'none';
    
    setupRoomListeners();
    showScreen('lobby-screen');
}

async function joinFirebaseRoom() {
    const name = joinNameInput.value.trim();
    const pin = joinPinInput.value.trim();
    if (!name || !pin) return;
    
    try {
        const rRef = db.ref('rooms/' + pin);
        const snapshot = await rRef.once('value');
        if (snapshot.exists() && snapshot.val().status === 'waiting') {
            playerName = name;
            roomPin = pin;
            roomRef = rRef;
            
            currentClass = snapshot.val().class;
            currentSubject = snapshot.val().subject;
            
            const playerRef = db.ref(`rooms/${pin}/players/${playerId}`);
            playerRef.set({ name: playerName, score: 0, hasAnswered: false });
            playerRef.onDisconnect().remove();
            
            startMultiBtn.style.display = 'none';
            waitingHostText.style.display = 'block';
            lobbyPinDisplay.textContent = roomPin;
            joinError.style.display = 'none';
            
            setupRoomListeners();
            showScreen('lobby-screen');
        } else {
            joinError.textContent = "Room not found or already playing!";
            joinError.style.display = 'block';
        }
    } catch (error) {
        console.error("Error joining room:", error);
        joinError.textContent = "Database error. Check console.";
        joinError.style.display = 'block';
    }
}

function setupRoomListeners() {
    // Clear old listeners
    dbListeners.forEach(listener => listener.ref.off('value', listener.cb));
    dbListeners = [];
    
    // Listen to players joining/updating
    const refPlayers = db.ref(`rooms/${roomPin}/players`);
    const cbPlayers = (snapshot) => {
        playersData = snapshot.val() || {};
        renderPlayerList();
    };
    refPlayers.on('value', cbPlayers);
    dbListeners.push({ ref: refPlayers, cb: cbPlayers });
    
    // Listen to game status
    const refStatus = db.ref(`rooms/${roomPin}/status`);
    const cbStatus = (snapshot) => {
        if (!snapshot.exists()) {
            if (document.getElementById('lobby-screen').classList.contains('active') || document.getElementById('quiz-screen').classList.contains('active')) {
                alert(i18n[currentLang].quizComplete || "Room closed.");
                window.location.reload();
            }
            return;
        }
        
        const status = snapshot.val();
        if (status === 'playing' && document.getElementById('lobby-screen').classList.contains('active')) {
            initQuiz(currentSubject);
        } else if (status === 'finished') {
            showPodium();
        }
    };
    refStatus.on('value', cbStatus);
    dbListeners.push({ ref: refStatus, cb: cbStatus });
    
    // Listen to question changes
    const refQ = db.ref(`rooms/${roomPin}/currentQuestionIndex`);
    const cbQ = (snapshot) => {
        if (snapshot.exists()) {
            const newIndex = snapshot.val();
            if (newIndex > currentQuestionIndex && document.getElementById('quiz-screen').classList.contains('active')) {
                currentQuestionIndex = newIndex;
                loadQuestion();
            }
        }
    };
    refQ.on('value', cbQ);
    dbListeners.push({ ref: refQ, cb: cbQ });
}

function renderPlayerList() {
    playerListDiv.innerHTML = '';
    Object.values(playersData).forEach(p => {
        const div = document.createElement('div');
        div.textContent = p.name + " (" + p.score + ")";
        div.style.padding = '0.5rem 1rem';
        div.style.background = 'white';
        div.style.borderRadius = '20px';
        div.style.fontWeight = 'bold';
        div.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        playerListDiv.appendChild(div);
    });
}

function showPodium() {
    showScreen('podium-screen');
    const sortedPlayers = Object.values(playersData).sort((a, b) => b.score - a.score);
    
    if (sortedPlayers[0]) {
        document.getElementById('podium-1-name').textContent = sortedPlayers[0].name;
        document.getElementById('podium-1-score').textContent = sortedPlayers[0].score;
    }
    if (sortedPlayers[1]) {
        document.getElementById('podium-2-name').textContent = sortedPlayers[1].name;
        document.getElementById('podium-2-score').textContent = sortedPlayers[1].score;
    }
    if (sortedPlayers[2]) {
        document.getElementById('podium-3-name').textContent = sortedPlayers[2].name;
        document.getElementById('podium-3-score').textContent = sortedPlayers[2].score;
    }
}

// ---------------- Core Quiz Logic ----------------

function initQuiz(subject) {
    currentSubject = subject;
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    
    const qList = getQuestions(currentClass, currentSubject);
    totalQNum.textContent = qList.length;
    
    showScreen('quiz-screen');
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const qList = getQuestions(currentClass, currentSubject);
    const currentQ = qList[currentQuestionIndex];
    
    questionText.textContent = currentQ.q[currentLang];
    currentQNum.textContent = currentQuestionIndex + 1;
    
    currentQ.options[currentLang].forEach((opt, index) => {
        optTexts[index].textContent = opt;
    });

    startTimer();
}

function resetState() {
    clearInterval(timer);
    timeLeft = TIME_LIMIT;
    timeDisplay.textContent = timeLeft;
    timerCircle.classList.remove('warning');
    
    options.forEach(opt => {
        opt.classList.remove('disabled', 'correct', 'wrong');
        opt.style.backgroundColor = '';
    });
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        
        if (timeLeft <= 5) {
            timerCircle.classList.add('warning');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    const qList = getQuestions(currentClass, currentSubject);
    const currentQ = qList[currentQuestionIndex];
    options.forEach(opt => opt.classList.add('disabled'));
    options[currentQ.answer].classList.add('correct');
    
    if(wrongSound) wrongSound.play().catch(e=>{});
    
    if (isMultiplayer) {
        if (!isHost) {
            db.ref(`rooms/${roomPin}/players/${playerId}`).update({ hasAnswered: true });
        }
        if (isHost) setTimeout(hostNextQuestion, 4000);
    } else {
        setTimeout(nextQuestion, 2000);
    }
}

function selectAnswer(selectedIndex) {
    if (options[0].classList.contains('disabled')) return; // block double clicks
    clearInterval(timer);
    
    const qList = getQuestions(currentClass, currentSubject);
    const currentQ = qList[currentQuestionIndex];
    
    options.forEach(opt => opt.classList.add('disabled'));
    
    if (selectedIndex === currentQ.answer) {
        score += 10; 
        scoreDisplay.textContent = score;
        options[selectedIndex].classList.add('correct');
        if(correctSound) correctSound.play().catch(e=>{});
    } else {
        options[selectedIndex].classList.add('wrong');
        options[currentQ.answer].classList.add('correct');
        if(wrongSound) wrongSound.play().catch(e=>{});
    }
    
    if (isMultiplayer) {
        // In multiplayer, send score to DB and wait for Host to push next question
        if (!isHost) {
            db.ref(`rooms/${roomPin}/players/${playerId}`).update({ score: score, hasAnswered: true });
        }
        if (isHost) {
            // Host acts as the game engine, triggering the next question for everyone
            setTimeout(hostNextQuestion, 4000);
        }
    } else {
        setTimeout(nextQuestion, 2000);
    }
}

function hostNextQuestion() {
    const qList = getQuestions(currentClass, currentSubject);
    if (currentQuestionIndex + 1 < qList.length) {
        db.ref(`rooms/${roomPin}`).update({ currentQuestionIndex: currentQuestionIndex + 1 });
    } else {
        db.ref(`rooms/${roomPin}`).update({ status: 'finished' });
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    const qList = getQuestions(currentClass, currentSubject);
    if (currentQuestionIndex < qList.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    showScreen('result-screen');
    
    let currentScoreAnim = 0;
    const increment = Math.max(1, Math.ceil(score / 50));
    
    if (score === 0) {
        finalScore.textContent = 0;
    } else {
        const scoreTimer = setInterval(() => {
            currentScoreAnim += increment;
            if (currentScoreAnim >= score) {
                currentScoreAnim = score;
                clearInterval(scoreTimer);
            }
            finalScore.textContent = currentScoreAnim;
        }, 20);
    }

    if (score >= 80) feedbackMessage.textContent = i18n[currentLang].feedbackOutstanding;
    else if (score >= 50) feedbackMessage.textContent = i18n[currentLang].feedbackGood;
    else feedbackMessage.textContent = i18n[currentLang].feedbackTry;
}

// ---------------- Event Listeners ----------------

langEnBtn.addEventListener('click', () => setLanguage('en'));
langIdBtn.addEventListener('click', () => setLanguage('id'));

// Flow Updates
startBtn.addEventListener('click', () => showScreen('mode-screen'));
backToStartFromMode.addEventListener('click', () => showScreen('start-screen'));

modeSingleBtn.addEventListener('click', () => {
    isMultiplayer = false;
    showScreen('class-screen');
});
modeMultiBtn.addEventListener('click', () => {
    isMultiplayer = true;
    showScreen('multi-hub-screen');
});
backToModeFromHub.addEventListener('click', () => showScreen('mode-screen'));

multiHostBtn.addEventListener('click', () => {
    isHost = true;
    playerName = "Host";
    showScreen('class-screen');
});
multiJoinBtn.addEventListener('click', () => {
    isHost = false;
    showScreen('join-screen');
});
backToHubFromJoin.addEventListener('click', () => showScreen('multi-hub-screen'));
joinRoomBtn.addEventListener('click', joinFirebaseRoom);
startMultiBtn.addEventListener('click', () => db.ref(`rooms/${roomPin}`).update({ status: 'playing' }));
quitLobbyBtn.addEventListener('click', () => {
    if (isHost && roomRef) roomRef.remove();
    window.location.reload();
});
podiumHomeBtn.addEventListener('click', () => window.location.reload());

backToStartFromClassBtn.addEventListener('click', () => {
    if (isMultiplayer && isHost) showScreen('multi-hub-screen');
    else showScreen('mode-screen');
});

classBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentClass = e.currentTarget.getAttribute('data-class');
        showScreen('subject-screen');
    });
});
backToClassFromSubjectBtn.addEventListener('click', () => showScreen('class-screen'));

subjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const subject = e.currentTarget.getAttribute('data-subject');
        if (isMultiplayer && isHost) {
            createFirebaseRoom(subject);
        } else {
            initQuiz(subject);
        }
    });
});

options.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index'));
        selectAnswer(index);
    });
});

playAgainBtn.addEventListener('click', () => showScreen('subject-screen'));
homeBtn.addEventListener('click', () => showScreen('start-screen'));

document.getElementById('quit-quiz-btn').addEventListener('click', () => {
    clearInterval(timer);
    if (isMultiplayer) window.location.reload();
    else showScreen('subject-screen');
});

document.body.addEventListener('click', () => {
    if (!audioInitialized) {
        audioInitialized = true;
        mainBgm.volume = 0.3; 
        quizBgm.volume = 0.3;
        if (!document.getElementById('quiz-screen').classList.contains('active')) {
            mainBgm.play().catch(e => {});
        }
    }
}, true);

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        const clickSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
        clickSound.volume = 0.5;
        clickSound.play().catch(e => {});
    });
    btn.addEventListener('mouseenter', () => {
        if (audioInitialized) {
            const hoverSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
            hoverSound.volume = 0.6; 
            hoverSound.play().catch(e => {});
        }
    });
});
