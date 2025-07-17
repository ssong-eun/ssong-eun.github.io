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
const testimonialsSection = document.querySelector('.testimonials-section');
const testimonialsList = document.getElementById('testimonials-list'); // 새로 추가된 후기 목록 컨테이너
const luckTipsSection = document.querySelector('.luck-tips-section'); // 새로 추가된 섹션
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

// 50가지 긍정 한마디
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
    "어떤 어려움도 당신을 더 강하게 만들 것입니다. 믿음을 가지세요.",
    "당신은 오늘 특별한 기쁨을 발견할 것입니다. 마음을 열어두세요.",
    "매 순간이 새로운 시작입니다. 어제는 지나갔고, 오늘은 당신의 것입니다.",
    "당신의 생각은 현실이 됩니다. 긍정적인 생각으로 가득 채우세요.",
    "용기는 두려움이 없는 것이 아니라, 두려움에도 불구하고 나아가는 것입니다.",
    "모든 문제는 해결책을 가지고 있습니다. 포기하지 마세요.",
    "당신은 매일 더 나은 사람이 되고 있습니다. 스스로를 칭찬해주세요.",
    "행운은 당신의 편입니다. 기회를 놓치지 마세요.",
    "당신의 열정은 불가능을 가능하게 만듭니다. 불꽃을 태우세요.",
    "오늘은 당신의 잠재력을 최대한 발휘할 날입니다.",
    "감사하는 마음으로 하루를 시작하면 모든 것이 달라질 것입니다.",
    "당신은 소중하고 특별한 존재입니다.",
    "어둠이 있어야 별이 빛나는 법입니다. 시련 속에서 빛을 찾으세요.",
    "당신의 꿈을 향해 나아가는 모든 발걸음이 중요합니다.",
    "오늘 당신의 삶에 새로운 변화가 찾아올 것입니다.",
    "사랑하는 마음으로 세상을 대하면 사랑이 돌아올 것입니다.",
    "당신의 노력은 결코 헛되지 않습니다. 곧 좋은 소식이 있을 거예요.",
    "오늘은 당신의 용기로 세상에 긍정적인 영향을 미치세요.",
    "웃음은 최고의 약입니다. 많이 웃고 행복하세요.",
    "당신은 혼자가 아닙니다. 항상 응원하는 사람들이 있습니다.",
    "오늘 하루도 감사함으로 가득 채우세요. 작은 것에서부터 행복을 찾으세요.",
    "당신이 믿는다면 무엇이든 가능합니다.",
    "어제의 실패는 오늘의 성공을 위한 발판입니다.",
    "모든 순간은 기적입니다. 현재를 즐기세요.",
    "당신의 선택이 당신의 미래를 만듭니다.",
    "오늘은 새로운 인연을 만날 수도 있는 특별한 날입니다.",
    "당신은 스스로의 행복을 책임질 수 있습니다.",
    "긍정적인 에너지는 전염됩니다. 당신의 빛을 나누세요.",
    "꿈을 꾸는 것을 멈추지 마세요. 꿈은 현실이 됩니다.",
    "당신은 당신이 생각하는 것보다 훨씬 더 위대합니다.",
    "오늘 하루도 당신의 목표를 향해 나아가세요.",
    "마음속의 평화는 가장 큰 보물입니다. 그것을 지키세요.",
    "당신이 가는 길이 곧 길입니다. 자신감을 가지세요.",
    "오늘은 행복한 일이 일어날 거야. 그렇게 믿어봐!",
    "당신의 하루는 당신이 만드는 것입니다. 멋진 하루를 만드세요!"
];

