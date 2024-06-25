import { Avatar, Text, Group } from '@mantine/core'
import { IconPhoneCall, IconAt } from '@tabler/icons-react'
import classes from './UserInfoIcons.module.css'
import { Link } from "react-router-dom";

export function UserInfoIcons({ avatar, nickName, name, email, phone, id }) {
  return (
    <div className={classes.userWrapper}>
      <Group wrap="nowrap">
        <Avatar src={avatar} size={94} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {nickName}
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
           <Link to={String(id)}>{name}</Link>
          </Text>
          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {email}
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              {phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  )
}
