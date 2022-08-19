// import "./style.css";
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import image from './b.jpg'
import svg from './car.svg'
import NotFound from './components/404'
import About from './components/About'

import { Counter } from './Counter'

const Home = lazy(() => import('./components/Home'))

export const App = () => {
  const testVar = 'uihuihui'
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback="loading">
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback="loading">
            <About />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
