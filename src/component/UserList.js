import React, { useEffect, useContext } from 'react'
import { UserDispatch } from '../App';

const User = React.memo(function User({ user }) {
    const { username, email, id, active} = user
    const dispatch = useContext(UserDispatch);
    // 첫번째 인자는 실행 할 함수
    // props로 받아온 값들은 useEffect 내에서 사용할 땐 deps에 넣기
    /*
    useEffect( () => {
        console.log('컴포넌트가 화면에 나타남')
        // props -> state
        // REST API
        // D3 Video.js 등 라이브러리
        // setInterval, setTimeout
        return () => {
            // clearInterval, clearTimeout
            // 라이브러리 인스턴스 제거
            console.log('컴포넌트가 화면에서 사라짐')
        }
    },[])
    */
    useEffect( () => {
        console.log('설정됨')
        console.log(user);
        return () => {
            console.log('바뀌기 전')
            console.log(user);
        }
    }, [user]);

    return (
        <div>
        <b style={{
            color: active ? 'green' : 'black',
            cursor: 'pointer'
            }}
            onClick={ () => dispatch({
                type: 'TOGGLE_USER',
                id
            })}
        >
            {username}
        </b>
        &nbsp;
        <span>{email}</span>
        <button onClick={ () => dispatch({
                type: 'REMOVE_USER',
                id
            })}>삭제</button>
        </div>
    );
});

function UserList({ users }) {
  return (
    <>
        {
            users.map(
                user => (
                <User 
                    key={user.id} 
                    user={user} 
                />
                )
            )
        }
    </>
  )
}

export default React.memo(
    UserList,
    (prevProps, nextProps) => nextProps.users === prevProps.users
)
