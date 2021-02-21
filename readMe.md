- [🚩 목적](#-목적)
    - [배포 링크](#배포-링크)
    - [👾 사용 방법](#-사용-방법)
- [기획](#기획)
  - [✨ 목표](#-목표)
    - [하지만...](#하지만)
  - [사용 스택](#사용-스택)
  - [💄 화면 구현](#-화면-구현)
  - [폴더 구조](#폴더-구조)
    - [클라이언트 폴더 구조](#클라이언트-폴더-구조)
    - [서버 폴더 구조](#서버-폴더-구조)
- [🔥 문제 발생과 문제 해결](#-문제-발생과-문제-해결)
  - [UI 디자인](#ui-디자인)
  - [💄 컴포넌트 재사용성 (Styled Components)을 위한 리팩토링](#-컴포넌트-재사용성-styled-components을-위한-리팩토링)
    - [before](#before)
    - [after](#after)
  - [🤯 배포가 제일 어려웠어요](#-배포가-제일-어려웠어요)
  - [하드코딩](#하드코딩)
- [후기🌼](#후기)
  - [ui 부분](#ui-부분)
    - [모바일 실사용 시, 발견되는 문제...](#모바일-실사용-시-발견되는-문제)
  - [기능 부분](#기능-부분)

# 🚩 목적

한 방송에서 예능인 김희철이 가요의 전주만 듣고 누구보다 빨리 노래를 맞추는 것을 본 적이 있을지도 모르겠다.

그런 포맷을 가진 미니게임을 있다면 어떨까? **본인이 음악을 잘 알고있는지 아닌지** 친구들과 겨뤄본다면?

### 배포 링크

[플레이 하러 가기](https://kpopmaster.herokuapp.com/)

heroku 무료 계정이기 때문에 최초 로드 시, _약 10초 정도_ 소요 됩니다!

### 👾 사용 방법

정답을 맞추는데 주어진 시간은 20초이며, 10초에 힌트가 나옵니다.
총 10라운드까지 있습니다.

![howtoplay](https://user-images.githubusercontent.com/71932072/108597466-8e214600-73cc-11eb-88dc-1f76350cf737.png)

# 기획

![UX (1)](https://user-images.githubusercontent.com/71932072/108631927-bd5cb380-74af-11eb-80a4-04c57f08ba40.png)

이렇게 UX Flow와 기능 구현 흐름을 다이어그램으로 만들어보았습니다. 제외된 부분도 있지만 거의 90% + @ 로 구현했습니다. (+@ 는 기획한 것 이외에도 추가한 기능과 페이지)

## ✨ 목표

- 멜론 api로 데이터 가져오기
- 가져온 데이터로 youtube api를 이용하여 제목으로 검색 후 플레이
- 동시 접속한 유저들끼리 실시간 게임 후 승자 판결
- 한글 혹은 영어로 입력해도 정답 인정

### 하지만...

빠르게 서비스를 구현하고 싶었기에 핵심 기능에 집중하여 프로젝트를 진행하여 완성하였습니다.

- `매번 플레이마다 데이터를 셔플 할 것`
- `주어진 시간 안에 정답 맞추기` 혹은 `주어진 시간을 지나면 time out`
- `힌트 생성 알고리즘`
- `정답을 맞춘 시간 기록`
- `유저의 플레이 결과에 맞는 설명과 tier 구현`
- `유저의 플레이 결과를 DB에 저장`
- `DB의 기록 가져와서 가공`
- `메일 전송`
- `cors`

멜론에서 api는 제공하지 않지만, 다행히도 `melon-chart-parser` 라이브러리가 존재하여 그걸 이용했습니다.

이후, 순차적으로 최종목표에 맞는 기능을 추가로 구현해나갈 계획입니다.😽

## 사용 스택

![mern](https://user-images.githubusercontent.com/71932072/108599968-9337c280-73d7-11eb-8422-7de91c3e67fc.png)

React의 상태관리는 React Hook을 사용하였습니다.

## 💄 화면 구현

![mobile](https://user-images.githubusercontent.com/71932072/108597809-43a0c900-73ce-11eb-9a8e-36903d6d7ccc.png)
![web](https://user-images.githubusercontent.com/71932072/108597876-95e1ea00-73ce-11eb-822d-dcd1d3cc2ae6.png)
웹의 나머지 화면은 모바일과 크게 다르지 않아서 추가하지 않았습니다.

## 폴더 구조

### 클라이언트 폴더 구조

![파일구조](https://user-images.githubusercontent.com/71932072/108594630-793db600-73be-11eb-8e0d-744767be4bef.PNG)

### 서버 폴더 구조

![파일구조2](https://user-images.githubusercontent.com/71932072/108594631-79d64c80-73be-11eb-98ba-79ad49738d55.PNG)

# 🔥 문제 발생과 문제 해결

## UI 디자인

기획 단계에서 기능구현에 대해 다이어그램으로 자세히 기획하였지만, 스타일링을 2번이나 뒤엎게 되어 계획보다 2주는 더 시간을 써야만 했습니다. 😨

UI스타일링을 2번이나 뒤엎게 된 이유는 아래와 같습니다.

1. `글래스모피즘`은 웹디자인에는 어울리지 않다는 걸 간과하고 `글래스모피즘`으로 진행했다.
2. 결과적으로 `글래스모피즘`은 모바일 화면에서 안예뻤다.
3. `responsive web`이 안됐다. 다른 사람들이 `mobile first`를 그렇게나 외치는 이유가 있었다. 난 처음부터 `web design`을 먼저 상정하고 했고, `mobile`화면을 무시했기 때문에 `mobile` 화면이 깨졌고...전체적인 디자인과 어울리지 않았다.

이후 마지막으로 채택한 디자인은 `mobile first`로 디자인을 진행하였고 덕분에 큰 수정 없이 배포까지 갈 수 있었습니다.

## 💄 컴포넌트 재사용성 (Styled Components)을 위한 리팩토링

### before

아래와 같이 의미없는 `className`속성 부여로 `styled components`를 재사용하려고 했습니다.

```js
const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 90px;
  border-radius: 100px;
  margin-top: 2rem;
  background: linear-gradient(
    30deg,
    #ced0ff 0%,
    ${COLORS.primaryMiddle} 40%,
    ${COLORS.primaryDark} 100%
  );
  box-shadow: 0 28px 13px -12px ${COLORS.primaryShaodw};
  color: white;
  font-family: ${FONT.englishButton};
  font-style: italic;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 3px;
  text-transform: capitalize;
  text-decoration: none;

  :hover {
    background: ${COLORS.primaryDark};
    box-shadow: 0px 22px 13px -12px ${COLORS.primaryShaodw};
    color: white;
  }

  &.secondary {
    background: linear-gradient(
      30deg,
      #fff3d6 0%,
      ${COLORS.secondaryDark} 100%
    );
    color: ${COLORS.primaryMiddle};

    :hover {
      background: ${COLORS.secondaryDark};
    }
  }
`;

const LinkButton = ({ children, links, name, ...otherprops }) => {
  return (
    <LinkContainer to={links} {...otherprops} className={name}>
      {children}
    </LinkContainer>
  );
};
```

```js
<LinkButton className='secondary' links='/' outro>
  play again
</LinkButton>
```

그래서 사용 할때도 위와 같이 **번거롭고 길게** 작성해야만 했습니다.

하지만 지금 생각해보면, 클래스명을 사용한다해도 저렇게 쓰지 않고

```js
<LinkContainer to={links} {...otherprops}>
  {children}
</LinkContainer>
```

이렇게만 써도 적용되는데 왜 그랬나 모르겠습니다.😐

아무튼 이렇게 작성하면 문제가 생길 때마다 위의 모든 코드를 처음부터 훑어봐야한다는 번거러움이 생깁니다. 실제로도 몇번이나 뒤엎어야만 했습니다.

### after

위의 **더럽고 길고 확인하기 어려운** 코드를 어떻게 하면 **깔끔하고**, 리액트 본연의 **잘게 쪼개서 수정이 간편한 장점** 을 살릴 수 있을지 집중해서 리팩토링 하였습니다.

```js
const primaryStyle = css`
  color: white;

  background: linear-gradient(
    20deg,
    #ced0ff 0%,
    ${COLORS.primaryMiddle} 40%,
    ${COLORS.primaryDark} 100%
  );

  :hover {
    background: ${COLORS.primaryDark};
    color: white;
  }
`;

const secondaryStyle = css`
  font-size: 1.2rem;
  color: ${COLORS.primaryDark};

  background: linear-gradient(20deg, #fff3d6 0%, ${COLORS.secondaryDark} 100%);

  :hover {
    background: ${COLORS.secondaryDark};
  }

  @media ${SCREEN.tablet} {
    margin-bottom: 1rem;
  }
`;

const getStyles = (props) => {
  if (props.secondary) {
    return secondaryStyle;
  }
  return primaryStyle;
};

const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.75em 2.7em;
  border-radius: 100px;
  margin: 1rem 0;

  font-family: ${FONT.englishButton};
  font-style: italic;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 3px;
  text-transform: capitalize;
  text-decoration: none;
  transition: width 1s ease;

  @media ${SCREEN.tablet} {
    font-size: 2rem;
    align-self: ${({ outro }) => (outro ? 'center' : 'flex-start)')};
    margin: 0 0 2rem 0;
  }

  ${getStyles};
`;

const LinkButton = ({ children, links, ...otherprops }) => {
  return (
    <LinkContainer to={links} {...otherprops}>
      {children}
    </LinkContainer>
  );
};
```

**`styled components`의 `css` 기능을 이용하여 해결했습니다.**

1. 기본적이고 공통적으로 사용되는 코드를 작성합니다.
2. 3개의 스타일로 잘게 쪼개게 됩니다. `primaryStyle`, `secondaryStyle`, 공통되는 css만 있는 `LinkContainer`.
3. `getStyles`이라는 `function`을 만들어서, `secondary`의 `props`가 있다면 `secondaryStyle`의 `css`만 추가적으로 가져오고, 그게 아니라면 `primaryStyle`의 `css`만 가져옵니다.

그럼 수정할 때도 `primary`에서 문제가 생겼다면 `primaryStyle`의 `css`만 확인하면 되니 더 유지보수성이 높아집니다. 그리고 추가할 스타일이 있다면 간단히 `새로운 css`만 작성하면 끝이니 더욱 편합니다.

```js
<LinkButton links='/' secondary outro>
  play again
</LinkButton>
```

게다가 사용할 때도 이젠 이렇게 깔끔해졌습니다! 👍👍

## 🤯 배포가 제일 어려웠어요

mern 스택이라서 배포하기 위해 주어진 선택은
`heroku`, `Amazon EC2`, `firebase`(express를 firebase function으로 수정해야하지만) 이것 뿐 이었습니다.

heroku는 무료일 때, 장시간 접속하지 않으면 sleep모드에 들어가기에 꺼려졌습니다.

그래서 다음 선택지인 firebase를 진행해보았습니다. 한번 firebase를 이용 해 본적이 있어서 손쉬울 것이라고 예상했으나... 기껏 mongoDB를 버리고, express를 버리고 새로 시간을 투자해서 firebase function을 배우기엔, 그리고 다음 버젼에 추가할 기능들을 생각하면 firebase로 진행하기엔 부담된다는 생각이 들었습니다.

따라서 다음 옵션인 Amazon EC2로 진행해보았습니다. 하지만 분명 공식문서대로 진행해 계속 error가 떴고, 에러를 붙잡은지 6시간이 지나가는 순간 포기했습니다.

네, 다시 원점으로 돌아온 것이죠. 😐 결국 heroku로 배포하기로 결정했습니다.
mern으로 heroku를 배포하는 것은 처음이기에 구글링과 유튜브를 통해 튜토리얼을 보고 진행했고, 또 무슨 이유인지 에러가...🤯 404 not found 만 계속 뜨더라구요.

에러가 뜬다고 이제 더이상 뒤로 물러날 곳은 없었기에 튜토리얼과 공식문서를 몇번이고 반복해서 봤습니다. 에러로그도 몇번씩 보고, 구글링했지만 저같은 결과`404 not found nginx`는 없더라구요.
하지만 에러로그를 읽다보니 몇번이고 계속되는 `not found`가 수상했기에 package.json을 보니 `npm run build`라고 쓰질 않고 `npm build`라고만 썼더라구요. 🙄 몇시간의 삽질의 원인이 밝혀지자 기분이 참...🙄🙄

> _결국 모든 버그의 원인은 오탈자 때문이라더니!_

다시는 오타를 내지 않겠다, 그냥 아예 `복사 붙여넣기`를 실생활해야겠다하고 결심했습니다.😐

그리고 에러로그를 잘 살펴보자는 교훈도 얻었습니다. 모든 문제의 원인은 여기서 찾아낼 수 있으니까요.

## 하드코딩

> 한글 혹은 영어로 입력해도 정답 인정
>
> > 정답이 `crazy over you` 일 때, `크레이지오버유`로 소리나는 대로 써도 정답 인정

을 구현하기 위해 고민하다가, 기획한 기간 내에 알고리즘으로는 힘들 것 같다는 판단에 하드코딩으로 진행하였습니다.

아래의 데이터는 기본적으로 `melon-chart-parser`으로 `Black Pink`를 검색하여 나온 JSON포맷의 데이터에 추가로 손 본 것입니다.

```js
export const blackpinkData = [
 {
   id: 'bp001',
   rank: 1,
   trackName: 'Lovesick Girls',
   alterTrackName: '럽식걸즈',
   artistName: 'BLACKPINK',
   album: 'THE ALBUM',
   url: 'https://www.youtube.com/watch?v=qt81CWVHgjI',
 },
```

`alterTrackName`을 하나하나 작성하여, 정답 확인시 `trackName`이 틀렸을 때 `alterTrackName`이 맞는지 한번 더 확인하는 코드로 작성했습니다.

아무래도 제가 생각하는 기술은 알고리즘으로는 구현하기 힘들 것같아 다음버젼에서는 제거할 예정입니다.😭

하는 김에 youtube api를 대체하기 위한 url도 추가하였습니다.
(youtube api는 다음 버젼에 사용할 계획입니다.)

# 후기🌼

## ui 부분

토이 프로젝트라고 해도, 아무리 아주 작은 부분이더라도 기획단계에서 완벽하게 만들어야한다는 걸 깨달았습니다. 예를 들면

- round radius value
- color
- margin, pading value(아주 정확하게!)
- width, height value
- 컴포넌트끼리 묶는 컨테이너의 존재까지!
- 컴포넌트의 파일 명!

제가 만든 재사용 컴포넌트는 너무 스파게티 같아 보입니다. 뭔가 추가할 때마다 매번 자그마한 화면의 에러가 나타나서 계속 전체적으로 한번 더 훑어봐야하고, 배포 뒤에도 아쉬운 부분이 계속 눈에 보여서 수정하게 됩니다. 배포, 수정, 배포, 수정... 이 과정만 몇번을 거친건지! 🤯

애초에 기획단계에서도 파일구조도 파일명도 기획하는 걸까요? 충분히 변별력을 유의하며 파일명을 작성했어도, 나중에 보면 비슷한 파일명이 너무 많아 구분하기 힘들었습니다.😨 파일구조도 너무 복잡해 보이고요. 더 간단하게 보이는 방법은 없는걸까요?

다음에는 Styled Components에서 제공하는 theme provider를 이용해봐야겠습니다. 매번 theme파일을 import 하는 게 번거롭기도 하고, 좀더 코드양을 줄이고 싶어거든요.

### 모바일 실사용 시, 발견되는 문제...

이번 토이프로젝트는 모바일로 사용 시, 문제가 두개가 있습니다.

1. youtube를 이용했기에 벌어지는 문제: youtube화면은 안보여도 갤럭시에서는 영상으로 인식해서 화면 확대 아이콘이 뜸
2. 모바일의 키보드에서 화면이 반 정도 가려짐

`1번`은 솔직히 어쩔 수 없다고 생각되서... 넘어가고요, 😥
`2번`이 제일 고민됩니다.

`firefox`나 다른 웹에서 제공하는 `responsive design mode`에서는 키보드가 없거든요. 그래서 최초 배포 후, 분명히 감안했음에도 불구하고 키보드에 의해 `힌트 카드`가 가려지는 문제가 있음을 뒤늦게 발견하게 됐습니다.
그래서 배포 후, 수정하고, 다시 배포 후, 수정하는 바보같은 일이 반복 되었습니다. 😞 현재는 키보드에 힌트카드가 가려지는 일이 없게 수정하였습니다.

가상머신을 이용해야 이런 배포 후 수정 후 배포 후 확인 같은 바보같은 일을 안할 수 있을까요?

## 기능 부분

처음부터 제일 걱정했던 건 차트를 가져오는 api 여부였는데, 다행히도 `melon-chart-parser`라이브러리가 존재하였습니다. 없다면 ~~땅파서 만들었어야~~ 하드코딩 했어야 했는데... 덕분에 top 100 목록을 손쉽게 가져올 수 있었습니다.

하지만 이번 version 에서 빠르게 프로젝트를 마감하고 싶었기에, `melon-chart-parser`을 제대로 활용하지 못했던 점이 아쉽습니다.
지금도 쓸려면 쓸 수 있지만, 쓰기 위해선 `UI design`을 새로 만들어야한다는게... 지금은 부담이 되서, 잠깐 한숨 돌리고 version 2에 `melon-chart-parser`과 `youtube API`를 제대로 활용해봐야겠습니다!

제일 궁금한 것은, 내가 처음부터 끝까지 짠 이 코드의 성능이 괜찮은가입니다. 독학으로 배운 코딩이기때문에 성능 테스트에 대해서는 어떻게 하는건지 모르니까요... 😂😂
