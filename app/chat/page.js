"use client"
import { useState, useEffect } from "react";
import { useUserContext } from "../user";

export default function Chat() {
    const [msgContent, setMsgContent] = useState("");
    const { currentUser } = useUserContext();

    const handleSendMessage = (e) => {
        e.preventDefault();
    };

    return (
        <main >
            Hi {currentUser}! Start typing below to chat!

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
