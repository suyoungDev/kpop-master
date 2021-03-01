- [🚩 제작 배경](#-제작-배경)
  - [배포 링크](#배포-링크)
- [✨ 기획](#-기획)
  - [사용 스택](#사용-스택)
    - [프론트엔드](#프론트엔드)
    - [백엔드](#백엔드)
  - [주요 기능](#주요-기능)
  - [구현 화면](#구현-화면)
  - [폴더 구조](#폴더-구조)
<<<<<<< HEAD
    - [클라이언트 폴더 구조](#클라이언트-폴더-구조)
    - [서버 폴더 구조](#서버-폴더-구조)
- [🔥 문제 발생과 문제 해결](#-문제-발생과-문제-해결)
  - [UI 디자인](#ui-디자인)
  - [💄 컴포넌트 재사용성 (Styled Components)을 위한 리팩토링](#-컴포넌트-재사용성-styled-components을-위한-리팩토링)
=======
- [🔥 기술적 문제 해결](#-기술적-문제-해결)
  - [좋아요 싫어요 기능](#좋아요-싫어요-기능)
  - [Authentication 기능](#authentication-기능)
    - [작성한 authContext 코드](#작성한-authcontext-코드)
    - [적용 모습](#적용-모습)
  - [custom hook으로 input을 사용할 때 에러](#custom-hook으로-input을-사용할-때-에러)
  - [컴포넌트 재사용성 (Styled Components)](#컴포넌트-재사용성-styled-components)
>>>>>>> versionTwo
    - [before](#before)
    - [after](#after)
  - [모바일의 키보드에 화면이 가려지는 문제](#모바일의-키보드에-화면이-가려지는-문제)
- [🌼 후기](#-후기)
  - [ui 부분](#ui-부분)

# 🚩 제작 배경

한 방송에서 예능인 김희철이 가요의 전주만 듣고 누구보다 빨리 노래를 맞추는 것을 본 적이 있으신가요?

그런 포맷을 가진 미니게임을 있다면 어떨까요? **본인이 음악을 잘 알고있는지 아닌지** 친구들과 겨뤄본다면?

### 배포 링크

[플레이 하러 가기](https://kpopmaster.herokuapp.com/)

# ✨ 기획

## 사용 스택

![mern](https://user-images.githubusercontent.com/71932072/108599968-9337c280-73d7-11eb-8422-7de91c3e67fc.png)

React의 상태관리는 React Hook과 Redux를 사용하였습니다.

### 프론트엔드

<<<<<<< HEAD
![UX (1)](https://user-images.githubusercontent.com/71932072/108631927-bd5cb380-74af-11eb-80a4-04c57f08ba40.png)
=======
- 리액트로 구축
- YOUTUBE RESTful API를 호출하여 노래제목만으로 영상 정보 검색
>>>>>>> versionTwo

### 백엔드

<<<<<<< HEAD
## ✨ 목표
=======
- node.js + express를 이용하여 구축. API 형식은 RESTful API 사용
- 유저 정보, 게임 결과, 코멘트, 좋아요 싫어요의 CRUD 연산이 중심

## 주요 기능
>>>>>>> versionTwo

- 반응형 웹페이지
- 사용자가 플레이할 **난이도**(쉬움, 보통, 어려움), **테마**(가수, 년도별, 이번주) 선택과 적용
- `melon-chart-parser` 라이브러리를 사용하여 음악 정보 가져오기
- `youtube v3 api`를 활용하여 위에서 가져온 음악 정보를 토대로 `youtube videoId`를 검색 후 플레이
- `노래제목`이 한글이면, 힌트는 **초성**으로 보여짐.
- `노래제목`이 영어면, 힌트는 **무작위**로 뽑힌 3글자만 보여짐.
- `사용자가 입력한 답안`과 `플레이 중인 노래 제목`를 비교하여 **정답 유무 판별**
- 20초 초과 시 다음 라운드로 넘어감
- 특정 키워드(`!q` 또는 `!ㅂ`) 입력 시, 다음 라운드로 넘어감
- 게임 결과, 유저 정보, 코멘트 정보를 `mongoDB`에 기록
- 비회원일 경우 플레이점수는 `mongoDB`에 기록되지 않음
- `mongoDB`에 저장된 기록을 토대로 현재 플레이 점수가 몇등인지 판별
- 명예의 전당: 점수 순으로 랭킹
- 회원가입 및 로그인 기능
- `bcrypt`로 유저 정보 암호화, `jwt`로 생성한 `token`은 `cookie`에 보관.
- 댓글 기능
- 좋아요와 싫어요
- 로그인 유저일 경우, 본인의 전적만 따로 확인 가능

## 구현 화면

![mobile](https://user-images.githubusercontent.com/71932072/109439779-178ee300-7a73-11eb-9c6a-9b0cc91693a8.png)
![laptop](https://user-images.githubusercontent.com/71932072/109439780-18c01000-7a73-11eb-8172-bb3a6a076030.png)

<<<<<<< HEAD
- `매번 플레이마다 데이터를 셔플 할 것`
- `주어진 시간 안에 정답 맞추기` 혹은 `주어진 시간을 지나면 time out`
- `힌트 생성 알고리즘`
- `정답을 맞춘 시간 기록`
- `유저의 플레이 결과에 맞는 설명과 tier 구현`
- `유저의 플레이 결과를 DB에 저장`
- `DB의 기록 가져와서 가공`
- `메일 전송`
- `cors`
=======
![howtoplay](https://user-images.githubusercontent.com/71932072/109440066-36da4000-7a74-11eb-9995-67136ca8b55b.png)
>>>>>>> versionTwo

## 폴더 구조

![folder-tree](https://user-images.githubusercontent.com/71932072/109437229-148df580-7a67-11eb-9498-950dd81c7a6e.PNG)

# 🔥 기술적 문제 해결

## 좋아요 싫어요 기능

`Nodejs`로 `api`를 작성하고 구현이 잘 작동된 것을 확인했습니다. 하지만 실사용을 하려고 보니 계속 이상한 에러가 발생했습니다. 좋아요 싫어요 숫자가 마구 날뛰는 것이었습니다.

도저히 원인을 파악할 수 없어서, 제가 혹시 구현을 잘못한건 아닐까 혼란이 들어서 기능구현 흐름의 다이어그램도 작성해봤습니다. 하지만 이렇게 했음에도 파악을 못했습니다.

![like-dislike-diagram](https://user-images.githubusercontent.com/71932072/109436382-94fe2780-7a62-11eb-95a5-e8e8df068fa0.png)

아래는 그 문제의 코드입니다.

```js
const Heart = ({ toWhat }) => {
  const [isLike, setIsLike] = useState(null);
  const [isDislike, setIsDislike] = useState(null);

  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [numberOfDislikes, setNumberOfDislikes] = useState(0);

  const user = useSelector((state) => state.user);
  const [variables] = useState({
    fromWhom: user.userData._id,
    toWhat: toWhat,
  });

  useEffect(
    () => {
      axios.post('/api/heart/getLike', variables).then((res) => {
        if (res.data.success) {
          setNumberOfLikes(res.data.likes.length);
          res.data.likes.map((like) => {
            like.fromWhom === variables.fromWhom && setIsLike('yes');
          });
        }
      });

      axios.post('/api/heart/getDislike', variables).then((res) => {
        if (res.data.success) {
          setNumberOfDislikes(res.data.dislikes.length);

          res.data.dislikes.map((dislike) => {
            dislike.fromWhom === variables.fromWhom && setIsDislike('yes');
          });
        }
      });
    },
    // eslint-disable-next-line
    [isLike, isDislike]
  );

  const goLike = async () => {
    if (isLike === null) {
      await axios.post('/api/heart/upLike', variables);
      setIsLike('yes');

      if (isDislike !== null) {
        setIsDislike(null);
      }
    } else {
      await axios.post('/api/heart/DownLike', variables);
      setIsLike(null);
    }
  };

  const goDislike = async () => {
    if (isDislike === null) {
      await axios.post('/api/heart/upDislike', variables);
      setIsDislike('yes');

      if (isLike !== null) {
        setIsLike(null);
      }
    } else {
      await axios.post('/api/heart/downDislike', variables);
      setIsDislike(null);
    }
  };

  return (
    <ColumnWrapper likes>
      {!user.userData.isAuth ? null : (
        <UpDownButton
          onClick={goLike}
          className={`${isLike === 'yes' && 'selected'}`}
        >
          <BsChevronUp size='1.1rem' />
        </UpDownButton>
      )}
      <Likes>{numberOfLikes - numberOfDislikes}</Likes>

      {!user.userData.isAuth ? null : (
        <UpDownButton
          onClick={goDislike}
          className={`${isDislike === 'yes' && 'selected'}`}
        >
          <BsChevronDown size='1.1rem' />
        </UpDownButton>
      )}
    </ColumnWrapper>
  );
};
```

원인은 바로 http통신을 너무 자주했기 때문이었습니다. `좋아요`와 `싫어요`를 누를 때마다, 해당 유저 정보와 해당 코멘트 정보를 DB에 업로드 해야했고, 동시에 DB에서 새로운 정보를 받아와야 했습니다. 그러니 숫자가 꼬일 수 밖에 없었습니다. 😭

1. `useEffect`로 첫로드 시에만 `좋아요`와 `싫어요`의 정보를 가져오고,
2. `좋아요`와 `싫어요` 버튼을 누를 때 나타나는 +1, -1 같은 값의 변화는 `useState`로 업데이트 해줬습니다.

## Authentication 기능

**로그인 유무에 따라 회원가입 혹은 로그아웃 버튼이 보이게** 하고 싶었습니다. `HOC`에 `auth`를 적용해서 페이지 접근 자체를 막는 방법은 알고 있었으나, 제가 원하는 기능은 `HOC`으로도 구현이 가능한건지 의문이 들었습니다. 다른 사람들은 어떻게 하나 찾아보려고 했으나 마땅한 검색어를 찾지 못해 원하는 결과를 찾기가 힘들었습니다.

일단은 기존에 사용하던 `리덕스`를 활용하기로 했습니다. `HOC`를 활용하여 웹 브라우저에 접속 시 쿠키에 토큰이 있는가 판별 후, 유저인지 아닌지를 판별해서 회원가입 혹은 로그아웃 버튼이 보이게 만들었습니다. 하지만 미접속 회원은 토큰을 애초에 갖고있지 않기때문에 에러로 값이 리턴되었고, 에러가 계속 발생했습니다.

두번째로 전역으로 상태관리를 해주는 `useContext`를 이용해보았습니다. 기본적으론 리덕스와 동일한 api를 사용했습니다. 하지만 기본값으로 `undefined`으로 설정했고, 토큰이 없을 경우에도 `undefined`이었기에, 미가입 유저일 경우에도 에러가 발생하지 않았습니다. 로그인과 로그아웃 할 때마다 `context`값을 업데이트해줬습니다.

### 작성한 authContext 코드

```js
export const AuthContext = createContext();

export function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  async function getIsLoggedIn() {
    const response = await axios.get('/api/user/auth');
    setIsLoggedIn(response.data.isAuth);
  }

  useEffect(() => {
    getIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={[isLoggedIn, getIsLoggedIn]}>
      {props.children}
    </AuthContext.Provider>
  );
}
```

### 적용 모습

```js
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const RightMenu = ({ open, history }) => {
  const [isLoggedIn, getIsLoggedIn] = useContext(AuthContext);

  const logOut = async () => {
    await axios.get('/api/user/logout');
    getIsLoggedIn();
    history.push('/');
  };

  return (
    <LinkContainer open={open}>
      <StyledLink to='/'>home</StyledLink>
      <StyledLink to='/rank'>Rank</StyledLink>
      <StyledLink to='/about'>About</StyledLink>

      {isLoggedIn ? (
        <StyledLink as='div' onClick={logOut}>
          로그아웃
        </StyledLink>
      ) : (
        <StyledLink to='/register'>회원가입 / 로그인</StyledLink>
      )}
    </LinkContainer>
  );
};

export default withRouter(RightMenu);
```

## custom hook으로 input을 사용할 때 에러

`input`을 `custom hook`으로 `useInput`을 만들어서 사용했습니다. 그런데 다른 페이지에선 오류가 없었으나 `gameLayout`페이지에서 에러가 발생했습니다.

문제가 일어난 `gameLayout`페이지에서는 `input`을 초기화 하는 기능이 있습니다.

> 1. 주어진 시간이 지나면 input value를 초기화함.
> 2. input 입력 시, 초기화함.

이때 그냥 `input value 초기화`를 단순히 `setInput('')`으로 했기 때문에 `event`가 없어서 에러가 발생한 것이었습니다.
`setInput(value)`의 value를 `event.target.value`로 받아왔기 때문입니다.

```js
const { value } = event.target;
setInput(value);
```

이후에 `reset function`을 만들어서 `useInput custom hook`에 추가하였고,
`input value 초기화` 할때마다 `reset function`을 사용하여 문제를 해결하였습니다.

```js
export default (initalValue = null) => {
  const [input, setInput] = useState(initalValue);

  const handler = useCallback(
    (event) => {
      const { value } = event.target;
      setInput(value);
    },
    [input]
  );

<<<<<<< HEAD
1. `글래스모피즘`은 웹디자인에는 어울리지 않다는 걸 간과하고 `글래스모피즘`으로 진행했다.
2. 결과적으로 `글래스모피즘`은 모바일 화면에서 안예뻤다.
3. `responsive web`이 안됐다. 다른 사람들이 `mobile first`를 그렇게나 외치는 이유가 있었다. 난 처음부터 `web design`을 먼저 상정하고 했고, `mobile`화면을 무시했기 때문에 `mobile` 화면이 깨졌고...전체적인 디자인과 어울리지 않았다.
=======
  // 아래의 resetInput을 추가하여 문제를 해결했습니다.
  const resetInput = useCallback(() => setInput(initalValue), [initalValue]);
>>>>>>> versionTwo

  return [input, handler, resetInput];
};
```

<<<<<<< HEAD
## 💄 컴포넌트 재사용성 (Styled Components)을 위한 리팩토링
=======
## 컴포넌트 재사용성 (Styled Components)
>>>>>>> versionTwo

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

<<<<<<< HEAD
이렇게만 써도 적용되는데 왜 그랬나 모르겠습니다.😐
=======
이렇게만 써도 적용되는데...😐
>>>>>>> versionTwo

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

<<<<<<< HEAD
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
=======
## 모바일의 키보드에 화면이 가려지는 문제
>>>>>>> versionTwo

이번 토이프로젝트는 모바일로 사용 시, 문제가 두개가 있습니다.

1. youtube화면은 안보여도 갤럭시에서는 영상으로 인식해서 화면 확대 아이콘이 뜸
2. 모바일의 키보드에서 화면이 반 정도 가려짐

<<<<<<< HEAD
을 구현하기 위해 고민하다가, 기획한 기간 내에 알고리즘으로는 힘들 것 같다는 판단에 하드코딩으로 진행하였습니다.
=======
`1번`은 솔직히 어쩔 수 없다고 생각되서... 넘어가고요😥..
(안드로이드 갤럭시의 브라우저를 고칠 수는 없으니까요 ㅠㅠ)
`2번`으로 번거로운 일이 계속 발생했습니다.
>>>>>>> versionTwo

`firefox`나 다른 웹 브라우저에서 제공하는 `responsive design mode`에서는 화상 키보드를 구현하지 않습니다. 개발 당시, 키보드의 존재를 감안하여 공간을 충분히 넉넉하게 할당했음에도 불구하고, 키보드에 의해 **힌트 카드가 가려지는 문제**가 있음을 발견하게 됐습니다.

그래서 배포 후, 수정하고, 다시 배포 후, 수정하는 바보같은 일이 반복 되었습니다. 😞

<<<<<<< HEAD
`alterTrackName`을 하나하나 작성하여, 정답 확인시 `trackName`이 틀렸을 때 `alterTrackName`이 맞는지 한번 더 확인하는 코드로 작성했습니다.

아무래도 제가 생각하는 기술은 알고리즘으로는 구현하기 힘들 것같아 다음버젼에서는 제거할 예정입니다.😭

하는 김에 youtube api를 대체하기 위한 url도 추가하였습니다.
(youtube api는 다음 버젼에 사용할 계획입니다.)
=======
가상머신을 이용해야하는 걸까요?

이 문제는 배포 후 수정의 반복 말고는 정답이 없는 문제인 것 같아 아쉽습니다.
>>>>>>> versionTwo

# 🌼 후기

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
<<<<<<< HEAD

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
=======
>>>>>>> versionTwo
