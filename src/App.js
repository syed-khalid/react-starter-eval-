import React, { useState, useEffect } from "react";
import "./style.css";
import API from "./api";

const App = () => {
	const test = "TEST";
	const [list, setList] = useState([]);
	const [display, setDisplay] = useState([]);

	useEffect(() => {
		const apiHandler = async () => {
			const riderTrips = await API.fetchRecentTripsForRider(test);
			riderTrips.forEach(async (obj) => {
				const eMail = await API.fetchDriver(obj.driverUUID);
				setList((prev) => [...prev, eMail.email]);
			});
		};
		apiHandler();
	}, []);

	const onClickHandler = (e) => {
		e.preventDefault();
		setDisplay(list);
	};

	return (
		<div className='App'>
			<form id='form' onSubmit={onClickHandler}>
				<label>
					Rider UUID:
					<input type='text' id='text' value={test} />
				</label>
				<input type='submit' value='Fetch driver emails' />
				<div id='results' />
			</form>
			{display.map((email) => (
				<h1>{email}</h1>
			))}
		</div>
	);
};

export default App;
