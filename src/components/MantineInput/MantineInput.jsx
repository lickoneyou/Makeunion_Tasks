import { Input } from '@mantine/core'
import { useDispatch } from 'react-redux'
import ShortUniqueId from 'short-unique-id'
import setLocalStorageData from '../../handlers/setLocalStorageData'
import styles from './MantineInput.module.css'

function MantineInput() {
  const dispatch = useDispatch('')
  const uid = new ShortUniqueId({ length: 10 })

  return (
    <div className={styles.inputWrapper}>
      <Input
        size="md"
        placeholder="Your todo"
        variant="filled"
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            if (!e.target.value) {
              alert('Please add text to your to-do list')
              return
            }
            setLocalStorageData(e.target.value, uid.rnd())
            // setLocalStorageData(id)
            dispatch({ type: 'UPDATE' })
            e.target.value = ''
          }
        }}
      />
    </div>
  )
}

export default MantineInput
