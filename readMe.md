- [🚩 제작 배경](#-제작-배경)
  - [배포 링크](#배포-링크)
- [✨ 기획](#-기획)
  - [사용 스택](#사용-스택)
    - [프론트엔드](#프론트엔드)
    - [백엔드](#백엔드)
  - [주요 기능](#주요-기능)
  - [구현 화면](#구현-화면)
  - [폴더 구조](#폴더-구조)
- [🔥 문제 해결 경험](#-문제-해결-경험)
  - [리팩토링 할 때 가장 중요한 건 변수명을 수정 하지 않는 것!](#리팩토링-할-때-가장-중요한-건-변수명을-수정-하지-않는-것)
  - [좋아요 싫어요 기능](#좋아요-싫어요-기능)
  - [Authentication 기능](#authentication-기능)
    - [작성한 authContext 코드](#작성한-authcontext-코드)
    - [적용 모습](#적용-모습)
  - [custom hook으로 input을 사용할 때 에러](#custom-hook으로-input을-사용할-때-에러)
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

- 리액트로 구축
- 반응형 웹페이지
- axios를 사용하여 클라이언트-서버 간 RESTful API 형식으로 통신

### 백엔드

- node.js + express를 이용하여 구축
- MongoDB, mongoose를 이용하여 DB 생성
- 유저 정보, 게임 결과, 댓글, 좋아요와 싫어요의 CRUD 가 주요 기능
- YOUTUBE Data API v3를 호출하여 노래제목만으로 영상 정보 검색

## 주요 기능

- 사용자가 플레이할 **난이도**(쉬움, 보통, 어려움), **테마**(가수, 년도별, 이번주) 선택과 적용
- `melon-chart-parser` 디펜던시를 사용하여 음악 정보 가져오기
- `youtube v3 api`를 활용하여 위에서 가져온 음악 정보를 토대로 검색 후 플레이
- 힌트 제공
  - 노래제목이 한글이면, 힌트는 **초성**으로 보여짐
  - 노래제목이 영어면, 힌트는 **무작위**로 뽑힌 3글자 혹은 1글자만 보여짐
- `사용자가 입력한 답안`과 `플레이 중인 노래 제목`를 비교하여 **정답 판별**
- 20초 초과 시 다음 라운드로 넘어감
- 특정 키워드(`!q` 또는 `!ㅂ`) 입력 시, 다음 라운드로 넘어감
- 게임 결과, 유저 정보, 코멘트 정보를 `mongoDB`에 기록
  - 비회원, 미접속 경우 게임 결과는 기록되지 않음
- `mongoDB`에 저장된 기록을 토대로 현재 플레이 점수가 몇등인지 판별
- 회원가입 및 로그인 기능
- `bcrypt`로 유저 정보 암호화, `jwt`로 생성한 `token`은 `cookie`에 보관
- 댓글 기능
- 좋아요와 싫어요
- 명예의 전당: 점수 순으로 랭킹
  - 로그인 유저일 경우, 본인의 전적만 따로 확인 가능
- 획득한 점수에 대응하는 게임 결과 판독

## 구현 화면

![mobile](https://user-images.githubusercontent.com/71932072/109439779-178ee300-7a73-11eb-9c6a-9b0cc91693a8.png)
![laptop](https://user-images.githubusercontent.com/71932072/109439780-18c01000-7a73-11eb-8172-bb3a6a076030.png)

![howtoplay](https://user-images.githubusercontent.com/71932072/109440066-36da4000-7a74-11eb-9995-67136ca8b55b.png)

## 폴더 구조

![folder-tree](https://user-images.githubusercontent.com/71932072/109437229-148df580-7a67-11eb-9498-950dd81c7a6e.PNG)

# 🔥 문제 해결 경험

## 리팩토링 할 때 가장 중요한 건 변수명을 수정 하지 않는 것!

리팩토링 도중에 '그때는 이 변수명을 왜 이렇게 쓴거지? 이게 더 나은 변수명인거 같다'며 변수명을 고쳤고, 그 변수명을 사용하는 모든 파일을 최대한 수정했습니다. 잘 작동되는 것을 파악하고 배포를 했습니다. 하지만 다음날 한 사용자가 오류 리포트를 했습니다. 원인을 파악해보니 mongoDB에 올라간 모든 데이터가 수정 전의 변수명을 쓰고 있었습니다. 그래서 새로 데이터를 기록할때마다, 그 수정된 변수명의 데이터는 기록이 되지 않았던 거였습니다. 이번 케이스를 토대로 한번 작성한 변수명은 절대 변경하지 않는게 좋다는 걸 깨달았습니다.

## 좋아요 싫어요 기능

`mongoDB`에 좋아요와 싫어요의 데이터를 저장하는 코드를 작성하고 구현이 잘 된 것을 확인했습니다. 하지만 실제 테스트에서 계속 이상한 에러가 발생했습니다. 좋아요 싫어요 숫자가 마구 날뛰는 것이었습니다.

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

아래와 같이 수정하여 해결하였습니다.

1. `useEffect`로 화면 첫로드에만 `좋아요`와 `싫어요`의 정보를 가져오고,
2. `좋아요`와 `싫어요` 버튼을 누를 때에만 업로드만 하고, 정보를 가져오진 않았습니다.
3. `좋아요`와 `싫어요` 버튼을 누를 때 나타나는 +1, -1 같은 값의 변화는 `useState`로 업데이트 해줬습니다.

## Authentication 기능

**로그인 유무에 따라 회원가입 혹은 로그아웃 버튼이 보이게** 하고 싶었습니다.

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

  // 아래의 resetInput을 추가하여 문제를 해결했습니다.
  const resetInput = useCallback(() => setInput(initalValue), [initalValue]);

  return [input, handler, resetInput];
};
```

## 모바일의 키보드에 화면이 가려지는 문제

이번 토이프로젝트는 모바일로 사용 시, 문제가 두개가 있습니다.

1. youtube화면은 안보여도 갤럭시에서는 영상으로 인식해서 화면 확대 아이콘이 뜸
2. 모바일의 키보드에서 화면이 반 정도 가려짐

`1번`은 솔직히 어쩔 수 없다고 생각되서... 넘어가고요😥..
(안드로이드 브라우저를 고칠 수는 없으니까요 😥)

`2번`을 고치면서 번거로운 일이 계속 발생했습니다.

`firefox`나 다른 웹 브라우저에서 제공하는 `responsive design mode`에서는 화상 키보드를 구현하지 않습니다. 개발 당시, 키보드의 존재를 감안하여 공간을 충분히 넉넉하게 할당했음에도 불구하고, 키보드에 의해 **힌트 카드가 가려지는 문제**가 있음을 발견하게 됐습니다.

그래서 배포 후, 수정하고, 다시 배포 후, 수정하는 바보같은 일이 반복 되었습니다. 😞

가상머신을 이용해야하는 걸까요?

이 문제는 배포 후 수정의 반복 말고는 정답이 없는 문제인 것 같아 아쉽습니다.

# 🌼 후기

## ui 부분

토이 프로젝트라고 해도, 아무리 아주 작은 부분이더라도 기획단계에서 완벽하게 만들어야한다는 걸 깨달았습니다. 예를 들면

- round radius value
- color
- margin, pading value(아주 정확하게!)
- width, height value
- 컴포넌트끼리 묶는 컨테이너의 존재까지!
- 컴포넌트의 파일 명!

제가 만든 재사용 컴포넌트는 너무 스파게티 같아 보입니다. 뭔가 추가할 때마다 매번 자그마한 화면의 에러가 나타나서 계속 전체적으로 한번 더 훑어봐야했단게 아쉽습니다. 🤯

애초에 기획단계에서도 파일구조도 파일명도 기획하는 걸까요? 충분히 변별력을 유의하며 파일명을 작성했어도, 나중에 보면 비슷한 파일명이 너무 많아 구분하기 힘들었습니다.😨 파일구조도 너무 복잡해 보이고요. 더 간단하게 보이는 방법은 없는걸까요?

다음에는 Styled Components에서 제공하는 theme provider를 이용해봐야겠습니다. 매번 theme파일을 import 하는 게 번거롭기도 하고, 좀더 코드양을 줄이고 싶어거든요.
