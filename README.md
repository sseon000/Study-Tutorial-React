## REACT Tutorial

---

### Component 만들기

1. 필요없는 파일 지우기 App.css, logo.svg, App.test.js, index.css
2. Hello.js 파일 만들기

```javascript
import React from "react";

const Hello = () => {
  return <div>안녕하세요</div>;
};

export default Hello;
```

### JSX ( babel을 통해 html이 js로 변경됨 )

> App.js
> App.css

1. 태그는 무조건 닫아주기. selfclosing사용하기
2. 2개 이상의 태그는 하나의 태그로 감싸주기. <></> = Fragment
3. 변수값 사용은 {}
4. inline style은 객체형태로 작성, div태그 내에서 클래스 설정은 className으로
5. block comment 주석은 {/_ 주석 작성 _/}, 한줄 주석은 //

### props ( properties )

1. 컴포넌트가 가지는 속성
2. 해당 컴포넌트 인자값으로 props(객체) 전달받음
3. 비구조화할당, 구조분해통해서도 받을 수 있음
4. 해당 컴포넌트에 컴포넌트.defaultProps = { key: value, } 형태로 속성값 없을시 default 설정가능
5. children을 인자값으로 자식태그, 내용 전달가능

### 조건부 렌더링

1. 삼항연산자 or &&연산자를 통해 설정
2. props boolean값에 속성만 적으면 true로 인식

### useState를 통한 동적 상태 관리

> Counter.js

### react in input 상태 관리하기

> InputSample.js

### 여러개의 input 상태 관리하기

### useRef로 특정 DOM 선택하기

1. DOM제어 기술!!

> InputSample.js

### 배열 렌더링하기

1. 배열 내장함수 map을 사용하기
2. key선언해주기 -> 고유값이 없을땐 map인자값 index활용해주기

### useRef로 컴포넌트 안의 변수 만들기

1. useState로 관리해도 되지만 리렌더링되지 않게 변수값을 사용하고 싶을때 사용!

### 배열에 항목 추가하기

1. 기존 배열에 push, splice, sort를 사용하지 않고 배열의 불변성을 지키면서 추가

- spread 연산자사용하기
- concat 사용하기

### 배열에 항목 제거하기

1. fillter함수를 이용해서 새로운 배열

### 배열에 항목 수정하기

1. map함수, 삼항연산자 이용해서 새로운 배열

### useEffect Hook

1. 리액트 컴포넌트가 화면에서 나타나고, 사라질때 특정 작업
2. 컴포넌트의 props나 상태가 변경되어 업데이트 될 때
3. 리렌더링 될 때 마다 사용가능
4. 2번째 인자값으로 [] 사용시에는 처음 화면에 마운트 될 때만 실행
5. return문으로 언마운트 될 때 실행
6. props로 받아온 값들은 useEffect 내에서 사용할 땐 deps(2번째 인자)에 넣기

### useMemo를 사용하여 연산한 값 재사용하기

1. 특정값이 변경됐을때만 함수를 실행시킬때 사용 ( 기존값을 재사용 )

### useCallback을 사용하여 함수 재사용하기

1. 기존함수를 재사용
