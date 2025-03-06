import {useState } from 'react';

const HomePage = () => {
    const [name, setName ] = useState('frank')
    const [age, setAge ] = useState(20)


  const handleClick = () => {
     setName('lolo')
      setAge(10)
    }

   

  return (
    <div className='HomePage'>
      <h1>HomePage</h1>
      <h2>{name} is {age} years old and counting</h2>
      <button onClick={handleClick}>click me</button>
      
    </div>
  )
}

export default HomePage
