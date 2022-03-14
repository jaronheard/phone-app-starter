import { Store as PullStateStore } from 'pullstate';

import { homeItems, notifications } from '../mock';

const Store = new PullStateStore({
  safeAreaTop: 0,
  safeAreaBottom: 0,
  menuOpen: false,
  notificationsOpen: false,
  currentPage: null,
  homeItems,
  notifications,
  settings: {
    enableNotifications: true,
    notificationFrequency: 'daily',
  },
});

export default Store;
