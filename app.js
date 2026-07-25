const questionsDb = {
    "1": { // Class 1 Questions
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
    }
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
        subjGeneral: "Professions"
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
        subjGeneral: "Profesi"
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

// Helper to get questions, falling back to Class 1 if the selected class isn't fully populated yet
function getQuestions(cls, subj) {
    if (questionsDb[cls] && questionsDb[cls][subj] && questionsDb[cls][subj].length > 0) {
        return questionsDb[cls][subj];
    }
    // Fallback to Class 1 questions if the class doesn't have its own database yet
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

// I18N DOM Elements
const tSubtitle = document.getElementById('t-subtitle');
const tStartBtn = document.getElementById('t-startBtn');
const tChooseClass = document.getElementById('t-chooseClass');
const tClass1 = document.getElementById('t-class1');
const tClass2 = document.getElementById('t-class2');
const tClass3 = document.getElementById('t-class3');
const tClass4 = document.getElementById('t-class4');
const tClass5 = document.getElementById('t-class5');
const tClass6 = document.getElementById('t-class6');
const tChooseSubject = document.getElementById('t-chooseSubject');
const tSubjMath = document.getElementById('t-subjMath');
const tSubjIndo = document.getElementById('t-subjIndo');
const tSubjEnglish = document.getElementById('t-subjEnglish');
const tSubjGeneral = document.getElementById('t-subjGeneral');
const tBackClass = document.getElementById('t-backClass');
const tBackSubject = document.getElementById('t-backSubject');
const tScore = document.getElementById('t-score');
const tQuestion = document.getElementById('t-question');
const tQuizComplete = document.getElementById('t-quizComplete');
const tFinalScoreTitle = document.getElementById('t-finalScoreTitle');
const tPlayAgain = document.getElementById('t-playAgain');
const tMainMenu = document.getElementById('t-mainMenu');

// Functions
function setLanguage(lang) {
    currentLang = lang;
    
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
    tChooseClass.textContent = i18n[lang].chooseClass;
    tClass1.textContent = i18n[lang].class1;
    tClass2.textContent = i18n[lang].class2;
    tClass3.textContent = i18n[lang].class3;
    tClass4.textContent = i18n[lang].class4;
    tClass5.textContent = i18n[lang].class5;
    tClass6.textContent = i18n[lang].class6;
    tChooseSubject.textContent = i18n[lang].chooseSubject;
    tSubjMath.textContent = i18n[lang].subjMath;
    tSubjIndo.textContent = i18n[lang].subjIndo;
    tSubjEnglish.textContent = i18n[lang].subjEnglish;
    tSubjGeneral.textContent = i18n[lang].subjGeneral;
    tBackClass.textContent = i18n[lang].backClass;
    tBackSubject.textContent = i18n[lang].backSubject;
    tScore.textContent = i18n[lang].score;
    tQuestion.textContent = i18n[lang].question;
    tQuizComplete.textContent = i18n[lang].quizComplete;
    tFinalScoreTitle.textContent = i18n[lang].finalScoreTitle;
    tPlayAgain.textContent = i18n[lang].playAgain;
    tMainMenu.textContent = i18n[lang].mainMenu;
    
    // Refresh question texts if in active quiz
    if (document.getElementById('quiz-screen').classList.contains('active')) {
        const qList = getQuestions(currentClass, currentSubject);
        const currentQ = qList[currentQuestionIndex];
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
    
    if(wrongSound) {
        wrongSound.currentTime = 0;
        let playPromise = wrongSound.play();
        if (playPromise !== undefined) playPromise.catch(e => console.log(e));
    }
    
    setTimeout(nextQuestion, 2000);
}

function selectAnswer(selectedIndex) {
    clearInterval(timer);
    const qList = getQuestions(currentClass, currentSubject);
    const currentQ = qList[currentQuestionIndex];
    
    options.forEach(opt => opt.classList.add('disabled'));
    
    if (selectedIndex === currentQ.answer) {
        // Correct - strictly 10 points per answer (no time bonus)
        score += 10; 
        scoreDisplay.textContent = score;
        options[selectedIndex].classList.add('correct');
        
        if(correctSound) {
            correctSound.currentTime = 0;
            let playPromise = correctSound.play();
            if (playPromise !== undefined) playPromise.catch(e => console.log(e));
        }
    } else {
        // Wrong
        options[selectedIndex].classList.add('wrong');
        options[currentQ.answer].classList.add('correct');
        
        if(wrongSound) {
            wrongSound.currentTime = 0;
            let playPromise = wrongSound.play();
            if (playPromise !== undefined) playPromise.catch(e => console.log(e));
        }
    }
    
    setTimeout(nextQuestion, 2000);
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

    // Max score is strictly 100 (10 questions * 10 points)
    if (score >= 80) {
        feedbackMessage.textContent = i18n[currentLang].feedbackOutstanding;
    } else if (score >= 50) {
        feedbackMessage.textContent = i18n[currentLang].feedbackGood;
    } else {
        feedbackMessage.textContent = i18n[currentLang].feedbackTry;
    }
}

// Event Listeners
langEnBtn.addEventListener('click', () => setLanguage('en'));
langIdBtn.addEventListener('click', () => setLanguage('id'));

startBtn.addEventListener('click', () => showScreen('class-screen'));
backToStartFromClassBtn.addEventListener('click', () => showScreen('start-screen'));

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

document.getElementById('quit-quiz-btn').addEventListener('click', () => {
    clearInterval(timer);
    showScreen('subject-screen');
});
