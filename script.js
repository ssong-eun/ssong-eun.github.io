// HTML 요소들을 JavaScript에서 사용할 수 있도록 가져옵니다.
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const luckyColorText = document.getElementById('lucky-color-text');
const luckyNumberText = document.getElementById('lucky-number-text');
const luckyDescriptionText = document.getElementById('lucky-description-text');
const restartButton = document.getElementById('restart-button');

// 새로 추가된 공유 버튼 요소들
const shareWebButton = document.getElementById('share-web-button');
const copyLinkButton = document.getElementById('copy-link-button');

// 추가된 콘텐츠 섹션들 (JavaScript로 제어)
const introSection = document.querySelector('.intro-section');
const faqSection = document.querySelector('.faq-section');
const footerSection = document.querySelector('.footer-section');
const startButtonContainer = document.getElementById('start-button-container');
const startQuizButton = document.getElementById('start-quiz-button');


// 새로운 색상 팔레트 정의 (랜덤 색상 기능용)
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

const results = [
    { minScore: 4, maxScore: 7, color: "파란색", number: 7, description: "파란색은 평화와 안정을 상징하며, 숫자 7은 행운의 상징입니다. 오늘은 차분하고 행운 가득한 하루가 될 거예요! 이 파란색 에너지를 활용하여 오늘은 명상 시간을 가져보거나, 차분한 음악을 들어보세요." },
    { minScore: 8, maxScore: 11, color: "초록색", number: 3, description: "초록색은 성장과 활력을 나타내고, 숫자 3은 창의성을 의미합니다. 새로운 아이디어가 샘솟는 하루가 될 것입니다. 자연 속에서 산책을 하거나, 새로운 취미를 시작해 보는 것을 추천합니다." },
    { minScore: 12, maxScore: 15, color: "주황색", number: 9, description: "주황색은 열정과 즐거움을 상징하고, 숫자 9는 완성의 숫자입니다. 오늘 당신의 노력이 결실을 맺을 거예요! 좋아하는 사람들과 맛있는 음식을 나누거나, 즐거운 파티를 계획해 보세요." },
    { minScore: 16, maxScore: 16, color: "보라색", number: 1, description: "보라색은 영감과 신비로움을 나타내며, 숫자 1은 새로운 시작을 의미합니다. 오늘은 당신이 주인공이 되는 특별한 날이 될 것입니다. 당신의 직관을 믿고 새로운 도전을 시도해 보세요. 혼자만의 시간을 가지며 자신을 돌아보는 것도 좋습니다." }
];

let currentQuestionIndex = 0;
let totalScore = 0;

function applyRandomColors() {
    const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];

    document.body.style.background = randomPalette.background;
    document.documentElement.style.setProperty('--main-btn-bg', randomPalette.mainBtn);
    document.documentElement.style.setProperty('--main-btn-hover-bg', randomPalette.mainBtnHover);
    document.documentElement.style.setProperty('--share-btn-bg', randomPalette.shareBtn);
    document.documentElement.style.setProperty('--share-btn-hover-bg', randomPalette.shareBtnHover);
    document.documentElement.style.setProperty('--h1-color', randomPalette.h1Color);

    // 요소들이 모두 존재할 때만 색상 적용 시도
    if (restartButton) {
        restartButton.style.backgroundColor = randomPalette.restartBtn;
        restartButton.onmouseover = () => restartButton.style.backgroundColor = randomPalette.restartBtnHover;
        restartButton.onmouseout = () => restartButton.style.backgroundColor = randomPalette.restartBtn;
    }

    if (document.querySelector('h1')) {
        document.querySelector('h1').style.color = randomPalette.h1Color;
    }
    if (document.querySelector('.result-container h2')) {
        document.querySelector('.result-container h2').style.color = randomPalette.h1Color;
    }
    if (faqSection && faqSection.querySelector('h2')) {
        faqSection.querySelector('h2').style.color = randomPalette.h1Color;
    }

    if (startQuizButton) {
        startQuizButton.style.backgroundColor = randomPalette.mainBtn;
        startQuizButton.onmouseover = () => startQuizButton.style.backgroundColor = randomPalette.mainBtnHover;
        startQuizButton.onmouseout = () => startQuizButton.style.backgroundColor = randomPalette.mainBtn;
    }
}

