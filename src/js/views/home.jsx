import React from 'react'
import { AllContacts } from "../component/allContacts.jsx";
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div className="Container-fluid">
      <div className="container-fluid d-flex justify-content-end">
        <Link to="/newContact">
          <button className="btn btn-success mt-3">Add new Contact</button>
        </Link>
      </div>
      <AllContacts />
    </div>
  )
}

