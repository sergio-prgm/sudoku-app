import Rules from '@/components/Rules/Rules'
import Launcher from '@/components/Launcher/Launcher'

export default function Home () {
  return (
    <>
    <h1>Welcome to Sduoku-app</h1>
    <section>
      <h2>play random sudoku</h2>
      <Launcher>Easy</Launcher>
      <Launcher>Medium</Launcher>
      <Launcher>Hard</Launcher>
    </section>
    <section>
      <Rules />
    </section>
    <section>
      <h2>Browse sudoku collection</h2>
    </section>
    </>
  )
}
