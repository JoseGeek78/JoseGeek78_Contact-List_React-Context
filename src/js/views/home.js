import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const location = useLocation();

	const { contacts } = store;

	useEffect(() => {
		actions.fetchContacts(); 
	}, [location.pathname]); 
	
	const editContact = (contact) => {
		actions.setContactForUpdate(contact);
		navigate("/new-contact");
	};

	const handleDelete = (contactId) => {
		actions.deleteContact(contactId);
	};

	return (
		<div className="text-center mt-2">	{contacts.map((contact) => {
			return (

				<span key={contact.id}>

					<img
						alt="img alt"
						height="80px"
						width="80px"
						style={{ borderRadius: "15%", marginTop: "50px" }}
						src="data:image/png;base64,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"
					/>
					<section>
						<h4>{contact.full_name}</h4>

						<div className="flex-container">
							<i className="fas fa-map-marker-alt" style={{ color: "#000000", margin: "10px" }}></i>
							<span>{contact.address}</span>
						</div>

						<div className="flex-container">
							<i className="far fa-envelope" style={{ color: "#000000", margin: "10px" }}></i>
							<span>{contact.email}</span>
						</div>

						<div className="flex-container">
							<i className="fas fa-phone" style={{ color: "#000000", margin: "10px" }}></i>
							<span>{contact.phone}</span>
						</div>

					</section>
					<section>
						<i
							onClick={() => editContact(contact)}
							className="fas fa-pencil-alt"
							style={{ margin: "10px" }}
						></i>
						<i
							onClick={() => handleDelete(contact.id)}
							className="fas fa-trash-alt"
						></i>
					</section>
				</span>


			);
		})}
		</div>
	);
};
