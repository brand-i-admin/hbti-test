// 상태 관리
let currentQuestion = 0;
let shuffledQuestions = [];
let scores = {
    SD: { S: 0, D: 0 },
    CA: { C: 0, A: 0 },
    GE: { G: 0, E: 0 }
};

// Fisher-Yates 셔플 알고리즘
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 질문 셔플 (같은 축의 질문이 연속으로 나오지 않도록)
function shuffleQuestions() {
    // 각 축별로 질문 분류
    const sdQuestions = questions.filter(q => q.axis === 'SD');
    const caQuestions = questions.filter(q => q.axis === 'CA');
    const geQuestions = questions.filter(q => q.axis === 'GE');

    // 각 축 내에서 셔플
    const shuffledSD = shuffleArray(sdQuestions);
    const shuffledCA = shuffleArray(caQuestions);
    const shuffledGE = shuffleArray(geQuestions);

    // 교차 배치: SD, CA, GE, SD, CA, GE, SD, CA, GE
    const result = [];
    for (let i = 0; i < 3; i++) {
        result.push(shuffledSD[i]);
        result.push(shuffledCA[i]);
        result.push(shuffledGE[i]);
    }

    return result;
}

// 페이지 전환 함수
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// 테스트 시작
function startTest() {
    currentQuestion = 0;
    scores = {
        SD: { S: 0, D: 0 },
        CA: { C: 0, A: 0 },
        GE: { G: 0, E: 0 }
    };
    // 질문 셔플
    shuffledQuestions = shuffleQuestions();
    showPage('question-page');
    displayQuestion();
}

// 질문 표시
function displayQuestion() {
    const question = shuffledQuestions[currentQuestion];

    // 진행률 업데이트
    const progress = ((currentQuestion) / shuffledQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;

    // 질문 번호
    document.getElementById('question-number').textContent = `Q${currentQuestion + 1}`;

    // 질문 텍스트
    document.getElementById('question-text').textContent = question.text;

    // 옵션 버튼들 초기화 및 텍스트 설정
    const optionA = document.getElementById('option-a');
    const optionB = document.getElementById('option-b');

    // 선택 상태 초기화
    optionA.classList.remove('selected');
    optionB.classList.remove('selected');

    // 옵션 텍스트
    document.getElementById('option-a-text').textContent = question.optionA.text;
    document.getElementById('option-b-text').textContent = question.optionB.text;
}

// 답변 선택
function selectAnswer(option) {
    const question = shuffledQuestions[currentQuestion];
    const selectedOption = option === 'A' ? question.optionA : question.optionB;

    // 점수 추가
    const axis = question.axis;
    scores[axis][selectedOption.value]++;

    // 바로 다음 질문으로 넘어감 (선택 표시 없음)
    currentQuestion++;
    if (currentQuestion < shuffledQuestions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

// 결과 계산 및 표시
function showResult() {
    // 각 축의 결과 계산
    const sd = scores.SD.S >= scores.SD.D ? 'S' : 'D';
    const ca = scores.CA.C >= scores.CA.A ? 'C' : 'A';
    const ge = scores.GE.G >= scores.GE.E ? 'G' : 'E';

    const typeCode = sd + ca + ge;
    const result = resultData[typeCode];

    // URL 해시 업데이트 (공유용)
    window.location.hash = typeCode;

    // 결과 페이지에 색상 테마 적용
    document.documentElement.style.setProperty('--result-color', result.color);

    // 결과 카드 생성
    const resultCard = document.getElementById('result-card');
    resultCard.innerHTML = `
        <p class="card-result-label">당신은 바로</p>
        <div class="character-container">
            <div class="character-circle">
                <img src="${result.characterImage}" alt="${result.name}" class="character-image">
            </div>
        </div>
        <div class="card-type-name">${result.name}</div>
    `;

    // 설명 및 예시
    document.getElementById('result-description').textContent = result.description;
    document.getElementById('result-examples').textContent = result.examples;

    // 축 분석 표시
    const axisBreakdown = document.getElementById('axis-breakdown');
    axisBreakdown.innerHTML = `
        <div class="axis-item">
            <span class="axis-label">${axisDescriptions[sd].name}</span>
            <span class="axis-desc">${axisDescriptions[sd].description}</span>
        </div>
        <div class="axis-item">
            <span class="axis-label">${axisDescriptions[ca].name}</span>
            <span class="axis-desc">${axisDescriptions[ca].description}</span>
        </div>
        <div class="axis-item">
            <span class="axis-label">${axisDescriptions[ge].name}</span>
            <span class="axis-desc">${axisDescriptions[ge].description}</span>
        </div>
    `;

    showPage('result-page');
}

// 테스트 다시 시작
function restartTest() {
    window.location.hash = '';
    startTest();
}

// 결과 공유
function shareResult() {
    const typeCode = window.location.hash.slice(1);
    const result = resultData[typeCode];
    const shareText = `나의 취미 유형은 "${result.name}"!\n${result.description}\n\n당신의 취미 유형은 무엇인가요?`;
    // 테스트 URL은 해시 없이 (다른 사람이 테스트할 수 있도록)
    const testUrl = window.location.href.split('#')[0];

    if (navigator.share) {
        navigator.share({
            title: 'Brand:I 취미 성향 테스트 결과',
            text: shareText,
            url: testUrl
        }).catch(console.error);
    } else {
        const copyText = `${shareText}\n\n테스트 하러가기: ${testUrl}`;
        navigator.clipboard.writeText(copyText).then(() => {
            showToast('링크가 복사되었습니다! 친구에게 공유해보세요.');
        }).catch(() => {
            prompt('아래 링크를 복사하세요:', testUrl);
        });
    }
}

// 토스트 메시지 표시
function showToast(message) {
    // 기존 토스트 제거
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // 새 토스트 생성
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // 애니메이션 후 제거
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// URL 해시로 결과 페이지 직접 접근
function checkDirectAccess() {
    const hash = window.location.hash.slice(1);
    if (hash && resultData[hash]) {
        // 직접 접근한 경우 점수 시뮬레이션
        scores.SD[hash[0]] = 3;
        scores.CA[hash[1]] = 3;
        scores.GE[hash[2]] = 3;
        shuffledQuestions = questions; // 셔플 없이 원본 사용
        currentQuestion = questions.length;
        showResult();
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    checkDirectAccess();
});

// 해시 변경 감지
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (!hash) {
        showPage('welcome-page');
    } else if (resultData[hash]) {
        scores.SD[hash[0]] = 3;
        scores.CA[hash[1]] = 3;
        scores.GE[hash[2]] = 3;
        shuffledQuestions = questions;
        currentQuestion = questions.length;
        showResult();
    }
});
