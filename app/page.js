"use client"
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { useUserContext } from './user';

export default function Home() {
  const { setCurrentUser } = useUserContext();
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentUser(username);
    router.push(`/chat`);
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input className={styles.input}
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type='submit' className={styles.button}>Submit</button>
        </form>
      </div>
    </main>
  )
}
