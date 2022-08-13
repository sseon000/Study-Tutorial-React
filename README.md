<style type="text/css">
    .title {
        color : tomato;
        font-size : 24px;
    }
    .issue {
        color : red;
        font-size : 16px;
    }
</style>

## REACT Tutorial

---

<div class=title>
    1. Component 만들기
</div>
<br>

1. 필요없는 파일 지우기 App.css, logo.svg, App.test.js, index.css
2. Hello.js 파일 만들기

```javascript
import React from "react";

const Hello = () => {
  return <div>안녕하세요</div>;
};

export default Hello;
```

<div class=title>
    2. JSX ( babel을 통해 html이 js로 변경됨 )
</div>
<br>

> App.js file

```javascript
import Hello from "./component/Hello";
import "./App.css";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };
  return (
    <>
      {/*block comment*/}
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
```

> App.css file

```javascript
.gray-box {
    background: grey;
    width: 64px;
    height: 64px;
}
```

1. 태그는 무조건 닫아주기. selfclosing사용하기
2. 2개 이상의 태그는 하나의 태그로 감싸주기. <></> = Fragment
3. 변수값 사용은 {}
4. inline style은 객체형태로 작성, div태그 내에서 클래스 설정은 className으로
5. block comment 주석은 {/_ 주석 작성 _/}, 한줄 주석은 //

<div class=title>
    3. props ( properties )
</div>
<br>

1. 컴포넌트가 가지는 속성
2. 해당 컴포넌트 인자값으로 props(객체) 전달받음
3. 비구조화할당, 구조분해통해서도 받을 수 있음
4. 해당 컴포넌트에 컴포넌트.defaultProps = { key: value, } 형태로 속성값 없을시 default 설정가능
5. children을 인자값으로 자식태그, 내용 전달가능

### 1장 - 05
