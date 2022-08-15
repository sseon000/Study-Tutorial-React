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