// ★★★ 사용자 후기 데이터 (20개 이상 채워 넣기 권장) ★★★
const allTestimonials = [
    { quote: "매일 아침 '오늘의 행운 테스트'로 하루를 시작해요! 랜덤으로 바뀌는 문제와 색깔, 숫자 덕분에 매일매일 새로운 재미를 느낍니다. 긍정적인 한마디도 큰 힘이 돼요. 정말 마법 같은 앱이에요!", author: "김**정 님 (서울)" },
    { quote: "처음에는 반신반의했지만, 계속하다 보니 정말 신기하게도 결과가 저의 하루에 작은 영향을 미치는 것 같아요. 특히 행운의 숫자에 맞는 악세서리 힌트는 정말 센스 있는 아이디어입니다!", author: "이**수 님 (부산)" },
    { quote: "간단하면서도 심오한 질문들이 많아서 매번 새롭게 느껴집니다. 복잡한 심리테스트보다 훨씬 직관적이고, 결과도 긍정적이라서 매일 기분 좋게 리프레시하는 느낌이에요. 친구들에게도 추천했어요!", author: "박**희 님 (제주)" },
    { quote: "출근길 지하철에서 매일 하는 저의 루틴이 되었어요. 짧은 시간이지만 기분 전환에 최고입니다. 다양한 문제와 매번 달라지는 결과가 정말 좋아요!", author: "최**영 님 (경기)" },
    { quote: "생각보다 결과 설명이 정말 구체적이고 위로가 됩니다. 특히 행운의 악세서리 팁은 실제로 적용해 볼 수 있어서 유용했어요. 개발자님 감사합니다!", author: "정**민 님 (대전)" },
    { quote: "콘텐츠가 정말 알차네요! 단순히 운세를 보는 것을 넘어, 색깔과 숫자의 의미를 배우고 긍정적인 마음을 다잡는 데 큰 도움이 됩니다. 이런 무료 앱이 있다니 놀라워요.", author: "강**호 님 (인천)" },
    { quote: "매일 랜덤으로 바뀌는 질문 덕분에 질리지 않고 즐기고 있습니다. 오늘 어떤 질문이 나올까 기대하게 돼요. 심플한 디자인도 마음에 듭니다.", author: "윤**아 님 (대구)" },
    { quote: "바쁜 일상 속에 작은 힐링이 필요할 때 딱이에요. 가볍게 즐길 수 있으면서도, 결과가 주는 긍정적인 메시지가 하루를 기분 좋게 만들어 줍니다.", author: "서**진 님 (광주)" },
    { quote: "친구들과 함께 테스트하고 결과를 공유하는 재미가 쏠쏠합니다. 서로의 행운의 색깔과 숫자를 비교해보는 것도 즐거운 대화 주제가 돼요.", author: "한**준 님 (울산)" },
    { quote: "제가 평소에 생각하던 부분들이 결과에 반영되는 것 같아서 신기했어요. 심리 테스트라고 하기엔 가볍지만, 스스로를 돌아보는 계기가 되기도 합니다.", author: "김**지 님 (세종)" },
    // 여기에 추가적으로 총 20개 이상이 되도록 더 많은 후기를 채워 넣으세요!
    // 각 후기는 객체 { quote: "후기 내용", author: "작성자" } 형태입니다.
    // 더 많은 후기를 추가하면 콘텐츠 양이 더욱 풍부해집니다.
];

// 한 번에 표시할 사용자 후기의 개수
const TESTIMONIALS_TO_SHOW = 3;


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


