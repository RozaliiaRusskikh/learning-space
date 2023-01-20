import React from "react";
import './index.css'

const Message = ({ message }) => {
    const messages = {
        saved: "Post has been saved!",
        deleted: "Post has been deleted!",
        updated: "Post has been updated!"
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