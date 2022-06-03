import { useContext, useEffect } from 'react'
import Rules from '@/components/Rules/Rules'
import Tutorial from '@/components/Tutorial/Tutorial'
import Launcher from '@/components/Launcher/Launcher'
import './Home.scss'
import Context from '@/context/UserContext'

export default function Home () {
  const { savedSudokus } = useContext(Context)

  useEffect(() => {
    if (!savedSudokus[0]) return console.log('nothing saved (yet)')
    console.log(savedSudokus)
  }, [savedSudokus])

  return (
    <main>
      {/* <h1>Welcome to Sudoku-app</h1> */}
      <section className='launcher'>
        <h2>Play random sudoku</h2>
        <Launcher>Easy</Launcher>
        <Launcher>Medium</Launcher>
        <Launcher>Hard</Launcher>
      </section>
      <section className='rules'>
        <article>
          <header>
            <h2>The rules of Sudoku</h2>
          </header>
          <Rules />
        </article>
        <article>
          <header>
            <h2>How to play</h2>
          </header>
          <Tutorial />
        </article>
      </section>
      <section className='collections'>
        <h2>Browse sudoku collection</h2>

      </section>
    </main>
  )
}
