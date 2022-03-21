import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
export type NotificationsProps = {}

export const Notifications: React.FC<NotificationsProps> = () => {
    return (
        <div>
            <IoMdNotificationsOutline size="20" />
        </div>
    )
}
