import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react'
import Counter from "./component/Counter";
import CreateUser from './component/CreateUser';
import Hello from "./component/Hello";
import InputSample from "./component/InputSample";
import UserList from "./component/UserList";
import Wrapper from "./component/Wrapper";

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
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
  ]
}

function reducer(state, action){
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CRATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.id === action.id
            ? {...user, active: !user.active }
            : user
            )
      };
      case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.id)
        };
      default:
        throw new Error('Unhandled action')
  }
}

function App() {
  //      상태, dispatch               reducer, 초기값들
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4)
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  }, [])

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CRATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    });
    nextId.current += 1;
  }, [username, email])

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username}
        email={email} 
        onChange={onChange}
        onCreate={onCreate}              
      />
      <UserList 
        users={users} 
        onToggle={onToggle}
        onRemove={onRemove}
      />
      <div>활성 사용자 수: {count}</div>
    </>
  )

}

export default App;

/*
** useReducer 사용전 코드
 const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

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

const onCreate = useCallback(() => {
  const user = {
    id: nextId.current,
    username,
    email,
  };
  //setUsers([...users, user]);   spread
  setUsers(users => users.concat(user)); //concat
  setInputs({
    username: '',
    email: '',
  });

  nextId.current += 1;
}, [username, email])

const onRemove = useCallback(id => {
  setUsers(users => users.filter(user => user.id !== id));
}, [])

const onToggle = useCallback(id => {
  setUsers(users => users.map(
    user => user.id === id
    ? {...user, active: !user.active }
    : user
  ));
}, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

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
      <div>활성 사용자 수 : {count}</div>
    </div>
  </>
  );
*/
