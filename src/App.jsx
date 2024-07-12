import { Outlet } from 'react-router-dom'
import './App.css'

//components
import Header from './components/Header'
import Footer from './components/Footer'

//pages

function App() {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}
 
export default App
