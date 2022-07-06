import Rules from '@/components/Rules/Rules'
import Tutorial from '@/components/Tutorial/Tutorial'
import Launcher from '@/components/Launcher/Launcher'
import './Home.scss'
import SudokuList from '@/components/SudokuList/SudokuList'
import { useEffect, useContext, useState } from 'react'
import Context from '@/context/UserContext'
import getUserInfo from '@/services/getUserInfo'
import Toggle from '@/components/Toggle/Toggle'

export default function Home () {
  const { savedSudokus, setSavedSudokus, jwt } = useContext(Context)

  useEffect(() => {
    if (!jwt) return
    getUserInfo({ token: jwt.jwt }).then(setSavedSudokus)
  }, [])

  return (
    <main>
      <section className='launcher'>
        <h2>Play random sudoku</h2>
        <Launcher>Easy</Launcher>
        <Launcher>Medium</Launcher>
        <Launcher>Hard</Launcher>
      </section>
      {
        jwt &&
          <section className='user-sudokus'>
            <Toggle title='My sudokus' home={true} >
              {
                savedSudokus[0] &&
                <>
                <h3>In process</h3>
                  <SudokuList list={savedSudokus
                    .filter(sudoku => !sudoku.state.isSolved)} />
                <h3>Finished</h3>
                  <SudokuList list={savedSudokus
                    .filter(sudoku => sudoku.state.isSolved)} />
                </>
              }</Toggle>
          </section>
      }
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
