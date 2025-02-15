import { useEffect, useState } from "react"
import { UserList } from "./components/Users"
import './App.css'
import { User } from "./types"


function App() {

  const [users,setUsers] = useState<User[]>([])
  const [showColors,setShowColors] = useState<boolean>(false)
  const [sortByCountry,setSortByCountry] = useState<boolean>(false)

  const toggelColors = () =>{  //Funcion para invertir los colors
    setShowColors(!showColors)
    console.log(showColors)
  }

  const toggleSortByCountry = () =>{
    setSortByCountry(prev => !prev)
  }



  useEffect(()=>{
    fetch('https://randomuser.me/api?results=100')
    .then(res => res.json())
    .then( res => setUsers(res.results))
    .catch(err =>{
      console.error(err)
    })
  },[])
    // como sort midifica el array original, se trabaja con una copia del array original  [...users]
    const sortedUsers = sortByCountry ? [...users].sort((a,b) =>{ // es una opcion valida
        return a.location.country.localeCompare(b.location.country)
    }):users

  return (
      <div className="App">
       <h1>Prueba Técnica</h1>

       <header>
          <button onClick={toggelColors}>
            Color files
          </button>

          <button onClick={toggleSortByCountry}>
            {
              sortByCountry ? 'No ordenar por país':'ordenar por país'
            }
          </button>

          
       </header>

       <main>

       <UserList 
        users={sortedUsers}
        showColors = {showColors}
        // onDeleted={() => {}}
       />
       </main>
      </div>
  )
}

export default App
