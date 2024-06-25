import { Input } from '@mantine/core'
import styles from './MantineInput.module.css'

function MantineInput() {
  return (
    <div className={styles.inputWrapper}>
      <Input size="md" placeholder="Your todo" variant="filled" />
    </div>
  )
}

export default MantineInput
