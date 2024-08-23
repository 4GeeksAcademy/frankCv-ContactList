import React, { useEffect } from "react"
import { useContext } from "react"
import { Context } from "../store/appContext.js"
import { Contact } from "./contact.jsx"
import { useNavigate } from "react-router-dom"

export const AllContacts = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        actions.getContact()
    }, [])
    const onEditClickHandler = (e) => {
        navigate('/newContact')
        let id = e.target.parentNode.parentNode.id
        console.log(id)
        actions.setIsEdit(id)
    }
    return (
        <div className="container text-center mt-5" style={{ minWidth: "20%", width: "50vw" }}>
            {store.contacts.map((e, index) => <Contact key={index} id={e.id} name={e.name} address={e.address} phone={e.phone} email={e.email} onEditClickHandler={(e) => onEditClickHandler(e)} />)}
        </div>

    )
}
