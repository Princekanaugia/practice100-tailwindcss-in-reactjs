import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, RouterProvider
} from 'react-router-dom'

//CSS
import './index.css'

//component
import ProjectComponentLoader from './components/ProjectComponentLoader.jsx'

//pages
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ProjectList from './pages/ProjectList.jsx'
import About from './pages/About.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='projectlist' element={<ProjectList />} >
        <Route path='projectlist/:projectid' element={<ProjectComponentLoader />} />
      </Route>
    </Route>

  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
