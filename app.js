const questionsDb = {
    math: [
        { q: {en: "What is 5 + 3?", id: "Berapa 5 + 3?"}, options: {en: ["6", "7", "8", "9"], id: ["6", "7", "8", "9"]}, answer: 2 },
        { q: {en: "What is 10 - 4?", id: "Berapa 10 - 4?"}, options: {en: ["5", "6", "7", "8"], id: ["5", "6", "7", "8"]}, answer: 1 },
        { q: {en: "What is 2 x 3?", id: "Berapa 2 x 3?"}, options: {en: ["5", "6", "8", "9"], id: ["5", "6", "8", "9"]}, answer: 1 },
        { q: {en: "What is 12 / 4?", id: "Berapa 12 / 4?"}, options: {en: ["2", "3", "4", "5"], id: ["2", "3", "4", "5"]}, answer: 1 },
        { q: {en: "What is 7 + 8?", id: "Berapa 7 + 8?"}, options: {en: ["14", "15", "16", "17"], id: ["14", "15", "16", "17"]}, answer: 1 }
    ],
    indo: [
        { q: {en: "What is the antonym of 'Besar' (Big)?", id: "Apa antonim dari kata 'Besar'?"}, options: {en: ["Tinggi", "Kecil", "Luas", "Panjang"], id: ["Tinggi", "Kecil", "Luas", "Panjang"]}, answer: 1 },
        { q: {en: "The capital city of Indonesia is?", id: "Ibukota negara Indonesia adalah?"}, options: {en: ["Bandung", "Surabaya", "Jakarta", "Medan"], id: ["Bandung", "Surabaya", "Jakarta", "Medan"]}, answer: 2 },
        { q: {en: "Which animal crows in the morning?", id: "Hewan yang berkokok di pagi hari adalah?"}, options: {en: ["Kucing", "Anjing", "Ayam", "Burung"], id: ["Kucing", "Anjing", "Ayam", "Burung"]}, answer: 2 },
        { q: {en: "What shines in the sky at night?", id: "Benda langit yang bersinar di malam hari?"}, options: {en: ["Matahari", "Bulan", "Awan", "Pelangi"], id: ["Matahari", "Bulan", "Awan", "Pelangi"]}, answer: 1 },
        { q: {en: "What is the taste of salt?", id: "Rasa dari garam adalah?"}, options: {en: ["Manis", "Asin", "Pahit", "Asam"], id: ["Manis", "Asin", "Pahit", "Asam"]}, answer: 1 }
    ],
    english: [
        { q: {en: "What is the color of an Apple?", id: "Apa warna dari buah Apel?"}, options: {en: ["Blue", "Yellow", "Red", "Black"], id: ["Biru", "Kuning", "Merah", "Hitam"]}, answer: 2 },
        { q: {en: "Which animal says 'Meow'?", id: "Hewan apa yang bersuara 'Meong'?"}, options: {en: ["Dog", "Cat", "Cow", "Sheep"], id: ["Anjing", "Kucing", "Sapi", "Domba"]}, answer: 1 },
        { q: {en: "One, Two, Three, ...?", id: "Satu, Dua, Tiga, ...?"}, options: {en: ["Five", "Six", "Four", "Ten"], id: ["Lima", "Enam", "Empat", "Sepuluh"]}, answer: 2 },
        { q: {en: "What do we use to see?", id: "Bagian tubuh mana untuk melihat?"}, options: {en: ["Ears", "Nose", "Eyes", "Mouth"], id: ["Telinga", "Hidung", "Mata", "Mulut"]}, answer: 2 },
        { q: {en: "Opposite of 'Hot' is?", id: "Lawan kata dari 'Panas' adalah?"}, options: {en: ["Warm", "Cold", "Boiling", "Sunny"], id: ["Hangat", "Dingin", "Mendidih", "Cerah"]}, answer: 1 }
    ],
    general: [
        { q: {en: "Who treats sick animals?", id: "Siapa yang mengobati hewan sakit?"}, options: {en: ["Doctor", "Teacher", "Vet", "Pilot"], id: ["Dokter", "Guru", "Dokter Hewan", "Pilot"]}, answer: 2 },
        { q: {en: "Who cooks food in a restaurant?", id: "Siapa yang memasak di restoran?"}, options: {en: ["Waiter", "Chef", "Farmer", "Police"], id: ["Pelayan", "Koki", "Petani", "Polisi"]}, answer: 1 },
        { q: {en: "What do you call someone who flies an airplane?", id: "Siapa yang menerbangkan pesawat terbang?"}, options: {en: ["Driver", "Sailor", "Pilot", "Engineer"], id: ["Sopir", "Pelaut", "Pilot", "Insinyur"]}, answer: 2 },
        { q: {en: "Who puts out fires?", id: "Siapa yang memadamkan api?"}, options: {en: ["Firefighter", "Police Officer", "Doctor", "Teacher"], id: ["Pemadam Kebakaran", "Polisi", "Dokter", "Guru"]}, answer: 0 },
        { q: {en: "Who helps you learn in school?", id: "Siapa yang mengajarimu di sekolah?"}, options: {en: ["Nurse", "Teacher", "Singer", "Dancer"], id: ["Perawat", "Guru", "Penyanyi", "Penari"]}, answer: 1 }
    ]
};

const i18n = {
    en: {
        subtitle: "Are you ready to test your knowledge?",
        startBtn: "Play Now!",
        chooseSubject: "Choose Your Subject",
        back: "Back",
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
        subjGeneral: "Professions"
    },
    id: {
        subtitle: "Apakah kamu siap menguji pengetahuanmu?",
        startBtn: "Mulai Bermain!",
        chooseSubject: "Pilih Pelajaran",
        back: "Kembali",
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
        subjGeneral: "Profesi"
    }
};

