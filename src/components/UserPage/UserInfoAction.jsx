import { Avatar, Text, Paper } from '@mantine/core'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getAvatar from '../../handlers/getAvatar'
import { NothingFoundBackground } from '../404/NothingFoundBackground'
import styles from './UserInfoAction.module.css'

export function UserInfoAction() {
  const [user, setUser] = useState({})
  const id = window.location.pathname

  useEffect(() => {
    const getUser = async () => {
      const url = `https://jsonplaceholder.typicode.com/users${id}`
      const res = await fetch(url)
      const data = await res.json()
      if (data.id) {
        setUser(data)
        return
      }
      setUser(null)
    }
    getUser()
  }, [])

  return (
    <div className={styles.userInfoWrapper}>
      {user ? (
        <>
          <Link className={styles.btn} to="/">
            Back
          </Link>
          <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
            <Avatar
              src={getAvatar(id)}
              size={120}
              radius={120}
              mx="auto"
            />
            <Text ta="center" fz="lg" fw={500} mt="md">
              {user.name} ({user.username})
            </Text>
            <Text ta="center" c="dimmed" fz="sm">
              {user.email}
            </Text>
            <Text ta="center" c="dimmed" fz="sm">
              {user.phone}
            </Text>
            <Text ta="center" c="dimmed" fz="sm">
              {user.website}
            </Text>
          </Paper>
        </>
      ) : (
        <NothingFoundBackground />
      )}
    </div>
  )
}
