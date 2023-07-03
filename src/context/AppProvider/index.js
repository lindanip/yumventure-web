import React, { useState, useEffect } from 'react'
import {  API, graphqlOperation } from 'aws-amplify'
import { listRecipes } from '../../graphql/queries'

export const AppContext = React.createContext({})

function AppProvider({ children }) {
  const [recipes, setRecipes] = useState([])

  async function fetchRecipes() {
    try {
      const data = await API.graphql(graphqlOperation(listRecipes))
      console.log("data", data)
      const allRecipes = data.data.listRecipes.items
      setRecipes(allRecipes)
    } catch (err) { console.log('error fetching todos') }
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  return (
    <AppContext.Provider
      value={{
        recipes,
        setRecipes
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider