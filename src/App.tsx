// import "./style.css";
import { createContext, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import image from './b.jpg'
import svg from './car.svg'
import NotFound from './components/404'
import About from './components/About'
import Persons, { hairStyle } from './components/Persons'

import { Counter } from './Counter'

interface IAppContext {
  name: string
  age: number
}

const Home = lazy(() => import('./components/Home'))
const AppContext = createContext<IAppContext | null>(null)
export const App = () => {
  const values: IAppContext = {
    age: 12,
    name: 'ajith',
  }
  // const name: string = 'Ajith'
  // const age: number = 25

  // const getAge = (name: string): number => {
  //   if (name === 'ajith') {
  //     return 20
  //   } else {
  //     return 0
  //   }
  // }
  return (
    <>
      <AppContext.Provider value={values}>
        <Persons
          hairColor={hairStyle.Black}
          age={25}
          name="Ajith"
          email="aji@sds.com"
          favColor="Red"
        />
      </AppContext.Provider>
    </>
  )
}