// State Variables
let currentLang = 'en';
let currentSubject = '';
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 20;
const TIME_LIMIT = 20;

// DOM Elements
const screens = document.querySelectorAll('.screen');
const startBtn = document.getElementById('start-btn');
const subjectBtns = document.querySelectorAll('.subject-btn');
const backToStartBtn = document.getElementById('back-to-start');
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

// I18N DOM Elements
const tSubtitle = document.getElementById('t-subtitle');
const tStartBtn = document.getElementById('t-startBtn');
const tChooseSubject = document.getElementById('t-chooseSubject');
const tSubjMath = document.getElementById('t-subjMath');
const tSubjIndo = document.getElementById('t-subjIndo');
const tSubjEnglish = document.getElementById('t-subjEnglish');
const tSubjGeneral = document.getElementById('t-subjGeneral');
const tBack = document.getElementById('t-back');
const tScore = document.getElementById('t-score');
const tQuestion = document.getElementById('t-question');
const tQuizComplete = document.getElementById('t-quizComplete');
const tFinalScoreTitle = document.getElementById('t-finalScoreTitle');
const tPlayAgain = document.getElementById('t-playAgain');
const tMainMenu = document.getElementById('t-mainMenu');

// Functions
function setLanguage(lang) {
    currentLang = lang;
    
    // Update active button state
    if(lang === 'en') {
        langEnBtn.classList.add('active');
        langIdBtn.classList.remove('active');
    } else {
        langIdBtn.classList.add('active');
        langEnBtn.classList.remove('active');
    }

    // Update static texts
    tSubtitle.textContent = i18n[lang].subtitle;
    tStartBtn.textContent = i18n[lang].startBtn;
    tChooseSubject.textContent = i18n[lang].chooseSubject;
    tSubjMath.textContent = i18n[lang].subjMath;
    tSubjIndo.textContent = i18n[lang].subjIndo;
    tSubjEnglish.textContent = i18n[lang].subjEnglish;
    tSubjGeneral.textContent = i18n[lang].subjGeneral;
    tBack.textContent = i18n[lang].back;
    tScore.textContent = i18n[lang].score;
    tQuestion.textContent = i18n[lang].question;
    tQuizComplete.textContent = i18n[lang].quizComplete;
    tFinalScoreTitle.textContent = i18n[lang].finalScoreTitle;
    tPlayAgain.textContent = i18n[lang].playAgain;
    tMainMenu.textContent = i18n[lang].mainMenu;
    
    // Refresh question texts if in active quiz
    if (document.getElementById('quiz-screen').classList.contains('active')) {
        const currentQ = questionsDb[currentSubject][currentQuestionIndex];
        questionText.textContent = currentQ.q[currentLang];
        currentQ.options[currentLang].forEach((opt, index) => {
            optTexts[index].textContent = opt;
        });
    }
}

function showScreen(screenId) {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function initQuiz(subject) {
    currentSubject = subject;
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;
    totalQNum.textContent = questionsDb[subject].length;
    showScreen('quiz-screen');
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const currentQ = questionsDb[currentSubject][currentQuestionIndex];
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
        opt.style.backgroundColor = ''; // Reset inline styles from animation
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
    const currentQ = questionsDb[currentSubject][currentQuestionIndex];
    options.forEach(opt => opt.classList.add('disabled'));
    
    // Highlight correct answer
    options[currentQ.answer].classList.add('correct');
    
    // Play wrong sound on timeout as it's a failure
    if(wrongSound) {
        wrongSound.currentTime = 0;
        let playPromise = wrongSound.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => console.log("Audio play prevented:", error));
        }
    }
    
    setTimeout(nextQuestion, 2000);
}

function selectAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQ = questionsDb[currentSubject][currentQuestionIndex];
    
    options.forEach(opt => opt.classList.add('disabled'));
    
    if (selectedIndex === currentQ.answer) {
        // Correct
        score += 100 + (timeLeft * 10); // Bonus for time
        scoreDisplay.textContent = score;
        options[selectedIndex].classList.add('correct');
        
        if(correctSound) {
            correctSound.currentTime = 0;
            let playPromise = correctSound.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => console.log("Audio play prevented:", error));
            }
        }
    } else {
        // Wrong
        options[selectedIndex].classList.add('wrong');
        options[currentQ.answer].classList.add('correct');
        
        if(wrongSound) {
            wrongSound.currentTime = 0;
            let playPromise = wrongSound.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => console.log("Audio play prevented:", error));
            }
        }
    }
    
    setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsDb[currentSubject].length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    showScreen('result-screen');
    
    // Animate score counter
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

    const maxScore = questionsDb[currentSubject].length * (100 + (TIME_LIMIT * 10));

    if (score > (maxScore * 0.7)) {
        feedbackMessage.textContent = i18n[currentLang].feedbackOutstanding;
    } else if (score > (maxScore * 0.4)) {
        feedbackMessage.textContent = i18n[currentLang].feedbackGood;
    } else {
        feedbackMessage.textContent = i18n[currentLang].feedbackTry;
    }
}

// Event Listeners
langEnBtn.addEventListener('click', () => setLanguage('en'));
langIdBtn.addEventListener('click', () => setLanguage('id'));

startBtn.addEventListener('click', () => showScreen('subject-screen'));
backToStartBtn.addEventListener('click', () => showScreen('start-screen'));

subjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const subject = e.currentTarget.getAttribute('data-subject');
        initQuiz(subject);
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
