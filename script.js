// HTML 요소들을 JavaScript에서 사용할 수 있도록 가져옵니다.
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const luckyColorText = document.getElementById('lucky-color-text');
const luckyNumberText = document.getElementById('lucky-number-text');
const restartButton = document.getElementById('restart-button');

// 새로 추가된 공유 버튼 요소들
const shareWebButton = document.getElementById('share-web-button');
const copyLinkButton = document.getElementById('copy-link-button');

// ★★★★★ 새로운 색상 팔레트 정의 ★★★★★
const colorPalettes = [
    {
        background: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)', // 복숭아색 계열
        mainBtn: '#f7a59a', // 주 답변 버튼
        mainBtnHover: '#e9573f',
        shareBtn: '#7ab3a7', // 공유 버튼
        shareBtnHover: '#5c8f85',
        restartBtn: '#6a6a6a', // 다시하기 버튼
        restartBtnHover: '#4a4a4a',
        h1Color: '#e9573f' // 제목 색상
    },
    {
        background: 'linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%)', // 파란색 계열
        mainBtn: '#6a93cb',
        mainBtnHover: '#567aa1',
        shareBtn: '#8ed1b1',
        shareBtnHover: '#72b694',
        restartBtn: '#5a6268',
        restartBtnHover: '#4a4f54',
        h1Color: '#567aa1'
    },
    {
        background: 'linear-gradient(to right, #f6d2f3 0%, #d4eeef 100%)', // 보라-민트 계열
        mainBtn: '#b06ab3',
        mainBtnHover: '#8b518c',
        shareBtn: '#86ba90',
        shareBtnHover: '#6e9877',
        restartBtn: '#7d7d7d',
        restartBtnHover: '#6a6a6a',
        h1Color: '#8b518c'
    },
    {
        background: 'linear-gradient(to right, #fdcbf1 0%, #e6dee9 100%)', // 분홍-회색 계열
        mainBtn: '#e2719a',
        mainBtnHover: '#cb527b',
        shareBtn: '#7d9e9e',
        shareBtnHover: '#6a8484',
        restartBtn: '#5c5c5c',
        restartBtnHover: '#4a4a4a',
        h1Color: '#cb527b'
    },
    {
        background: 'linear-gradient(to right, #f5f7fa 0%, #c3cfe2 100%)', // 회색-파랑 계열
        mainBtn: '#97a6bb',
        mainBtnHover: '#7e8f9f',
        shareBtn: '#7ab69e',
        shareBtnHover: '#60927e',
        restartBtn: '#4a4a4a',
        restartBtnHover: '#333333',
        h1Color: '#7e8f9f'
    }
];

// 질문 데이터 배열입니다. (기존과 동일)
const questions = [
    {
        question: "주말에 가장 하고 싶은 활동은 무엇인가요?",
        answers: [
            { text: "집에서 편안하게 휴식하기", score: 1 },
            { text: "친구들과 신나게 놀러 가기", score: 2 },
            { text: "새로운 것을 배우거나 취미 활동하기", score: 3 },
            { text: "혼자만의 시간을 가지며 생각 정리하기", score: 4 }
        ]
    },
    {
        question: "가장 좋아하는 계절은 언제인가요?",
        answers: [
            { text: "따뜻한 봄", score: 1 },
            { text: "활기찬 여름", score: 2 },
            { text: "풍요로운 가을", score: 3 },
            { text: "고요한 겨울", score: 4 }
        ]
    },
    {
        question: "친구의 고민을 들었을 때 당신의 반응은?",
        answers: [
            { text: "공감하며 위로해준다", score: 1 },
            { text: "해결책을 함께 찾아본다", score: 2 },
            { text: "이야기를 들어주며 옆에 있어준다", score: 3 },
            { text: "기분 전환을 위해 다른 이야기를 꺼낸다", score: 4 }
        ]
    },
    {
        question: "새로운 도전을 앞두고 있다면 어떤 기분인가요?",
        answers: [
            { text: "조금 걱정되지만 기대된다", score: 1 },
            { text: "설레고 빨리 시작하고 싶다", score: 2 },
            { text: "계획을 세우고 신중하게 접근한다", score: 3 },
            { text: "두렵지만 그래도 해내고 싶다", score: 4 }
        ]
    }
];

// 결과 데이터입니다. (기존과 동일)
const results = [
    { minScore: 4, maxScore: 7, color: "파란색", number: 7 },
    { minScore: 8, maxScore: 11, color: "초록색", number: 3 },
    { minScore: 12, maxScore: 15, color: "주황색", number: 9 },
    { minScore: 16, maxScore: 16, color: "보라색", number: 1 }
];

let currentQuestionIndex = 0;
let totalScore = 0;

