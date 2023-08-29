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

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}
