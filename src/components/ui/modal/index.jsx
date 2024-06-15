import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Button } from '@mui/material';
import { nanoid } from 'nanoid';

const UserModal = ({ toggle, open, users, setUsers, userToEdit }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (userToEdit) {
      setForm(userToEdit);
    }
  }, [userToEdit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      const updatedUsers = users.map((item) => 
        item.id === form.id ? { ...item, ...form } : item
      );
      setUsers(updatedUsers);
    } else {
      const newUser = { ...form, id: nanoid() };
      setUsers([...users, newUser]);
    }
    toggle();
  };

  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h3>{form.id ? "Edit User" : "Add User"}</h3>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="user-form">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="form-control my-2"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="form-control my-2"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="form-control my-2"
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <Button
          variant="outlined"
          type="submit"
          form="user-form"
          className="btn btn-primary"
        >
          {form.id ? "Update User" : "Add User"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
