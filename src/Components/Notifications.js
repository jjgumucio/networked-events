import React from 'react'
import { notification } from "antd"

function Notifications(props) {

    const { type, title, body } = props

    return (
        notification[type]({ message: title, description: body })
    )
}

export default Notifications
