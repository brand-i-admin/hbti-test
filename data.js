// HBTI 질문 데이터
const questions = [
    // [Q1~Q3] 1축: S (정적) vs D (동적)
    {
        id: 1,
        axis: 'SD',
        text: '주말 아침, 눈을 떴을 때 가장 먼저 드는 생각은?',
        optionA: {
            text: '"오늘은 집에서 밀린 넷플릭스 보고 푹 쉬어야지."',
            value: 'S'
        },
        optionB: {
            text: '"날씨 좋은데 어디라도 나가볼까? 친구한테 연락해볼까?"',
            value: 'D'
        }
    },
    {
        id: 2,
        axis: 'SD',
        text: '새로운 취미를 시작한다면 어떤 분위기가 좋을까?',
        optionA: {
            text: '차분한 조명 아래서 혼자, 혹은 소수와 조용히 집중하는 시간',
            value: 'S'
        },
        optionB: {
            text: '활기찬 음악이 흐르고 사람들과 땀 흘리며 에너지를 나누는 시간',
            value: 'D'
        }
    },
    {
        id: 3,
        axis: 'SD',
        text: '친구가 갑자기 "지금 당장 놀러가자!"고 연락이 왔다. 나의 반응은?',
        optionA: {
            text: '"오늘은 좀... 다음에 미리 약속 잡고 만나자!"',
            value: 'S'
        },
        optionB: {
            text: '"오 좋아! 어디로 갈까? 10분 뒤에 나갈게!"',
            value: 'D'
        }
    },
    // [Q4~Q6] 2축: C (창작) vs A (감상)
    {
        id: 4,
        axis: 'CA',
        text: '멋진 그림이나 전시회를 보러 갔을 때 나는?',
        optionA: {
            text: '"와, 이걸 어떻게 만들었을까? 나도 한번 그려보고 싶다."',
            value: 'C'
        },
        optionB: {
            text: '"이 작품이 주는 느낌이 너무 좋아. 작가의 의도가 뭘까?"',
            value: 'A'
        }
    },
    {
        id: 5,
        axis: 'CA',
        text: '취미 활동의 결과물로 더 뿌듯한 것은?',
        optionA: {
            text: '내 손으로 직접 만든 결과물 (요리, 가구, 코드, 글)',
            value: 'C'
        },
        optionB: {
            text: '활동을 통해 내가 느낀 감정과 쌓인 지식 (관람 티켓, 수료증, 경험)',
            value: 'A'
        }
    },
    {
        id: 6,
        axis: 'CA',
        text: '유튜브에서 눈이 가는 콘텐츠는?',
        optionA: {
            text: '"따라 만들어 보세요!" 같은 DIY, 레시피, 튜토리얼 영상',
            value: 'C'
        },
        optionB: {
            text: '"이건 꼭 가보세요!" 같은 리뷰, 추천, 브이로그 영상',
            value: 'A'
        }
    },
    // [Q7~Q9] 3축: G (성장) vs E (표현)
    {
        id: 7,
        axis: 'GE',
        text: '취미 관련 앱을 깔았다. 가장 먼저 하는 행동은?',
        optionA: {
            text: '레벨업 시스템, 학습 기록 같은 기능부터 확인한다',
            value: 'G'
        },
        optionB: {
            text: '프로필 꾸미기, 공유 기능부터 확인한다',
            value: 'E'
        }
    },
    {
        id: 8,
        axis: 'GE',
        text: '인스타그램에 취미 관련 게시물을 올린다면?',
        optionA: {
            text: '#오운완 #공부기록 처럼 내가 해낸 과정을 기록용으로 올린다.',
            value: 'G'
        },
        optionB: {
            text: '잘 나온 사진, 멋진 결과물을 예쁘게 보정해서 올린다.',
            value: 'E'
        }
    },
    {
        id: 9,
        axis: 'GE',
        text: '취미 활동 후 가장 뿌듯한 순간은?',
        optionA: {
            text: '"전에는 못했는데 이제 된다!" 실력이 늘었다고 느낄 때',
            value: 'G'
        },
        optionB: {
            text: '"이거 대박!" 친구들이 내 결과물을 보고 반응할 때',
            value: 'E'
        }
    }
];