// ★★★★★ 색상 적용 함수 추가 ★★★★★
function applyRandomColors() {
    const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];

    // body 배경색 적용
    document.body.style.background = randomPalette.background;

    // CSS 변수 설정
    document.documentElement.style.setProperty('--main-btn-bg', randomPalette.mainBtn);
    document.documentElement.style.setProperty('--main-btn-hover-bg', randomPalette.mainBtnHover);
    document.documentElement.style.setProperty('--share-btn-bg', randomPalette.shareBtn);
    document.documentElement.style.setProperty('--share-btn-hover-bg', randomPalette.shareBtnHover);

    // 다시하기 버튼 색상 적용 (JS에서 직접 제어)
    restartButton.style.backgroundColor = randomPalette.restartBtn;
    restartButton.onmouseover = () => restartButton.style.backgroundColor = randomPalette.restartBtnHover;
    restartButton.onmouseout = () => restartButton.style.backgroundColor = randomPalette.restartBtn;

    // 제목 색상 적용 (h1과 h2)
    document.querySelector('h1').style.color = randomPalette.h1Color;
    document.querySelector('.result-container h2').style.color = randomPalette.h1Color;
}

// 퀴즈를 시작하는 함수 (applyRandomColors 호출 추가)
function startQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    resultContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    applyRandomColors(); // ★★★ 앱 시작 시 랜덤 색상 적용 ★★★
    showQuestion();
}

// 질문을 화면에 표시하는 함수 (버튼 색상 적용 방식 변경)
function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];
    questionText.innerText = question.question;

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.dataset.score = answer.score;

        // 답변 버튼은 CSS 변수를 통해 색상을 가져오므로, JS에서 직접 설정할 필요 없음
        // CSS의 .btn과 .btn:hover 규칙이 var(--main-btn-bg)를 참조하도록 이미 수정됨
        // showQuestion 내부에서는 색상 적용 코드를 제거합니다.
        // button.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-btn-bg');
        // button.onmouseover = () => button.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-btn-hover-bg');
        // button.onmouseout = () => button.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-btn-bg');

        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

// 이전 질문의 버튼들을 제거하는 함수 (기존과 동일)
function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// 답변을 선택했을 때 호출되는 함수 (기존과 동일)
function selectAnswer(e) {
    const selectedButton = e.target;
    const score = parseInt(selectedButton.dataset.score);
    totalScore += score;

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 결과를 화면에 표시하는 함수 (기존과 동일)
function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    let luckyColor = "알 수 없음";
    let luckyNumber = "알 수 없음";

    for (const result of results) {
        if (totalScore >= result.minScore && totalScore <= result.maxScore) {
            luckyColor = result.color;
            luckyNumber = result.number;
            break;
        }
    }

    luckyColorText.innerText = `오늘의 행운의 색깔: ${luckyColor}`;
    luckyNumberText.innerText = `오늘의 행운의 숫자: ${luckyNumber}`;
}

// 웹 공유 API를 사용하는 함수 (기존과 동일)
function shareResult() {
    const luckyColor = luckyColorText.innerText;
    const luckyNumber = luckyNumberText.innerText;
    const shareText = `✨ 오늘의 행운 테스트 결과 ✨\n\n${luckyColor}\n${luckyNumber}\n\n나의 행운을 확인해보세요!`;
    const shareUrl = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: '오늘의 행운 테스트',
            text: shareText,
            url: shareUrl,
        }).then(() => {
            console.log('결과 공유 성공!');
        }).catch((error) => {
            console.error('결과 공유 실패:', error);
            alert('공유 실패: ' + error.message);
        });
    } else {
        alert('이 브라우저는 공유 기능을 지원하지 않습니다. 링크 복사 버튼을 이용해주세요!');
        console.warn('Web Share API is not supported in this browser.');
    }
}

// 링크를 클립보드에 복사하는 함수 (기존과 동일)
function copyLink() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
        .then(() => {
            alert('링크가 클립보드에 복사되었습니다!');
        })
        .catch(err => {
            console.error('링크 복사 실패:', err);
            alert('링크 복사에 실패했습니다. 직접 복사해주세요: ' + currentUrl);
        });
}

// "다시 하기" 버튼에 이벤트 리스너를 추가합니다.
restartButton.addEventListener('click', startQuiz);

// "결과 공유하기" 버튼에 이벤트 리스너 추가
shareWebButton.addEventListener('click', shareResult);

// "링크 복사하기" 버튼에 이벤트 리스너 추가
copyLinkButton.addEventListener('click', copyLink);

// 앱이 로드되면 퀴즈를 시작합니다.
startQuiz();

// --- CODE ENDS HERE ---