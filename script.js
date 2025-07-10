// HTML 요소들을 JavaScript에서 사용할 수 있도록 가져옵니다.
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const luckyColorText = document.getElementById('lucky-color-text');
const luckyNumberText = document.getElementById('lucky-number-text');
const luckyDescriptionText = document.getElementById('lucky-description-text'); // 결과 설명 텍스트 요소
const restartButton = document.getElementById('restart-button');

// 새로 추가된 공유 버튼 요소들
const shareWebButton = document.getElementById('share-web-button');
const copyLinkButton = document.getElementById('copy-link-button');

// 추가된 콘텐츠 섹션들 (JavaScript로 제어)
const introSection = document.querySelector('.intro-section');
const adContainer = document.querySelector('.ad-container'); // 애드센스 광고 컨테이너
const dailyAffirmationSection = document.querySelector('.daily-affirmation-section'); // '오늘의 긍정 한마디' 섹션
const affirmationTextElement = document.getElementById('affirmation-text'); // '오늘의 긍정 한마디' 텍스트 요소
const howItWorksSection = document.querySelector('.how-it-works-section');
const creatorNoteSection = document.querySelector('.creator-note-section');
const faqSection = document.querySelector('.faq-section');
const symbolismSection = document.querySelector('.symbolism-section');
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

// 모든 질문 데이터 배열 (문제 종류)
const allQuestions = [
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
    },
    { // 추가 질문 1
        question: "가장 끌리는 디저트는 무엇인가요?",
        answers: [
            { text: "달콤한 초콜릿 케이크", score: 4 },
            { text: "상큼한 과일 타르트", score: 3 },
            { text: "부드러운 티라미수", score: 2 },
            { text: "시원한 아이스크림", score: 1 }
        ]
    },
    { // 추가 질문 2
        question: "여행을 간다면 어떤 곳을 선호하나요?",
        answers: [
            { text: "역사적인 유적지", score: 3 },
            { text: "활기찬 대도시", score: 2 },
            { text: "조용한 자연 속 휴양지", score: 1 },
            { text: "모험 가득한 미지의 장소", score: 4 }
        ]
    },
    { // 추가 질문 3
        question: "스트레스를 받을 때 어떻게 해소하는 편인가요?",
        answers: [
            { text: "좋아하는 음악 감상하기", score: 1 },
            { text: "운동하거나 몸을 움직이기", score: 2 },
            { text: "친구들과 수다 떨기", score: 3 },
            { text: "혼자 조용히 생각 정리하기", score: 4 }
        ]
    },
    { // 추가 질문 4
        question: "새로운 물건을 살 때 가장 중요하게 생각하는 것은?",
        answers: [
            { text: "디자인과 미적인 부분", score: 3 },
            { text: "실용성과 기능성", score: 2 },
            { text: "가격 대비 성능", score: 1 },
            { text: "오래 사용할 수 있는 내구성", score: 4 }
        ]
    }
];

// 테스트에 실제로 사용될 질문 배열 (선택되고 셔플될 예정)
let questions = []; 

// 한 번의 테스트에 사용할 질문의 개수
const QUESTIONS_PER_TEST = 4;

// 모든 가능한 행운의 숫자 (1부터 9까지)
const allPossibleLuckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 모든 가능한 행운의 색깔 (빨강, 주황, 노랑, 초록, 파랑, 보라)
const allPossibleLuckyColors = ["빨강", "주황", "노랑", "초록", "파랑", "보라"];

