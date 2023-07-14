import React, { createContext, useEffect, useState } from 'react'
import FetchCoffee from './Api'

export const AllCoffees = createContext()


export const Context = ({ children }) => {

  const [totalCoffees, setTotalCoffees] = useState([])

  useEffect(() => {
    FetchCoffee().then(data =>  setTotalCoffees(data))

  }, [])
  
  return (
    <AllCoffees.Provider value={{ totalCoffees }}>
      {children}
    </AllCoffees.Provider>
  )
}
