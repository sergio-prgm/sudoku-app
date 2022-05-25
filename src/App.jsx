import { Route, Switch } from 'wouter'
import './App.css'

import SudokuPage from '@/pages/SudokuPage/SudokuPage'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import Register from '@/pages/Register/Register'
import NotFound from '@/pages/NotFound/NotFound'
import Header from '@/components/Header/Header'

function App () {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={Home} path='/' />
        <Route component={Register} path='/register' />
        <Route component={Login} path='/login' />
          <Route component={SudokuPage} path='/sudoku/:dif/:index' />
        <Route component={NotFound} path='/:rest' />
      </Switch>
    </div>
  )
}

export default App
