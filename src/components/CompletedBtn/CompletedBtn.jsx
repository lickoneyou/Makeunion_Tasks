import React from 'react'
import { useDispatch } from 'react-redux'
import completedTodo from '../../handlers/completedTodo'
import styles from './CompletedBtn.module.css'

const CompletedBtn = ({ id, completed }) => {
  const dispatch = useDispatch()

  return (
    <img
      className={styles.completedBtn}
      src={completed ? './img/completedGreen.png' : './img/completedDark.png'}
      alt="completed btn"
      onClick={() => {
        completedTodo(id)
        dispatch({ type: 'UPDATE' })
      }}
    />
  )
}

export default CompletedBtn
