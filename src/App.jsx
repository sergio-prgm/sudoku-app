import './App.css'
import SudokuPage from './pages/SudokuPage/SudokuPage'
import { SudokuContextProvider } from './context/SudokuContext'

function App () {
  return (
    <div className="App">
      <SudokuContextProvider >
        <SudokuPage />
      </SudokuContextProvider>
    </div>
  )
}

export default App
