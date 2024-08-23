import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const InputData = () => {
    const { store, actions } = useContext(Context);
    const [form, setForm] = useState({});
    //const contacts = [...store.contacts.map((ele) => ele.id === store.idToEdit ? ele : `none`)]
    // const { address, email, id, name, phone } = [...store.contacts.filter((ele) => ele.id === parseInt(store.idToEdit))]
    //expected = store.contacts.filter((ele) => parseInt(ele.id) === parseInt(store.idToEdit))

    const expected = { ...store.contacts.find((ele) => parseInt(ele.id) === parseInt(store.idToEdit)) }

    const { ['name']: name, ['phone']: phone, ['email']: email, ['address']: address } = expected;
    console.log(name)
    console.log(store.idToEdit)
    const onChangeHandlerInput = (e) => {
        console.log(form)
        let val = e.target.value
        let key = e.target.name
        setForm({ ...form, [key]: { val } })
    }

    if (store.idToEdit === "") {
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
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="container-fluid p-0">
                    <button className="btn btn-primary w-100">Send</button>
                </div>
            </div>)
    }
    else {
        return (
            <div className="mt-3">
                <div className="form-floating mb-3">
                    <input type="text" name="name" className="form-control" id="fullName" placeholder="Full Name" onChange={(e) => { onChangeHandlerInput(e) }} />
                    <label htmlFor="fullName">{name}</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" name="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => { onChangeHandlerInput(e) }} />
                    <label >{email}</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="phone" className="form-control" id="phone" placeholder="Enter phone" onChange={(e) => { onChangeHandlerInput(e) }} />
                    <label >{phone}</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="address" className="form-control" id="address" placeholder="Enter address" onChange={(e) => { onChangeHandlerInput(e) }} />
                    <label >{address}</label>
                </div>
                <div className="container-fluid p-0">
                    <button className="btn btn-primary w-100" onClick={() => actions.updateContact(form)}>Save</button>
                </div>
            </div>)
    }



}