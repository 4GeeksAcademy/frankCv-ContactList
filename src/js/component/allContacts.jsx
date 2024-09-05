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
    const onDeleteClickHandler = (e) => {
        actions.onDeleteHandler(e.target.getAttribute("name"))
    }
    const onEditClickHandler = (e) => {
        const id = e.target.getAttribute("name")
        actions.setContactToEdit(id)
        navigate('/newContact')
    }
    return (
        store?.contacts.length === 0 ? <div className="container-fluid d-flex justify-content-center">THERE ISN'T ANY CONTACT, ADD SOME CONTACTCS</div> :
            <div className="container text-center mt-5" style={{ minWidth: "20%", width: "50vw" }}>
                {store.contacts.map((e, index) => <Contact onEditClickHandler={(e) => onEditClickHandler(e)} onDeleteClickHandler={(e) => onDeleteClickHandler(e)} key={index} id={e.id} name={e.name} address={e.address} phone={e.phone} email={e.email} />)}
            </div>

    )
}