// 모든 섹션의 display 속성을 초기화하는 헬퍼 함수
function hideAllSections() {
    if (introSection) introSection.style.display = 'none';
    if (faqSection) faqSection.style.display = 'none';
    if (startButtonContainer) startButtonContainer.style.display = 'none';
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    if (footerSection) footerSection.style.display = 'none';
}


function startQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;

    // 모든 섹션을 먼저 숨기고, 초기 화면에 필요한 것만 보이게 합니다.
    hideAllSections();

    // 초기 화면에 필요한 섹션만 보이게 합니다.
    if (introSection) introSection.style.display = 'block';
    if (faqSection) faqSection.style.display = 'block';
    if (startButtonContainer) startButtonContainer.style.display = 'block';
    if (footerSection) footerSection.style.display = 'block'; // 푸터는 항상 보이게

    // 답변 버튼 영역은 비워둠 (초기화)
    resetState();

    applyRandomColors(); // 새로운 색상 팔레트 적용
}

// "테스트 시작하기" 버튼에 클릭 이벤트 리스너 추가
// 앱 로드 시점에 이 리스너는 한 번만 등록됩니다.
if (startQuizButton) {
    startQuizButton.addEventListener('click', () => {
        // 모든 섹션을 숨기고 질문 컨테이너만 보이게 합니다.
        hideAllSections(); // ★★★ 숨기기 로직 다시 호출 ★★★

        questionContainer.style.display = 'block'; // 질문 컨테이너 표시
        showQuestion(); // 첫 질문 시작
    });
}


function showQuestion() {
    resetState(); // 이전 질문의 버튼들을 초기화합니다.
    const question = questions[currentQuestionIndex];
    questionText.innerText = question.question;

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.dataset.score = answer.score;
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

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

function showResult() {
    hideAllSections(); // 모든 섹션을 숨김 (혹시 모를 잔여 요소 방지)
    resultContainer.style.display = 'block'; // 결과 컨테이너만 보이게 함
    if (footerSection) footerSection.style.display = 'block'; // 푸터는 결과 화면에서도 보이게 함

    let luckyColor = "알 수 없음";
    let luckyNumber = "알 수 없음";
    let luckyDescription = "오늘 당신의 행운을 찾아냈습니다!";

    for (const result of results) {
        if (totalScore >= result.minScore && totalScore <= result.maxScore) {
            luckyColor = result.color;
            luckyNumber = result.number;
            luckyDescription = result.description;
            break;
        }
    }

    luckyColorText.innerText = `오늘의 행운의 색깔: ${luckyColor}`;
    luckyNumberText.innerText = `오늘의 행운의 숫자: ${luckyNumber}`;
    luckyDescriptionText.innerText = luckyDescription;
}

function shareResult() {
    const luckyColor = luckyColorText.innerText;
    const luckyNumber = luckyNumberText.innerText;
    const shareText = `✨ 오늘의 행운 테스트 결과 ✨\n\n${luckyColor}\n${luckyNumber}\n\n${luckyDescriptionText.innerText}\n\n나의 행운을 확인해보세요! ${window.location.href}`;
    const shareUrl = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: '오늘의 행운 테스트',
            text: shareText,
            url: shareUrl,
        }).then(() => {
                console.log('결과 공유 성공!');
            })
            .catch((error) => {
                console.error('결과 공유 실패:', error);
            });
    } else {
        alert('이 브라우저는 공유 기능을 지원하지 않습니다. 링크 복사 버튼을 이용해주세요!');
        console.warn('Web Share API is not supported in this browser.');
    }
}

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

// 이벤트 리스너들은 해당 요소가 HTML에 존재할 때만 추가됩니다.
// 이전에 함수 내에서 동적으로 생성하던 방식에서 HTML에 미리 존재하는 요소를 사용하도록 변경되었으므로,
// 요소가 확실히 존재할 때만 addEventListener를 호출합니다.
if (restartButton) restartButton.addEventListener('click', startQuiz);
if (shareWebButton) shareWebButton.addEventListener('click', shareResult);
if (copyLinkButton) copyLinkButton.addEventListener('click', copyLink);

// 앱이 로드되면 퀴즈를 시작합니다.
startQuiz();
