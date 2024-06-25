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
            setLocalStorageData(e.target.value)
            e.target.value = ''
          }
        }}
      />
    </div>
  )
}

export default MantineInput
