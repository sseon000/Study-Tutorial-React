import React from 'react'

function User({ user }) {
    return (
        <div>
        <b>{user.username}</b><span>{user.email}</span>
        </div>
    )
}

function UserList({users}) {
    
  return (
    <>
        {
            users.map(
                user => (<User key={user.id} user={user} />)
            )
        }
    </>
  )
}

export default UserList
