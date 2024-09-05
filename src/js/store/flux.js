const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
			contactToEdit: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getContact: () => {
				const URL = 'https://playground.4geeks.com/contact/agendas/frankCv/contacts';
				fetch(
					URL, {
					method: "GET"
				}
				)
					.then((response) => {
						if (response.status === 200) {
							return response.json()
						}
					})
					.then((data) => {
						setStore({ contacts: data.contacts });
					})
					.catch((error) => console.log(error))
			},
			createContact: (form) => {

				const URL = 'https://playground.4geeks.com/contact/agendas/frankCv/contacts';
				fetch(
					URL, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"name": form.name,
						"phone": form.phone,
						"email": form.email,
						"address": form.address
					})
				})
					.then((response) => {
						if (response.status === 201) {
							console.log(response)
							return response.json()
						}
					})
					.then((data) => {
						setStore(...[getStore().contacts], data)
					})
					.catch((error) => console.log(error))
			},
			updateContact: (body) => {				
				const URL = `https://playground.4geeks.com/contact/agendas/frankCv/contacts/${getStore().contactToEdit[0]?.id}`;
				fetch(
					URL, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"name": body.name,
						"phone": body.phone,
						"email": body.email,
						"address": body.address,
					})
				})
					.then((response) => {
						console.log(response.status)
						// if (response.status === 200) {
						// 	console.log(response.status)
						// 	setStore({ ...getStore(), contacts: allContacts })
						// 	setStore({ ...getStore(), contactToEdit: [] })
						// 	return response.json()
						// }
					})
					.catch((error) => console.log(error))

			},
			onDeleteHandler: (id) => {
				const auxList = getStore().contacts?.filter(e => e.id !== parseInt(id))
				setStore({ ...getStore(), contacts: auxList })
				console.log("https://playground.4geeks.com/contact/agendas/frankCv/contacts/"+id)
				const resp = fetch("https://playground.4geeks.com/contact/agendas/frankCv/contacts/" + id, {
					method: 'DELETE',
					headers: {
						"Content-Type": "application/json"
					},
				})
				if (resp.status === 200) { return console.log('deleted') }

			},
			setContactToEdit: (id) => {
				setStore({ ...getStore(), contactToEdit: getStore().contacts?.filter(e => e.id === parseInt(id)) })
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
