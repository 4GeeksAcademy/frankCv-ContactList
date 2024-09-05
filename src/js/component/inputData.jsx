import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const InputData = () => {
    const { store, actions } = useContext(Context);
    const [form, setForm] = useState({});
    useEffect(() => {
        console.log(store.contactToEdit)
    }, [])
    const onChangeHandlerInput = (e) => {
        let val = e.target.value
        let key = e.target.name
        setForm({ ...form, [key]: val })
    }

    if (store.contactToEdit?.length === 0) {
        return (
            <div className="mt-3">
                <div className="form-floating mb-3">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Full Name" onChange={(e) => { onChangeHandlerInput(e) }} />
                    <label htmlFor="name">Full Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => { onChangeHandlerInput(e) }} />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="phone" className="form-control" id="phone" placeholder="Enter phone" onChange={(e) => { onChangeHandlerInput(e) }} />
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="address" className="form-control" id="address" placeholder="Enter address" onChange={(e) => onChangeHandlerInput(e)} />
                    <label htmlFor="address">Address</label>
                </div>
                <div className="container-fluid p-0">
                    <button className="btn btn-primary w-100" onClick={() => actions.createContact(form)}>Send</button>
                </div>
            </div>)
    }
    else {
        return (
            <div className="mt-3">
                <div className="form-floating mb-3">
                    <input defaultValue={store.contactToEdit[0].name} type="text" name="name" className="form-control" id="fullName" placeholder="Full Name" onChange={(e) => { onChangeHandlerInput(e) }} />
                    <label htmlFor="fullName">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input defaultValue={store.contactToEdit[0].email} type="email" name="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => { onChangeHandlerInput(e) }} />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input defaultValue={store.contactToEdit[0].phone} type="text" name="phone" className="form-control" id="phone" placeholder="Enter phone" onChange={(e) => { onChangeHandlerInput(e) }} />
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="form-floating mb-3">
                    <input defaultValue={store.contactToEdit[0].address} type="text" name="address" className="form-control" id="address" placeholder="Enter address" onChange={(e) => { onChangeHandlerInput(e) }} />
                    <label htmlFor="address">Address</label>
                </div>
                <div className="container-fluid p-0">
                    <button className="btn btn-primary w-100" onClick={
                        () => {
                            
                            actions.updateContact(form);
                        }
                    }>Save</button>
                </div>
            </div>)
    }



}