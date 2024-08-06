// here all the helper functions
import { notifications } from '@mantine/notifications';

export const showNotification = () => {
        notifications.show({
          title: 'Reminder',
          message: 'Please login to continue shopping! 🌟',
        })
  }