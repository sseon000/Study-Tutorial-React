import React, { useRef } from 'react'
import Counter from "./component/Counter";
import Hello from "./component/Hello";
import InputSample from "./component/InputSample";
import UserList from "./component/UserList";
import Wrapper from "./component/Wrapper";

function App() {
  const users = [
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gamail.com'
    },
    {
        id: 2,
        username: 'velopert2',
        email: 'public.velopert2@gamail.com'
    },
    {
        id: 3,
        username: 'velopert3',
        email: 'public.velopert3@gamail.com'
    },
]

// useState로 관리해도 되지만 리렌더링되지 않게 변수값을 사용하고 싶을때 사용!
const nextId = useRef(4);

const onCreate = () => {
  console.log(nextId.current); // 4
  nextId.current += 1;
}

  return (
  <>
    <Wrapper>
      <Hello name='react' color="red" isSpecial={true}/>
      <Hello color="pink"/>
    </Wrapper>
    <Counter />
    <br />
    <InputSample />
    <br />
    <UserList users={users} />
  </>
  );
}

export default App;
