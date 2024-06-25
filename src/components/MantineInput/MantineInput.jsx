import { Input } from '@mantine/core'
import setLocalStorageData from '../../handlers/setLocalStorageData'
import styles from './MantineInput.module.css'

function MantineInput() {
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
            setLocalStorageData(e.target.value)
            e.target.value = ''
          }
        }}
      />
    </div>
  )
}

export default MantineInput
