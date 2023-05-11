import React, { useState } from 'react'

const addMinutes=(date: Date, minutes: number) =>{
  return new Date(date.getTime()+ minutes * 60000)
}

function Clock() {

  const [time, setTime] = useState(new Date());

  const handleClick = () => {
    setTime(addMinutes(time,10));
  }
  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
      <button onClick={handleClick}>+10 min</button>
      
    </div>
  )
}

export default Clock
