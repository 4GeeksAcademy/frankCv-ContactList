import React, { useContext } from "react"
import { InputData } from "../component/inputData.jsx"
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext.js";

export const NewContact = () => {
    const navigate = useNavigate();
    const { store } = useContext(Context);


    return (
        <div className="container-fluid justify-content-center px-5 mt-5">
            <h1 className="text-center mb-3"> {store.contactToEdit === '' ? 'Add a contact' : 'Update Contact Info'} </h1>
            <InputData />
            <div className="=container w-100" >
                <button className="btn btn-primary border border-0 bg-transparent text-primary text-decoration-underline " onClick={() => navigate('/home')}>or get back to contacts</button>
            </div>
        </div>
    )
}