"use client"
import { useState, useEffect } from "react";
import { useUserContext } from "../user";
import styles from "./page.module.css"

export default function Chat() {
    const [msgContent, setMsgContent] = useState("");
    const { currentUser } = useUserContext();
    const [texts, setTexts] = useState([])
    const url = "https://chatting-app.safams.repl.co/chats"

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setTexts(data))
            .catch((error) => console.log(error));
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();

        const newMessage = {
            username: currentUser,
            message: msgContent
        }

        fetch("https://chatting-app.safams.repl.co/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMessage),
        })
            .then(() => {
                setMsgContent("");
                return fetch(url);
            })
            .then((response) => response.json())
            .then((data) => setTexts(data))
            .catch((error) => console.log(error));
    };

    return (
        <main className={styles.main}>

            <h1>
                Hi {currentUser}! Start typing below to chat!
            </h1>

            <div className={styles.container}>

                {texts.map((message, index) => (
                    <div key={index} className={message.username === currentUser ? styles.blue_bubble : styles.white_bubble}>
                        <span>{message.message} - </span>
                        <span>{message.username}</span>
                    </div>
                ))}

                <form onSubmit={handleSendMessage} className={styles.form}>
                    <input className={styles.input}
                        type="text"
                        placeholder='Your message'
                        value={msgContent}
                        onChange={(e) => setMsgContent(e.target.value)}
                    />
                    <button type='submit' className={styles.button}>Send</button>
                </form>
            </div>
        </main>
    );
}
