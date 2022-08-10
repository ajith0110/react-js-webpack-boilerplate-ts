// import "./style.css";
import image from './b.jpg'
import svg from './car.svg'
import { Counter } from './Counter'

export const App = () => {
  const hello = 'ijij'
  return (
    <>
      <div>React TS Webpack v1.01</div>
      <img src={image} alt="ji" />
      <p>hi</p>
      <img src={svg} alt="ji" />
      <Counter />
    </>
  )
}