// ★★★ 365가지 긍정 한마디 (예시) ★★★
// 여기에 365개까지 확장하여 채워 넣으세요!
const allAffirmations = [
    "행운은 준비된 자에게 찾아온다. 오늘 당신의 마음을 긍정으로 채우세요!",
    "당신이 오늘 만나는 모든 것은 행운의 조각입니다. 작은 것에서부터 감사함을 찾아보세요.",
    "매일매일 당신에게 새로운 기회가 찾아올 것입니다. 그 기회를 잡을 준비를 하세요!",
    "긍정적인 생각은 긍정적인 결과를 만듭니다. 오늘도 밝게 빛나세요!",
    "당신은 충분히 강하고 능력 있는 사람입니다. 무엇이든 해낼 수 있어요!",
    "오늘은 당신의 삶을 변화시킬 수 있는 최고의 날입니다. 시작하세요!",
    "행복은 선택입니다. 오늘 당신은 행복을 선택할 수 있습니다.",
    "모든 경험은 당신을 성장시킵니다. 감사함으로 하루를 채우세요.",
    "당신은 사랑받고 있으며, 그 자체로 완벽합니다.",
    "오늘 당신이 뿌리는 긍정의 씨앗은 풍성한 결실을 맺을 것입니다.",
    "도전은 성장의 기회입니다. 두려워 말고 나아가세요!",
    "당신의 미소는 세상을 밝히는 빛입니다. 오늘도 활짝 웃으세요!",
    "당신 안에는 무한한 잠재력이 있습니다. 그것을 믿으세요!",
    "실수는 배움의 과정입니다. 괜찮아요, 다시 시도해 보세요.",
    "오늘 하루도 당신의 꿈을 향해 한 걸음 더 나아가세요!",
    // 여기에 추가적으로 365가지 명언을 채워 넣으시면 됩니다.
    // 각 명언은 쉼표(,)로 구분됩니다.
];

// 행운의 숫자에 따른 악세서리 매핑 함수
function getLuckyNumberAccessory(number) {
    switch (number) {
        case 1: return "시계"; // 새로운 시작, 정확성
        case 2: return "스카프"; // 연결, 조화
        case 3: return "모자"; // 창의성, 표현
        case 4: return "가방"; // 안정성, 실용성
        case 5: return "안경"; // 지혜, 통찰력
        case 6: return "리본"; // 조화, 아름다움
        case 7: return "왕관"; // 행운, 신비로움
        case 8: return "메달"; // 성취, 균형
        case 9: return "책"; // 지식, 완성
        default: return "특별한 악세서리";
    }
}


// 결과 데이터입니다. (설명만 포함, 캐릭터 정보는 이제 사용되지 않음)
const results = [
    {
        minScore: 4, maxScore: 7, // 낮은 점수대 - 평화/안정 관련 성향
        description: `당신은 평화롭고 안정적인 에너지를 가진 사람입니다. 내면의 고요함을 추구하며, 주변에 편안함을 선사하는 매력이 있습니다. 때로는 신비로운 통찰력을 발휘하여 예상치 못한 기회를 발견하기도 합니다. 오늘은 차분하고 행운 가득한 하루가 될 거예요. 이 에너지를 활용하여 명상 시간을 가져보거나, 차분한 음악을 들어보세요. 당신의 고요함 속에서 진정한 행운이 피어날 것입니다.`
    },
    {
        minScore: 8, maxScore: 11, // 중간 점수대 - 성장/활력/창의성 관련 성향
        description: `당신은 활기차고 창의적인 에너지를 가진 사람입니다. 끊임없이 성장하고 배우며, 새로운 아이디어를 현실로 만드는 데 탁월한 능력을 보여줍니다. 사람들과의 소통 속에서 기쁨을 찾고 낙천적인 태도로 주변에 긍정적인 영향을 미칩니다. 오늘은 새로운 아이디어가 샘솟는 활기찬 하루가 될 것입니다. 자연 속에서 산책을 하거나, 새로운 취미를 시작해 보는 것을 추천합니다. 당신의 창의력이 오늘의 행운을 이끌어낼 것입니다.`
    },
    {
        minScore: 12, maxScore: 15, // 높은 중간 점수대 - 열정/즐거움/지혜 관련 성향
        description: `당신은 밝고 따뜻한 열정으로 가득 찬 사람입니다. 삶의 즐거움을 만끽하며, 주변 사람들에게 긍정적인 에너지를 전파합니다. 노력의 결실을 맺는 데 탁월한 능력이 있으며, 지혜로운 통찰력으로 주변을 돕는 것에 기쁨을 느낍니다. 오늘은 당신의 노력이 결실을 맺고 즐거운 경험이 가득할 거예요! 좋아하는 사람들과 맛있는 음식을 나누거나, 즐거운 파티를 계획해 보세요. 당신의 열정이 오늘의 행운을 더욱 뜨겁게 달굴 것입니다.`
    },
    {
        minScore: 16, maxScore: 16, // 최고 점수대 - 영감/신비/리더십 관련 성향
        description: `당신은 고귀하고 신비로운 영감을 가진 사람입니다. 뛰어난 직관력과 독립적인 정신으로 자신만의 길을 개척하며, 새로운 시작을 두려워하지 않습니다. 예술적 감각이나 깊은 통찰력을 통해 세상을 다른 시각으로 바라봅니다. 오늘은 당신이 주인공이 되는 특별한 날이 될 것입니다. 당신의 직관을 믿고 새로운 도전을 시도해 보세요. 당신의 독창적인 아이디어가 빛을 발할 것입니다.`
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;


// 배열을 무작위로 섞는 Fisher-Yates 셔플 알고리즘 함수
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // 요소 교환
    }
    return array;
}


