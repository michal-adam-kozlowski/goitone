import { useRef, useState, useEffect, forwardRef, useMemo } from 'react';
import './App.css';
import { Player } from './components';
// import { UserMenu } from './components';
// import {  UserProvider } from './services';

// export const MyContext = createContext(DEFAULT_VALUE)
// export const ToastContext = createContext()

// export const useMyContext = () => useContext(MyContext)

const CustomButton = forwardRef((props, ref) => 
(<button ref={ref}>{props.children}</button>))


function App() {
  const btnRef = useRef()
  const [planets, setPlanets] = useState(["Mars", "Jupiter", "Venus"])
  const [query, setQuery] = useState("")
  const [clicks, setClicks] = useState(0)

  const filteredPlanets = useMemo(
    () => planets.filter(planet => {
      console.log(planet)
      
      return planet.includes(query)
    }),
    [planets, query]
  ) 

  // useEffect(() => btnRef.current.focus(), [])
  // const [value, setValue] = useState(0)
  // const valueRef = useRef(0)

  // console.log("myRef : ", btnRef.current)

  // useEffect(() => {
  //   console.log("my ref on mount: ", valueRef.current)
  // })

  // const handleClick = () => {
  //   valueRef.current += 1
  // }

  // console.log(valueRef.current)

  // const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]) 

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>Number of clicks: {clicks}</button>
      {
        filteredPlanets.map(planet => (
          <div key={planet}>{planet}</div>
        ))
      }

    {/* <CustomButton ref={btnRef}>Button with custom forwarded ref</CustomButton> */}

      {/* <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" /> */}
    
      {/* <button onClick={handleClick}>Click to update ref value</button> */}
    </div>
    // <UserProvider>
    //   <UserMenu/>
    // </UserProvider>
  );
}

export default App;