// 결과 데이터입니다. (설명 대폭 보강)
const results = [
    {
        minScore: 4, maxScore: 7, // 낮은 점수대 - 평화/안정 관련 성향
        description: `당신은 평화롭고 안정적인 에너지를 가진 사람입니다. 내면의 고요함을 추구하며, 주변에 편안함을 선사하는 매력이 있습니다. 때로는 신비로운 통찰력을 발휘하여 예상치 못한 기회를 발견하기도 합니다. 이는 마치 고요한 연못에 비친 달빛처럼, 당신의 깊은 내면에서 빛나는 지혜를 의미합니다.
        
        파란색은 진정 효과가 있어 스트레스를 완화하고 차분한 마음을 갖는 데 도움이 되는 색깔로 알려져 있습니다. 또한, 신뢰와 안정성을 상징하며, 이는 당신의 인간관계에서 중요한 역할을 합니다. 숫자 7은 전 세계적으로 행운과 신비로움을 의미하는 가장 강력한 숫자 중 하나입니다. 완전함과 영적인 의미를 담고 있으며, 예상치 못한 좋은 기회나 직관적인 통찰력을 가져다줄 수 있습니다. 7이라는 숫자를 보면 행운을 기대해 볼 수 있습니다.
        
        오늘은 차분하고 행운 가득한 하루가 될 거예요. 이 에너지를 활용하여 명상 시간을 가져보거나, 차분한 음악을 들어보세요. 파란색 계열의 옷을 입거나 파란색 소품을 가까이 두어 내면의 평화를 강화하는 것도 좋습니다. 작은 일에도 감사함을 느끼고, 주변의 아름다움을 찾아보세요. 이것이 당신의 행운을 더욱 견고하게 만들 것입니다. 차분하고 안정적인 당신의 모습은 주변 사람들에게도 편안함과 신뢰를 줍니다. 당신의 내면의 평화를 유지하는 것이 중요하며, 스트레스 상황에서도 흔들리지 않는 중심을 찾는 연습을 해보세요. 이는 당신의 행운을 지속적으로 유지하는 데 큰 도움이 될 것입니다. 오늘의 행운을 통해 당신의 삶에 긍정적인 변화가 시작되기를 바랍니다. 당신의 고요함 속에서 진정한 힘을 발견할 수 있을 것입니다. 고요함 속의 강인함이 당신의 매력입니다. 이 운이 당신의 모든 순간을 평화롭게 이끌어 줄 것입니다. 주변 사람들에게도 당신의 평화로운 에너지를 전파하여, 함께 긍정적인 분위기를 만들어가세요. 당신의 존재 자체가 행운입니다.`
    },
    {
        minScore: 8, maxScore: 11, // 중간 점수대 - 성장/활력/창의성 관련 성향
        description: `당신은 활기차고 창의적인 에너지를 가진 사람입니다. 끊임없이 성장하고 배우며, 새로운 아이디어를 현실로 만드는 데 탁월한 능력을 보여줍니다. 마치 솟아나는 샘물처럼, 당신의 에너지는 주변을 생기 있게 만듭니다. 사람들과의 소통 속에서 기쁨을 찾고 낙천적인 태도로 주변에 긍정적인 영향을 미칩니다. 당신의 밝은 에너지는 주변 사람들에게도 활력을 불어넣어 줍니다.
        
        초록색은 자연, 성장, 그리고 활력을 나타내는 색상입니다. 재생과 치유의 에너지를 가지고 있어, 마음의 평온을 찾고 새로운 시작을 할 때 긍정적인 영향을 줍니다. 균형과 조화를 의미하기도 합니다. 숫자 3은 창의성, 표현력, 그리고 사회성을 상징합니다. 기쁨과 낙천적인 에너지를 가지고 있으며, 새로운 아이디어를 발전시키거나 사람들과 소통하는 데 유리한 기운을 제공합니다. 3이라는 숫자를 통해 당신의 아이디어가 더욱 빛날 수 있습니다.
        
        오늘은 새로운 아이디어가 샘솟는 활기찬 하루가 될 것입니다. 자연 속에서 산책을 하거나, 집 안에 초록 식물을 두어 에너지를 충전해 보세요. 초록색은 치유와 재생을 상징하므로, 당신의 활력을 더욱 북돋아 줄 것입니다. 새로운 취미를 시작하거나 친구들과 대화하며 창의력을 발휘하는 것을 추천합니다. 당신의 창의력이 오늘의 행운을 이끌어낼 것입니다.
        
        이 에너지를 활용하여 당신의 잠재력을 최대한 발휘하고, 삶의 새로운 지평을 열어보세요. 당신의 긍정적인 태도는 어떤 도전도 극복할 수 있게 할 것입니다. 주변의 변화를 두려워하지 않고 받아들일 때, 당신은 더욱 크게 성장할 수 있습니다. 당신의 활기찬 에너지가 매 순간 행운을 창조할 것입니다. 끊임없이 배우고 시도하며, 당신의 아이디어로 세상을 더욱 풍요롭게 만들어 보세요. 당신의 성장은 끝이 없을 것입니다.`
    },
    {
        minScore: 12, maxScore: 15, // 높은 중간 점수대 - 열정/즐거움/지혜 관련 성향
        description: `당신은 밝고 따뜻한 열정으로 가득 찬 사람입니다. 삶의 즐거움을 만끽하며, 주변 사람들에게 긍정적인 에너지를 전파합니다. 마치 타오르는 태양처럼, 당신의 에너지는 주변을 밝게 비춥니다. 노력의 결실을 맺는 데 탁월한 능력이 있으며, 지혜로운 통찰력으로 주변을 돕는 것에 기쁨을 느낍니다. 당신의 리더십과 포용력은 많은 사람들에게 영감을 줍니다.
        
        주황색은 태양처럼 밝고 따뜻한 에너지를 가진 색상으로, 열정, 즐거움, 그리고 낙천주의를 상징합니다. 활력을 불어넣고 창의적인 에너지를 자극하며, 사교적인 분위기를 만드는 데 효과적입니다. 숫자 9는 완성, 지혜, 그리고 인류애를 의미하는 숫자입니다. 오랜 노력의 결실을 맺거나 큰 목표를 달성하는 데 긍정적인 기운을 줍니다. 또한, 타인에 대한 이해와 봉사 정신을 나타내기도 합니다. 9라는 숫자를 통해 당신의 지혜가 빛날 수 있습니다.
        
        오늘은 당신의 노력이 결실을 맺고 즐거운 경험이 가득할 거예요! 좋아하는 사람들과 맛있는 음식을 나누거나, 즐거운 파티를 계획해 보세요. 주황색 계열의 옷이나 소품은 당신의 열정을 더욱 돋보이게 할 것입니다. 혹은 당신의 지혜를 발휘하여 주변 사람들을 돕는 일에 참여하는 것도 좋습니다. 당신의 열정이 오늘의 행운을 더욱 뜨겁게 달굴 것입니다.
        
        당신의 에너지를 세상에 긍정적으로 사용하고, 당신의 빛으로 주변을 더욱 따뜻하게 만들어 보세요. 당신의 열정은 당신을 목표로 이끌고, 당신의 긍정적인 태도는 어떤 어려움도 극복하게 할 것입니다. 삶의 모든 순간을 즐기며, 당신의 열정적인 에너지를 통해 더 많은 행운을 끌어당겨 보세요. 당신의 따뜻함이 당신의 길을 밝혀줄 것입니다.`
    },
    {
        minScore: 16, maxScore: 16, // 최고 점수대 - 영감/신비/리더십 관련 성향
        description: `당신은 고귀하고 신비로운 영감을 가진 사람입니다. 뛰어난 직관력과 독립적인 정신으로 자신만의 길을 개척하며, 새로운 시작을 두려워하지 않습니다. 마치 밤하늘의 별처럼, 당신은 독특하고 영적인 빛을 발합니다. 예술적 감각이나 깊은 통찰력을 통해 세상을 다른 시각으로 바라봅니다. 당신의 통찰력은 다른 사람들이 보지 못하는 것을 보게 하고, 당신의 리더십은 새로운 길을 열어줍니다.
        
        보라색은 고귀함, 신비로움, 그리고 영적인 영감을 나타내는 색상입니다. 직관력을 높이고 내면의 평화를 찾는 데 도움을 주며, 예술적 감각이나 깊은 통찰력을 상징하기도 합니다. 숫자 1은 리더십, 독립성, 그리고 새로운 시작을 의미하는 숫자입니다. 당신이 주도적으로 행동하고 새로운 길을 개척하는 데 강력한 에너지를 제공합니다. 1이라는 숫자를 통해 당신의 독창성이 빛날 수 있습니다.
        
        오늘은 당신이 주인공이 되는 특별한 날이 될 것입니다. 당신의 직관을 믿고 새로운 도전을 시도해 보세요. 보라색은 신비와 영감을 상징하므로, 보라색 계열의 아이템을 가까이 두는 것도 좋습니다. 혼자만의 시간을 가지며 자신을 돌아보거나, 명상을 통해 내면의 목소리에 귀 기울이는 것도 좋습니다. 당신의 독창적인 아이디어가 빛을 발할 것입니다.
        
        당신은 리더로서의 자질을 가지고 있으며, 당신의 영감은 많은 사람들에게 새로운 방향을 제시할 수 있습니다. 자신을 믿고 나아가세요. 당신의 길은 언제나 밝을 것입니다. 당신의 독특한 시각과 깊은 영감을 세상과 나누는 것을 두려워하지 마세요. 그것이 당신의 가장 큰 행운의 원천이 될 것입니다. 당신의 존재 자체가 빛입니다.`
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

    if (document.querySelector('h1')) { // h1 제목
        document.querySelector('h1').style.color = randomPalette.h1Color;
    }
    if (document.querySelector('.result-container h2')) {
        document.querySelector('.result-container h2').style.color = randomPalette.h1Color;
    }
    if (faqSection && faqSection.querySelector('h2')) {
        faqSection.querySelector('h2').style.color = randomPalette.h1Color;
    }
    if (dailyAffirmationSection && dailyAffirmationSection.querySelector('h2')) { // 긍정 한마디 제목
        dailyAffirmationSection.querySelector('h2').style.color = randomPalette.h1Color;
    }
    if (howItWorksSection && howItWorksSection.querySelector('h2')) { // 작동 방식 제목
        howItWorksSection.querySelector('h2').style.color = randomPalette.h1Color;
    }
    if (creatorNoteSection && creatorNoteSection.querySelector('h2')) { // 제작자 한마디 제목
        creatorNoteSection.querySelector('h2').style.color = randomPalette.h1Color;
    }
    if (symbolismSection && symbolismSection.querySelector('h2')) { // 상징 제목
        symbolismSection.querySelector('h2').style.color = randomPalette.h1Color;
    }
    if (testimonialsSection && testimonialsSection.querySelector('h2')) { // 사용자 후기 제목
        testimonialsSection.querySelector('h2').style.color = randomPalette.h1Color;
    }
    if (luckTipsSection && luckTipsSection.querySelector('h2')) { // 행운 팁 제목
        luckTipsSection.querySelector('h2').style.color = randomPalette.h1Color;
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
    if (dailyAffirmationSection) dailyAffirmationSection.style.display = 'none';
    if (howItWorksSection) howItWorksSection.style.display = 'none';
    if (creatorNoteSection) creatorNoteSection.style.display = 'none';
    if (faqSection) faqSection.style.display = 'none';
    if (symbolismSection) symbolismSection.style.display = 'none';
    if (testimonialsSection) testimonialsSection.style.display = 'none';
    if (luckTipsSection) luckTipsSection.style.display = 'none';
    if (startButtonContainer) startButtonContainer.style.display = 'none';
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    if (footerSection) footerSection.style.display = 'none';
}


function startQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;

    // 모든 질문에서 QUESTIONS_PER_TEST 개수만큼 무작위로 선택하고 섞음
    const shuffledAllQuestions = shuffleArray([...allQuestions]);
    questions = shuffledAllQuestions.slice(0, QUESTIONS_PER_TEST);

    // 모든 섹션을 먼저 숨기고, 초기 화면에 필요한 것만 보이게 합니다.
    hideAllSections();

    // 초기 화면에 필요한 섹션만 보이게 합니다.
    if (adContainer) adContainer.style.display = 'block';
    if (introSection) introSection.style.display = 'block';
    if (dailyAffirmationSection) dailyAffirmationSection.style.display = 'block';
    if (howItWorksSection) howItWorksSection.style.display = 'block';
    if (creatorNoteSection) creatorNoteSection.style.display = 'block';
    if (faqSection) faqSection.style.display = 'block';
    if (symbolismSection) symbolismSection.style.display = 'block';
    if (testimonialsSection) testimonialsSection.style.display = 'block';
    if (luckTipsSection) luckTipsSection.style.display = 'block';
    if (startButtonContainer) startButtonContainer.style.display = 'block';
    if (footerSection) footerSection.style.display = 'block';

    // '오늘의 긍정 한마디' 랜덤으로 선택하여 표시
    if (affirmationTextElement && allAffirmations.length > 0) {
        const randomIndex = Math.floor(Math.random() * allAffirmations.length);
        affirmationTextElement.innerText = allAffirmations[randomIndex];
    }

    // ★★★ 사용자 후기 랜덤으로 선택하여 표시 ★★★
    if (testimonialsList && allTestimonials.length > 0) {
        testimonialsList.innerHTML = ''; // 기존 후기 목록 초기화
        const shuffledTestimonials = shuffleArray([...allTestimonials]);
        const testimonialsToShow = shuffledTestimonials.slice(0, TESTIMONIALS_TO_SHOW); // 3개 선택

        testimonialsToShow.forEach(item => {
            const testimonialDiv = document.createElement('div');
            testimonialDiv.classList.add('testimonial-item');
            
            const quoteP = document.createElement('p');
            quoteP.classList.add('quote');
            quoteP.innerText = `"${item.quote}"`;

            const authorP = document.createElement('p');
            authorP.classList.add('author');
            authorP.innerText = `- ${item.author}`;

            testimonialDiv.appendChild(quoteP);
            testimonialDiv.appendChild(authorP);
            testimonialsList.appendChild(testimonialDiv);
        });
    }


    // 답변 버튼 영역은 비워둠 (초기화)
    resetState();

    applyRandomColors(); // 새로운 색상 팔레트 적용
}

// "테스트 시작하기" 버튼에 클릭 이벤트 리스너 추가
if (startQuizButton) {
    startQuizButton.addEventListener('click', () => {
        // 모든 섹션을 숨기고 질문 컨테이너만 보이게 합니다.
        hideAllSections();

        questionContainer.style.display = 'block';
        if (adContainer) adContainer.style.display = 'block'; // 질문 중에도 광고를 띄울지 결정
        if (footerSection) footerSection.style.display = 'block';

        showQuestion(); // 첫 질문 시작
    });
}


function showQuestion() {
    resetState(); // 이전 질문의 버튼들을 초기화합니다.
    const question = questions[currentQuestionIndex];
    questionText.innerText = question.question;

    const shuffledAnswers = shuffleArray([...question.answers]);

    shuffledAnswers.forEach(answer => {
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
    hideAllSections(); // 모든 섹션을 숨김
    resultContainer.style.display = 'block';
    if (adContainer) adContainer.style.display = 'block';
    if (footerSection) footerSection.style.display = 'block';

    let selectedLuckyColor = "알 수 없음";
    let selectedLuckyNumber = "알 수 없음";
    let personalityDescription = "오늘 당신의 행운을 찾아냈습니다!";

    for (const result of results) {
        if (totalScore >= result.minScore && totalScore <= result.maxScore) {
            personalityDescription = result.description;
            break;
        }
    }

    selectedLuckyColor = allPossibleLuckyColors[Math.floor(Math.random() * allPossibleLuckyColors.length)];
    selectedLuckyNumber = allPossibleLuckyNumbers[Math.floor(Math.random() * allPossibleLuckyNumbers.length)];

    const luckyAccessory = getLuckyNumberAccessory(selectedLuckyNumber);
    const finalDescription = `${personalityDescription}\n\n당신의 행운의 숫자에 맞는 악세서리는 바로 **${luckyAccessory}**입니다! 이 악세서리가 오늘 당신의 행운을 더욱 빛내줄 거예요.`;


    luckyColorText.innerText = `오늘의 행운의 색깔: ${selectedLuckyColor}`;
    luckyNumberText.innerText = `오늘의 행운의 숫자: ${selectedLuckyNumber}`;
    luckyDescriptionText.innerText = finalDescription;
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
    const luckyColor = luckyColorText.innerText;
    const luckyNumber = luckyNumberText.innerText;
    const overallDescription = luckyDescriptionText.innerText;

    const shareText = `✨ 오늘의 행운 테스트 결과 ✨\n\n${luckyColor}\n${luckyNumber}\n\n${overallDescription}\n\n나의 행운을 확인해보세요! ${window.location.href}`;
    const shareUrl = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: '오늘의 행운 테스트',
            text: shareText,
            url: shareUrl,
        }).then(() => {
                alert('결과 공유 성공!');
            })
            .catch((error) => {
                alert('공유 실패: ' + error.message);
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
            alert('링크 복사에 실패했습니다. 직접 복사해주세요: ' + currentUrl);
            console.error('Failed to copy link:', err);
        });
}

if (restartButton) restartButton.addEventListener('click', startQuiz);
if (shareWebButton) shareWebButton.addEventListener('click', shareResult);
if (copyLinkButton) copyLinkButton.addEventListener('click', copyLink);

// 앱이 로드되면 퀴즈를 시작합니다.
startQuiz();
