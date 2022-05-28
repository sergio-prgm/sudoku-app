import Rules from '@/components/Rules/Rules'
import Launcher from '@/components/Launcher/Launcher'
import './Home.scss'

export default function Home () {
  return (
    <main>
      {/* <h1>Welcome to Sudoku-app</h1> */}
      <section className='launcher'>
        <h2>play random sudoku</h2>
        <Launcher>Easy</Launcher>
        <Launcher>Medium</Launcher>
        <Launcher>Hard</Launcher>
      </section>
      <section className='rules'>
        <Rules />
      </section>
      <section className='collections'>
        <h2>Browse sudoku collection</h2>
      </section>
    </main>
  )
}
