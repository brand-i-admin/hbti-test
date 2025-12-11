# HBTI 취미유형 테스트

Brand:I 앱 홍보를 위한 HBTI 심리검사 웹사이트입니다.

## 배포 방법

### GitHub Pages 배포

1. **새 GitHub 저장소 생성**
   ```bash
   # 이 폴더를 새 저장소로 푸시하거나
   # 기존 브랜디 저장소의 gh-pages 브랜치로 배포
   ```

2. **GitHub Pages 설정**
   - 저장소 Settings > Pages
   - Source: Deploy from a branch
   - Branch: main (또는 gh-pages) / root
   - Save

3. **접속 URL**
   - `https://{username}.github.io/{repo-name}/`
   - 예: `https://brandi-app.github.io/hbti-test/`

### 로컬 테스트

```bash
# Python 3
python -m http.server 8000

# 또는 Node.js (npx)
npx serve .

# 브라우저에서 http://localhost:8000 접속
```

## 파일 구조

```
hbti-test/
├── index.html      # 메인 HTML (Welcome, Question, Result 페이지 포함)
├── styles.css      # 스타일시트
├── data.js         # 질문 및 결과 데이터
├── app.js          # 로직 (상태관리, 페이지전환)
└── README.md       # 이 파일
```

## 기능

- 9개 질문으로 HBTI 유형 판단
- 8가지 취미 유형 결과 (연금술사, 과몰입러, 덕질러, 성장러, 에너자이저, 인싸, 갓생러, 행동가)
- URL 해시 기반 결과 공유 (예: `#SCE`)
- 반응형 디자인 (모바일 최적화)
- 결과 공유 기능 (Web Share API / 클립보드 복사)

## 커스터마이징

### 앱 다운로드 링크 변경

`index.html`에서 다운로드 버튼 URL 수정:
```html
<a href="https://apps.apple.com/app/brandi" class="btn-primary btn-download" target="_blank">
```

### 질문 수정

`data.js`의 `questions` 배열 수정

### 결과 데이터 수정

`data.js`의 `resultData` 객체 수정

## 결과 유형 설명

| 코드 | 이름 | 축 |
|------|------|-----|
| SCE | 연금술사 | 정적·창작·표현 |
| SAG | 과몰입러 | 정적·감상·성장 |
| SAE | 덕질러 | 정적·감상·표현 |
| SCG | 성장러 | 정적·창작·성장 |
| DAG | 에너자이저 | 동적·감상·성장 |
| DAE | 인싸 | 동적·감상·표현 |
| DCG | 갓생러 | 동적·창작·성장 |
| DCE | 행동가 | 동적·창작·표현 |
# hbti-test
