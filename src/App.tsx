
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TasksPage from './pages/TasksPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<TasksPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
