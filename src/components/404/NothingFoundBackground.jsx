import { Container, Title, Text, Group } from '@mantine/core'
import { Link } from 'react-router-dom'
import { Illustration } from './Illustration'
import classes from './NothingFoundBackground.module.css'

export function NothingFoundBackground() {
  return (
    <div className={classes.nothingFoundBackgroundWrapper}>
      <Container className={classes.root}>
        <div className={classes.inner}>
          <Illustration className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>Nothing to see here</Title>
            <Text
              c="dimmed"
              size="lg"
              ta="center"
              className={classes.description}
            >
              Page you are trying to open does not exist. You may have mistyped
              the address, or the page has been moved to another URL. If you
              think this is an error contact support.
            </Text>
            <Group justify="center">
              <Link className={classes.btn} to="/">
                Take me back to home page
              </Link>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  )
}
