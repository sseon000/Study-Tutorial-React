import React, { useRef, useState } from 'react'
import Counter from "./component/Counter";
import CreateUser from './component/CreateUser';
import Hello from "./component/Hello";
import InputSample from "./component/InputSample";
import UserList from "./component/UserList";
import Wrapper from "./component/Wrapper";

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const [users, setUsers]  = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gamail.com',
        active: true,
    },
    {
        id: 2,
        username: 'velopert2',
        email: 'public.velopert2@gamail.com',
        active: false,
    },
    {
        id: 3,
        username: 'velopert3',
        email: 'public.velopert3@gamail.com',
        active: false,
    },
])

// useState로 관리해도 되지만 리렌더링되지 않게 변수값을 사용하고 싶을때 사용!
const nextId = useRef(4);

const onCreate = () => {
  const user = {
    id: nextId.current,
    username,
    email,
  };
  //setUsers([...users, user]);   spread
  setUsers(users.concat(user)); //concat
  setInputs({
    username: '',
    email: '',
  });

  nextId.current += 1;
}

const onRemove = id => {
  setUsers(users.filter(user => user.id !== id));
}

const onToggle = id => {
  setUsers(users.map(
    user => user.id === id
    ? {...user, active: !user.active }
    : user
  ));
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
    <div>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users} 
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </div>
  </>
  );
}

export default App;
