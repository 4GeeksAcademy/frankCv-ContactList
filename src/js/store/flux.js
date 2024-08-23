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
			idToEdit: ''
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
			createContact: (name, phone, email, address) => {

				const URL = 'https://playground.4geeks.com/contact/agendas/michell/contacts';
				fetch(
					URL, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: {
						"name": name,
						"phone": phone,
						"email": email,
						"address": address
					}
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
				const allContacts = getStore().contacts.map((e) => e.id === getStore().idToEdit ? body : e);


				const URL = `https://playground.4geeks.com/contact/agendas/frankCv/contacts/${getStore().idToEdit}`;
				fetch(
					URL, {
					method: "UPDATE",
					headers: {
						"Content-Type": "application/json",
					},
					body: {
						"name": `${body.name}`,
						"phone": `${body.phone}`,
						"email": `${body.email}`,
						"address": `${body.address}`,
					}
				})
					.then((response) => {
						if (response.status === 200) {
							console.log(response)
							return response.json()
						}
					})
					.then((data) => {
						setStore(...getStore(), { contacts: allContacts })
						setStore(...getStore(), { idToEdit: '' })
					})
					.catch((error) => console.log(error))

			},
			setIsEdit: (id) => {				
				setStore({ ...getStore(), idToEdit: id })
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