// HBTI 결과 데이터
const resultData = {
    'SCE': {
        code: 'SCE',
        name: '연금술사',
        fullName: '정적·창작·표현',
        description: '수많은 실험과 실천을 통해 세상에 없던 새로운 것을 빚어내는 당신! 조용한 환경에서 창작에 몰두하며, 완성된 작품을 세상에 선보이는 것에서 큰 보람을 느낍니다.',
        examples: '블로그/유튜브 콘텐츠 제작, 소설/시나리오 집필, 작곡/프로듀싱, 독립 앱 개발',
        color: '#8B5CF6',
        emoji: '🧙‍♂️',
        traits: ['창의적', '표현력', '몰입형'],
        objectImage: 'characters_and_objects/sce_alchemistry.png',
        characterImage: 'characters_and_objects/SCE.png'
    },
    'SAG': {
        code: 'SAG',
        name: '과몰입러',
        fullName: '정적·감상·성장',
        description: '트렌드를 따라가기보다는 가치 있는 것들을 통해 지속적으로 성장해나가는 당신! 깊이 있는 탐구와 꾸준한 학습으로 내면을 채워갑니다.',
        examples: '독서/스터디, 요가/명상, 자격증 취득, 온라인 강의 수강',
        color: '#3B82F6',
        emoji: '📚',
        traits: ['탐구적', '성장지향', '차분함'],
        objectImage: 'characters_and_objects/sag_vision_pro.png',
        characterImage: 'characters_and_objects/SAG.png'
    },
    'SAE': {
        code: 'SAE',
        name: '덕질러',
        fullName: '정적·감상·표현',
        description: '자신이 좋아하는 것들을 깊이 있게 탐구하고 이를 자신만의 방식으로 표현하는 당신! 취향이 곧 정체성이 되어 개성을 드러냅니다.',
        examples: '음악/영화 감상, 도예/가죽공예/정원가꾸기, 아트 컬렉션, 패션 스타일링',
        color: '#EC4899',
        emoji: '💜',
        traits: ['취향존중', '감성적', '개성있는'],
        objectImage: 'characters_and_objects/sae_magic_stick.png',
        characterImage: 'characters_and_objects/SAE.png'
    },
    'SCG': {
        code: 'SCG',
        name: '성장러',
        fullName: '정적·창작·성장',
        description: '체계적이고 전문적인 분야에서 꾸준히 자신의 역량을 키워나가는 당신! 묵묵히 실력을 쌓아 진정한 전문가로 성장합니다.',
        examples: '프로그래밍/개발, 악기 연주, 글쓰기, 연구/논문 작성',
        color: '#10B981',
        emoji: '🎯',
        traits: ['전문적', '꾸준함', '장인정신'],
        objectImage: 'characters_and_objects/scg_water_pot.png',
        characterImage: 'characters_and_objects/SCG.png'
    },
    'DAG': {
        code: 'DAG',
        name: '에너자이저',
        fullName: '동적·감상·성장',
        description: '새로운 환경과 자극을 적극적으로 받아들이며 이를 통해 지속적으로 발전해나가는 당신! 다양한 경험이 곧 성장의 원동력입니다.',
        examples: '스포츠/액티비티, 여행/탐험, 체험 활동, 새로운 맛집 탐방',
        color: '#F59E0B',
        emoji: '⚡',
        traits: ['활동적', '도전적', '경험중시'],
        objectImage: 'characters_and_objects/dag_energy.png',
        characterImage: 'characters_and_objects/DAG.png'
    },
    'DAE': {
        code: 'DAE',
        name: '인싸',
        fullName: '동적·감상·표현',
        description: '트렌드와 문화를 빠르게 흡수하고 이를 자신만의 스타일로 표현하는 당신! 라이프스타일 자체가 하나의 콘텐츠가 됩니다.',
        examples: 'SNS 활동, 패션/뷰티, 라이프스타일 공유, 트렌드 세팅',
        color: '#EF4444',
        emoji: '✨',
        traits: ['트렌디', '사교적', '영향력있는'],
        objectImage: 'characters_and_objects/dae_inssa.png',
        characterImage: 'characters_and_objects/DAE.png'
    },
    'DCG': {
        code: 'DCG',
        name: '갓생러',
        fullName: '동적·창작·성장',
        description: '변화하는 환경에 빠르게 적응하며 혁신적인 아이디어를 현실로 구현하는 당신! 끊임없이 도전하고 성취하며 최고의 하루를 만들어갑니다.',
        examples: '헬스/무술, 댄스, 스타트업 창업, 사이드 프로젝트',
        color: '#06B6D4',
        emoji: '🔥',
        traits: ['도전적', '혁신적', '성취지향'],
        objectImage: 'characters_and_objects/dcg_clock.png',
        characterImage: 'characters_and_objects/DCG.png'
    },
    'DCE': {
        code: 'DCE',
        name: '행동가',
        fullName: '동적·창작·표현',
        description: '자신의 아이디어와 가치관을 다양한 채널을 통해 적극적으로 전파하는 당신! 행동으로 세상을 바꿔나갑니다.',
        examples: '안무창작/밴드활동, 연극/뮤지컬, 사회 활동, 크리에이터 활동',
        color: '#8B5CF6',
        emoji: '🎭',
        traits: ['적극적', '리더십', '영향력있는'],
        objectImage: 'characters_and_objects/dce_mega_phone.png',
        characterImage: 'characters_and_objects/DCE.png'
    }
};

// 축(Axis) 설명
const axisDescriptions = {
    'S': { name: '정적', fullName: 'Static', description: '조용하고 차분한 환경을 선호해요' },
    'D': { name: '동적', fullName: 'Dynamic', description: '활동적이고 에너지 넘치는 것을 좋아해요' },
    'C': { name: '창작', fullName: 'Creation', description: '직접 만들고 창조하는 것을 즐겨요' },
    'A': { name: '감상', fullName: 'Appreciation', description: '보고 듣고 경험하는 것을 즐겨요' },
    'G': { name: '성장', fullName: 'Growth', description: '실력 향상과 발전을 추구해요' },
    'E': { name: '표현', fullName: 'Expression', description: '자신을 표현하고 공유하는 것을 좋아해요' }
};
