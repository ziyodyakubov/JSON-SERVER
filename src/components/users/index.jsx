import axios from "axios"
import { useEffect,useState } from "react"

const Index = () => {
const [users,setUsers] = useState([])

useEffect(()=>{
    axios.get("http://localhost:3000/users").then(res=>{
        if(res.status === 200){
            setUsers(res.data)
        }
    })
},[])

console.log("yaaa",users)

  return (
    <div className="container">
      <h2 className="text-center my-3 font-weight-bold">Users</h2>

      <table className="table table-striped table-bordered my-3 p-4">
        <thead className="">
            <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((item,index)=>(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.number}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default Index
