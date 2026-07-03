# 배포 가이드 — GitHub Pages (웹 브라우저만 사용)

목표 주소: **https://busang-gu.github.io/loan-calculator/**
CLI(터미널) 없이 GitHub 웹사이트에서 클릭만으로 배포합니다.

---

## 올릴 파일 (이 폴더에서)
| 파일 | 필수? | 설명 |
|---|---|---|
| `index.html` | ✅ 필수 | 계산기 본체 |
| `sitemap.xml` | 권장 | 검색엔진 색인용 |
| `robots.txt` | 권장 | 크롤러 안내 |
| `og-image.png` | 선택 | 카톡 공유 미리보기 이미지 (1200×630, 직접 제작) |

> `VERIFICATION.md`, `DEPLOY.md`는 내부 문서라 **올리지 않아도 됩니다** (올려도 무방).
> `.nojekyll`은 이 사이트엔 불필요하므로 생략해도 됩니다.

---

## 1단계 — 새 저장소 만들기
1. https://github.com/new 접속
2. Owner: **busang-gu** 선택
3. Repository name: **loan-calculator** (정확히 이 이름 — 주소와 직결)
4. **Public** 선택
5. "Add a README" 체크 **해제** (그냥 빈 저장소로)
6. **Create repository** 클릭

## 2단계 — 파일 업로드
1. 만들어진 저장소 화면에서 **Add file → Upload files** 클릭
2. 이 폴더의 `index.html`, `sitemap.xml`, `robots.txt`를 드래그해서 올리기
   - (og-image.png 준비했으면 같이)
3. 아래 **Commit changes** 초록 버튼 클릭

## 3단계 — Pages 켜기
1. 저장소 상단 **Settings** 탭 → 왼쪽 메뉴 **Pages**
2. "Build and deployment" → Source: **Deploy from a branch**
3. Branch: **main** / 폴더: **/ (root)** → **Save**
4. 1~2분 기다린 후 새로고침하면 상단에 초록 체크와 함께 주소가 뜸

## 4단계 — 확인
- 폰·PC 브라우저에서 **https://busang-gu.github.io/loan-calculator/** 접속
- 4단계 위저드 → 결과 카드 → 하단 "부상구 무료 톡방 참여하기" 버튼이 오픈카톡으로 연결되는지 확인
- 카톡에 주소 붙여넣어 공유 미리보기 확인 (og-image 없으면 이미지 없이 제목·설명만 나옴)

---

## 나중에 수정할 때
1. 저장소에서 `index.html` 클릭 → 연필(✏️) 아이콘 → 수정 → Commit
   또는 **Add file → Upload files**로 새 `index.html`을 덮어쓰기
2. 1~2분 뒤 자동 반영 (강력 새로고침 `Cmd+Shift+R`)

## 정책 숫자 바뀌면
`index.html` 상단 `RULES` 객체 값만 고치면 됩니다. 자세한 건 `VERIFICATION.md`의 "다음 갱신 때 재확인" 목록 참고.

---

## (선택) 카톡 공유 이미지 만들기
`og-image.png` 없이도 작동하지만, 있으면 공유 시 카드가 예뻐집니다.
- 크기: 1200×630px
- 내용 예: "내집마련 대출 계산기 · 내 조건으로 얼마까지? · @busang.gu"
- 만들면 2단계에서 함께 업로드 → 자동 적용 (파일명 정확히 `og-image.png`)

## (선택) 방문자 분석 — Google Analytics
GA4를 붙이고 싶으면 측정 ID(G-XXXXXXX)를 알려주세요. `index.html`에 추적 코드를 넣어드립니다. (지금은 미설치 상태)
