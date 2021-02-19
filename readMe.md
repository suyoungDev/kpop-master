# 링크

https://kpopmaster.herokuapp.com/
heroku 무료 배포 계정이기 때문에 처음으로 로드 될 때 시간이 좀 소요 됩니다!

# 목적✨

한 방송에서 예능인 김희철이 가요의 전주만 듣고 누구보다 빨리 노래를 맞추는 것을 본 적이 있을지도 모르겠다.

그런 포맷을 가진 미니게임을 있다면 어떨까? 본인이 `음악을 잘 알고있는지` 아닌지 친구들과 겨뤄본다면?

## 기획

![ux](https://user-images.githubusercontent.com/71932072/108396099-d2400980-7259-11eb-82be-5c3ef9811c1a.png)

![schema](https://user-images.githubusercontent.com/71932072/108396097-d10edc80-7259-11eb-9e2b-3940a3cc8043.png)

이렇게 간단하게 UX Flow와 스키마를 만들어보았다.
만들다보니 제외된 부분도 있지만 거의 90% + @ 로 구현했다! `+@ 는 기획한 것 이외에도 추가한 기능과 페이지`

### 사용 방법

### 사용 스택

### 폴더 구조

## 후기🌼

2주 안에 끝날 것이라고 예상했지만, 생각보다 많은 시간이(거의 24일이나) 걸렸다. 사실 실제 기능은 거의 2주일안에 끝나긴 했지만, 2번이나 뒤엎게 된 UI 스타일링 때문에 2주를 더 쓰게 되었다. 기획단계에서 기능 구현보다 더 자세하게 만들어야 하는 건 UI 컴포넌트 부분인건가 싶었다..🤔

### ui 부분

토이 프로젝트라고 해도, 아무리 간단한 기능이어도 기획단계에서 아주 작은 디자인도 완벽하게 만들어야한다는 걸 깨달았다. 그래야 공통으로 쓸 컴포넌트를 처음부터 계획할 수 있어서 코드 작성하기도, 수정하기도, 더 추가하기도 쉬웠을 텐데.... 내가 만든 재사용 컴포넌트는 너무 스파게티 같아 보인다. 뭔가 더 추가할 때마다 매번 자그마한 화면의 에러가 나타난다. 더 잘게 쪼개고 싶은데, 그럴수록 파일구조도 복잡해지니... 🤯

애초에 기획단계에서도 파일구조도 파일명도 기획하는 걸까? 충분히 유의해서 파일명을 작성했어도, 나중에 보면 비슷한 파일명이 너무 많다.😨 파일구조도 너무 복잡해 보인다. 더 간단하게 보이는 방법은 없는걸까?

### 기능 부분

처음부터 제일 걱정했던 건 차트를 가져오는 api 여부였다. 다행히도 멜론 차트 파서가 있었다. 없다면 ~~땅파서 만들었어야~~ 하드코딩 했어야 했는데... 덕분에 top 100 목록을 손쉽게 가져올 수 있었다.

많은 라이브러리의 도움을 받았다. 만약 라이브러리가 없었다면, 그리고 그 라이브러리들이 친절하게 예시까지 없었다면 이 프로젝트는 존재하기 힘들었을 것이다.

제일 궁금한 것은, 내가 처음부터 끝까지 짠 이 코드의 성능이 괜찮은가이다. 독학으로 배운 코딩이기때문에 성능 테스트에 대해서는 어떻게 하는건지 모르니까 😂😂 이부분이 제일 아쉽다.

## 문제 해결 과정

### 컴포넌트 재사용 (Styled Components)

- `LinkButton` 과거 vs 현재(이것도 더 깔끔하게 할 수 있겠다..)
- `CleanCard` 이건 진짜 쓸게 너무 긴데?

### 변수 이름이 명확하지 않다보니..

받아오는 변수이름을 컴포넌트마다 바꾸고 싶다!
뭔가 어색하다!
그런 문제들!

그리고 `theme`에서 정한 변수명도! 처음엔 명확하다고 생각했는데 아니었던 것도 많고.. 하지만 이미 많이 사용되서 고치기도 좀 그렇고..그런부분..이 많다! 명확하다고 생각했는데 아니었기때문에 새로 다른 컴포넌트를 작성할때도 혼란스러워서 이거맞나? 싶어서 `theme` 한번 들어가서 확인해보고 그랬던게 많다 ㅠ

게다가 `theme`작성 시 가장 어려웠던게 아무래도.. 기존에 정한 디자인 시스템이 없기 때문에 컬러도 중간중간 계속 바꿔야했고(변수명까지!), 컬러면 다행이겠는데 `size`, `fonts` 모든게 다 문제고 아쉬웠다..

다음에 또 토이프로젝트를 한다면 무조건 디자인 계획을 명확하게 짜고, 심지어 radius 값까지 명확하게 해서 시스템화 할 것이다!!

아무튼 문제해결과정은.... 그냥 수시로 계속 변경해주고, 문제가 생길 때마다 어디서 문제가 일어났는지 확인해서 `theme`을 변경하든 값을 변경하든 했던거 같음