function applyRandomColors() {
    const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];

    document.body.style.background = randomPalette.background;
    document.documentElement.style.setProperty('--main-btn-bg', randomPalette.mainBtn);
    document.documentElement.style.setProperty('--main-btn-hover-bg', randomPalette.mainBtnHover);
    document.documentElement.style.setProperty('--share-btn-bg', randomPalette.shareBtn);
    document.documentElement.style.setProperty('--share-btn-hover-bg', randomPalette.shareBtnHover);
    document.documentElement.style.setProperty('--h1-color', randomPalette.h1Color);

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
    if (adContainer) adContainer.style.display = 'none';
    if (dailyAffirmationSection) dailyAffirmationSection.style.display = 'none'; // '오늘의 긍정 한마디' 섹션
    if (howItWorksSection) howItWorksSection.style.display = 'none';
    if (creatorNoteSection) creatorNoteSection.style.display = 'none';
    if (faqSection) faqSection.style.display = 'none';
    if (symbolismSection) symbolismSection.style.display = 'none';
    if (startButtonContainer) startButtonContainer.style.display = 'none';
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    if (footerSection) footerSection.style.display = 'none';
}


function startQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;

    // 모든 질문에서 QUESTIONS_PER_TEST 개수만큼 무작위로 선택하고 섞음
    const shuffledAllQuestions = shuffleArray([...allQuestions]); // 원본 배열을 섞기 위해 복사
    questions = shuffledAllQuestions.slice(0, QUESTIONS_PER_TEST); // 앞에서부터 필요한 개수만큼 자르기

    // 모든 섹션을 먼저 숨기고, 초기 화면에 필요한 것만 보이게 합니다.
    hideAllSections();

    // 초기 화면에 필요한 섹션만 보이게 합니다.
    if (adContainer) adContainer.style.display = 'block';
    if (introSection) introSection.style.display = 'block';
    if (dailyAffirmationSection) dailyAffirmationSection.style.display = 'block'; // 긍정 한마디 섹션 보이게 함
    if (howItWorksSection) howItWorksSection.style.display = 'block';
    if (creatorNoteSection) creatorNoteSection.style.display = 'block';
    if (faqSection) faqSection.style.display = 'block';
    if (symbolismSection) symbolismSection.style.display = 'block';
    if (startButtonContainer) startButtonContainer.style.display = 'block';
    if (footerSection) footerSection.style.display = 'block';

    // ★★★ '오늘의 긍정 한마디' 랜덤으로 선택하여 표시 ★★★
    if (affirmationTextElement && allAffirmations.length > 0) {
        const randomIndex = Math.floor(Math.random() * allAffirmations.length);
        affirmationTextElement.innerText = allAffirmations[randomIndex];
    }


    // 답변 버튼 영역은 비워둠 (초기화)
    resetState(); // 이전 답변 버튼이 남아있을 경우를 대비

    applyRandomColors(); // 새로운 색상 팔레트 적용
}

