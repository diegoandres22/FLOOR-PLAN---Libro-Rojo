export interface NavBarProps {
  isAdmin: boolean;
  locationLabel: string;
  userLabel: string;
}
interface NotificationItem {
  key: number;
  label: string;
  description: string;
  fecha: string;
  isRead: boolean;
}
export interface NotificationsProps {
  items: NotificationItem[];
}