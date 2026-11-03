export const profile = {
  name: "안상민",
  role: "Backend Developer · 신입",
  birth: "1998.03.14",
  email: "tjfl9831@gmail.com",
  tel: "010-9531-9968",
  github: "https://github.com/sang9831",
  githubLabel: "github.com/sang9831",
};

export const summary = [
  "특정 영역에 치우치지 않고 전 영역에 고르게 역량을 쌓아, 팀의 다양한 의사결정과 구현 과정에 두루 관여하고자 하는 개발자입니다.",
  "부족한 역량은 해당 영역에 강점이 있는 팀원의 작업 방식을 관찰하며 보완했습니다.",
  "프로젝트가 진행될수록 개선·고도화할 지점을 먼저 찾아 팀원들과 공유하고, 함께 해결 방향을 정해 반영하는 과정에서 주도적으로 문제를 해결하는 태도를 체득했습니다.",
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Java", "JavaScript"] },
  {
    label: "Framework / Library",
    items: ["Spring Boot", "Spring Security", "Spring Data JPA", "WebSocket/STOMP"],
  },
  { label: "Database", items: ["PostgreSQL"] },
  { label: "AI", items: ["LangChain", "pgvector", "GenAI", "Groq"] },
  { label: "DevOps", items: ["Git", "Docker", "GitHub Actions", "AWS EC2"] },
];

export type Project = {
  title: string;
  date: string;
  sub: string;
  github: string;
  bullets: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "GRAB — 부트캠프 최종 프로젝트 (4인)",
    date: "2026.09 – 2026.10",
    sub: "판매자(셀러) 도메인 · 배포/인프라 담당",
    github: "https://github.com/prgrms-aibe-devcourse/AIBE7_FinalProject_Team3",
    bullets: [
      "판매자 심사·대시보드·주문/배송·알림 등 셀러 도메인 백엔드 개발",
      "국세청 사업자등록 조회 API로 판매자 심사 자동화, 민감 서류 암호화 저장",
      "Nginx Blue/Green + EC2 자동 배포로 무중단 배포 구축",
      "k6 부하테스트 수행, Grafana/Prometheus 모니터링 구성",
    ],
    stack: ["Spring Boot", "PostgreSQL", "Docker", "GitHub Actions", "AWS EC2 · Nginx"],
  },
  {
    title: "마주한끼 (Maju-Hankki) — 부트캠프 2차 프로젝트 (2인)",
    date: "2026.08 – 2026.09",
    sub: "백엔드 개발",
    github: "https://github.com/prgrms-aibe-devcourse/AIBE7-Project2-Team04",
    bullets: [
      "Spring Security + JWT 인증, Google OAuth2 소셜 로그인 구현",
      "WebSocket/STOMP 실시간 채팅 구현",
      "카카오맵 기반 선호 지역 등록 및 지도 표시",
      "pgvector 단어 단위 임베딩 교차 비교로 매칭 호환도 점수 개선",
    ],
    stack: ["Spring Boot", "Spring Security", "JPA/Hibernate", "WebSocket/STOMP", "PostgreSQL", "pgvector", "Kakao Maps API"],
  },
  {
    title: "PicTrip — 부트캠프 1차 프로젝트 (3인)",
    date: "2026.06",
    sub: "이미지 분석 · AI 추천 파이프라인 담당",
    github: "https://github.com/prgrms-aibe-devcourse/AIBE7-Project1-Team04",
    bullets: [
      "사진 기반 여행지 추천 기능 구현",
      "Gemini(이미지 해석) → Groq(추천) 2단계 AI 파이프라인 구성",
      "카카오 로컬 API로 AI가 없는 장소를 추천하는 문제 해결",
      "AI 호출 실패 시 다른 모델로 자동 대체(fallback)",
    ],
    stack: ["Node.js · Express", "Gemini · Groq", "LangChain", "Kakao Maps API", "Supabase"],
  },
];

export const education = [
  { title: "프로그래머스 데브코스 — 생성형 AI활용 백엔드 개발 7기", sub: "2026.05 – 2026.11" },
  { title: "제주대학교 컴퓨터공학전공", sub: "2017.03 – 2023.02 · 학사" },
];

export const certificates = [
  { title: "SQL개발자(SQLD)", sub: "2026.09 합격" },
  { title: "정보처리기사", sub: "2023.11 합격" },
];
