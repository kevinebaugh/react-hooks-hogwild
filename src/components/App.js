import React, { useState } from "react";
import Nav from "./Nav";
import Hog from "./Hog";

import hogsData from "../porkers_data";

function App() {
	// const [hogs, setHogs] = useState(hogsData)
	const [sortBy, setSortBy] = useState("name")
	const [greasedFilter, setGreasedFilter] = useState(false)

	function updateGreasedFilter() {
		setGreasedFilter(!greasedFilter)
	}

	function updateSortBy(event) {
		setSortBy(event.target.id)
	}

	const hogsToShow = hogsData.sort( (hog1, hog2) => {
		if (sortBy === "name") {
			return hog1.name.localeCompare(hog2.name)
		} else if (sortBy === "weight") {
			return hog1.weight - hog2.weight
		}
	}).filter( (hog) => {
		if (greasedFilter) {
			return hog.greased
		} else {
			return true
		}
	})

	return (
		<div className="App">
			<Nav />
			<p>
				<button onClick={updateGreasedFilter}>Toggle greased filter</button>
				<button id="name" onClick={updateSortBy}>Sort by name</button>
				<button id="weight" onClick={updateSortBy}>Sort by weight</button>
			</p>
			<div className="ui grid container">
				{hogsToShow.map( (hog) => {
					return <Hog hogDetails={hog} key={hog.name} />
				})}
			</div>
		</div>
	);
}

export default App;
