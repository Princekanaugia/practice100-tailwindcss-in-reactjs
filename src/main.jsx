import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, RouterProvider
} from 'react-router-dom'

//CSS
import './index.css'

//pages
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ProjectList from './pages/ProjectList.jsx'
import About from './pages/About.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/projectlist' element={<ProjectList />} />
      <Route path='/about' element={<About />} />
    </Route>

  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
