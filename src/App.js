import logo from './logo.svg'
import './App.css'
import Paper from '@mui/material/Paper'
import TopBar from './Components/TopBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import League from './Pages/League'

const Main = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    React
  </header>
)

function App() {
  return (
    <Router>
      <Paper className="App">
        <TopBar />
      </Paper>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/lol" element={<League />} />
      </Routes>
    </Router>
  )
}

export default App
