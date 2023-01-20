import React from "react";
import './index.css'

const Message = ({ message, item }) => {
    const messages = {
        saved: `${item} has been saved!`,
        deleted: `${item} has been deleted!`,
        updated: `${item} has been updated!`
    }

    return (
        <div className="app-message">
            <div className={`app-message-${message}`}>
                <strong>{messages[message]}</strong>
            </div>
        </div>
    )
}
export default Message;