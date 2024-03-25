import './App.css'
import NavBar from './components/navBar/NavBar.jsx'
import Home from './pages/Home/Home.jsx'
import ListedBooks from './pages/ListedBooks/ListedBooks.jsx'
import PagesToRead from './pages/PagesToRead/PagesToRead.jsx'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <ListedBooks></ListedBooks>
      <PagesToRead></PagesToRead>
    </>
  )
}

export default App
