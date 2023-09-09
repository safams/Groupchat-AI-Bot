"use client"
import { useState } from "react";

export default function Chat() {
    const [msgContent, setMsgContent] = useState("");


    const handleSendMessage = (e) => {
        e.preventDefault();
    }

    return (
        <main >
            Hi! Start typing below to chat!
            <form onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder='Your message'
                    value={msgContent}
                    onChange={(e) => setMsgContent(e.target.value)}
                />
                <button type='submit'>Send</button>

            </form>
        </main>
    );
}
