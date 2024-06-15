import React, { useState} from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

const UserModal = (props) => {

  const [form, setForm] = useState({});
  const {open,toggle,user} = props

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!user.id){
      axios.post("http://localhost:3000/users",form).then(res=>{
      if(res.status === 201){
        window.location.reload()
      }
    })
    }else{
      const payload = {
        name: form.name ? form.name : user.name,
        email: form.email ? form.email : user.email,
        number: form.number ? form.number : user.number
      }
      axios.put(`http://localhost:3000/users/${user.id}`,payload).then(res=>{
        if(res.status === 200){
          window.location.reload()
      }
      })
    }
  };

  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h2>Add User</h2>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit} id="user-form">
          <FormGroup>
            <Input
              type="text"
              name="name"
              id="name"
              defaultValue={user.name}
              value={form.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="form-control my-2"
            />
          </FormGroup>
          <FormGroup>
            <Input
            defaultValue={user.email}
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="form-control my-2"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="tel"
              name="number"
              id="phone"
              defaultValue={user.number}
              value={form.number}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="form-control my-2"
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        <Button
          color="success"
          type="submit"
          form="user-form"
        >
          Add User
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