// "테스트 시작하기" 버튼에 클릭 이벤트 리스너 추가
// 앱 로드 시점에 이 리스너는 한 번만 등록됩니다.
if (startQuizButton) {
    startQuizButton.addEventListener('click', () => {
        // 모든 섹션을 숨기고 질문 컨테이너만 보이게 합니다.
        hideAllSections();

        questionContainer.style.display = 'block'; // 질문 컨테이너 표시
        if (adContainer) adContainer.style.display = 'block'; // 광고 컨테이너도 보이게 함 (선택 사항: 질문 중에도 광고를 띄울지 결정)
        if (footerSection) footerSection.style.display = 'block'; // 푸터도 보이게 함

        showQuestion(); // 첫 질문 시작
    });
}


function showQuestion() {
    resetState(); // 이전 질문의 버튼들을 초기화합니다.
    const question = questions[currentQuestionIndex]; // 선택되고 셔플된 questions 배열 사용
    questionText.innerText = question.question;

    // 답변 순서도 무작위로 섞을 수 있도록 처리
    const shuffledAnswers = shuffleArray([...question.answers]); // 답변도 섞기 위해 복사

    shuffledAnswers.forEach(answer => { // 섞인 답변 순서로 버튼 생성
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.dataset.score = answer.score;
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
    // 테스트 중에도 푸터 보이기
    if (footerSection) footerSection.style.display = 'block';
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showResult() {
    hideAllSections(); // 모든 섹션을 숨김 (혹시 모를 잔여 요소 방지)
    resultContainer.style.display = 'block'; // 결과 컨테이너만 보이게 함
    if (adContainer) adContainer.style.display = 'block'; // 광고 컨테이너도 보이게 함
    if (footerSection) footerSection.style.display = 'block';

    let selectedLuckyColor = "알 수 없음"; // 이제 랜덤으로 선택될 색상
    let selectedLuckyNumber = "알 수 없음"; // 이제 랜덤으로 선택될 숫자
    let personalityDescription = "오늘 당신의 행운을 찾아냈습니다!"; // 성격/유형 설명

    for (const result of results) {
        if (totalScore >= result.minScore && totalScore <= result.maxScore) {
            personalityDescription = result.description;
            break;
        }
    }

    // 행운의 색깔과 숫자를 무작위로 선택
    selectedLuckyColor = allPossibleLuckyColors[Math.floor(Math.random() * allPossibleLuckyColors.length)];
    selectedLuckyNumber = allPossibleLuckyNumbers[Math.floor(Math.random() * allPossibleLuckyNumbers.length)];

    // 행운의 숫자에 따른 악세서리 텍스트 추가
    const luckyAccessory = getLuckyNumberAccessory(selectedLuckyNumber);
    const finalDescription = `${personalityDescription}\n\n당신의 행운의 숫자에 맞는 악세서리는 바로 **${luckyAccessory}**입니다! 이 악세서리가 오늘 당신의 행운을 더욱 빛내줄 거예요.`;


    luckyColorText.innerText = `오늘의 행운의 색깔: ${selectedLuckyColor}`;
    luckyNumberText.innerText = `오늘의 행운의 숫자: ${selectedLuckyNumber}`;
    luckyDescriptionText.innerText = finalDescription; // 최종 설명 표시
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


function shareResult() {
    const luckyColor = luckyColorText.innerText; // 예: "오늘의 행운의 색깔: 빨강"
    const luckyNumber = luckyNumberText.innerText; // 예: "오늘의 행운의 숫자: 5"
    const overallDescription = luckyDescriptionText.innerText; // 성격/유형 설명 + 악세서리 설명

    // 공유 텍스트는 이제 랜덤 색깔/숫자와 성격/유형 설명을 포함하도록 구성
    const shareText = `✨ 오늘의 행운 테스트 결과 ✨\n\n${luckyColor}\n${luckyNumber}\n\n${overallDescription}\n\n나의 행운을 확인해보세요! ${window.location.href}`;
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

if (restartButton) restartButton.addEventListener('click', startQuiz);
if (shareWebButton) shareWebButton.addEventListener('click', shareResult);
if (copyLinkButton) copyLinkButton.addEventListener('click', copyLink);

// 앱이 로드되면 퀴즈를 시작합니다.
startQuiz();
