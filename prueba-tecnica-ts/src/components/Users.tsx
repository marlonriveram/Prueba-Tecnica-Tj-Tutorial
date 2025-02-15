import { type User } from "../types"
import '../App.css'

interface Props {
    users: User[],
    // onDeleted: () => void,
    showColors:boolean
}
function UserList({ users,showColors}: Props) {
    return (
        <table style={{width:'100%'}}>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>País</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {
                 
                    users.map((user,index) => {
                        const backgroundColor = index %2 === 0 ? '#333': '#555'// poner efecto cebra
                        const color = showColors ? backgroundColor : 'transparent'
                        const colorLetra = showColors ? 'white' : 'black'

                        return (
                            <tr key={index} style={{background:color}}>
                                <td><img src={user.picture.thumbnail} /></td>
                                <td style={{color:colorLetra}}>{user.name.first}</td>
                                <td style={{color:colorLetra}}>{user.name.last}</td>
                                <td style={{color:colorLetra}}>{user.location.country}</td>
                                <td>
                                    <button
                                       onClick={() => {}}
                                    >
                                        Borrar
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}


export { UserList }
/*
    Para crear una tabla con html se necesitan estas etiquetas

    table,thead,tbody <-- son la estructura de la tabla 

    th <-- celda de head de la tabla
    tr <-- fila de la tabla
    td <-- celde de la tabla
*/

