import React, { useEffect, useState } from 'react'
import getAvatar from '../../handlers/getAvatar'
import { UserInfoIcons } from '../User/UserInfoIcons'
import styles from './UserList.module.css'

const UserList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const url = 'https://jsonplaceholder.typicode.com/users'
      const res = await fetch(url)
      const data = await res.json()
      setUsers(data)
    }
    getUsers()
  }, [])

  return (
    <div className={styles.usersContainer}>
      {users.map((user) => (
        <UserInfoIcons
          key={user.id}
          avatar={getAvatar(user.id)}
          nickName={user.username}
          name={user.name}
          email={user.email}
          phone={user.phone}
          id={user.id}
        />
      ))}
    </div>
  )
}

export default UserList
