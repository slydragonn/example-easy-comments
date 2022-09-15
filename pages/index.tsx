import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { CommentsWithCurrentUser, CommentsWithoutCurrentUser, ToggleTheme } from '../components'

const Home: NextPage = () => {
  const [theme, setTheme] = useState(false)

  const toggleTheme = () => {
    setTheme(status => !status)
  }

  return (
    <div style={{background: theme ? '#fff' : '#161616'}}>
      <Head>
        <title>Easy Comments - Example</title>
        <meta name="description" content="Easy Comments Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 style={{color: theme ? '#000' : '#fff'}}>Easy Comments - Example</h1>
        <ToggleTheme state={theme} func={toggleTheme}/>
      <section className='commentsSections'>
        <div>
          <h3 style={{color: theme ? '#000' : '#fff'}}>Comments With Current User</h3>
          <CommentsWithCurrentUser theme={theme ? 'default' : 'dark'}/>
        </div>
        <hr />
        <div>
          <h3 style={{color: theme ? '#000' : '#fff'}}>Comments Without Current User</h3>
          <CommentsWithoutCurrentUser theme={theme ? 'default' : 'dark'}/>
        </div>
      </section>
    </div>
  )
}

export default Home
