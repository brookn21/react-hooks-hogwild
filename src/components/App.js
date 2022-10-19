import React, { useState } from "react";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {

	const [filter, setFilter] = useState('ALL')

	function changeFilter(newFilter){
		setFilter(newFilter)
	}

	function filterHogs(){
		if(filter === "Greased")
			return hogs.filter(hog => hog.greased)
		else if( filter === "Not Greased")
			return hogs.filter(hog => !hog.greased)
		else return hogs
		
	}

	return (
		<div className="App">
			<Nav />
			<Filter changeFilter={changeFilter}/>
			<br/>
			<hr />
			<HogsContainer hogs={ filterHogs() }/>
		</div>
	);
}

export default App;
