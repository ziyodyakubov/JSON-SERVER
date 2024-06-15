import axios from "axios";
import UserModal from "../modal";
import { useEffect, useState } from "react";

const Index = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [search,SearchUser] = useState("")
  const [user,setUser] = useState({})
  const [userToEdit, setUserToEdit] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      if (res.status === 200) {
        setUsers(res.data);
      }
    });
  }, []);

  const handleEdit = (user) => {
    setUser(user)
    setModal(true)
    // axios.delete(`http://localhost:3000/users/${user}`)
  };

  const handleDelete = (id) =>{
    axios.delete(`http://localhost:3000/users/${id}`).then(res=>{
      if(res.status === 200){
        window.location.reload()
      }
    })
  }

  const toggle = () =>{
    setUser({})
    setModal(false)
  }

  return (
    <>
      <UserModal 
        open={modal} 
        toggle={toggle}
        user={user}
      />
      <div className="container">
        <h2 className="text-center my-3 font-weight-bold">Users</h2>
        <button className="btn btn-success my-3" onClick={() => setModal(true)}>ADD USER</button>
        <table className="table table-striped table-bordered my-3 p-4">
          <thead className="">
            <tr>
              <th>T/R</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
                <td>
                  <button className="btn btn-warning mx-1" onClick={() => handleEdit(item)}><box-icon name='edit-alt'></box-icon></button>
                  <button className="btn btn-primary mx-1"><box-icon name='show-alt' ></box-icon></button>
                  <button className="btn btn-danger mx-1" onClick={() => handleDelete(item.id)}><box-icon name='trash' ></box-icon></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Index;
