import React from "react";

function Hog({ hogDetails }) {
	function handleToggleHog(event) {
		let detailsToToggle = document.getElementById(`details-${hogDetails.name}`)

		if (detailsToToggle.style.display === "") {
			detailsToToggle.style.display = "block"
		} else {
			detailsToToggle.style.display = ""
		}
	}

	return (
		<div className="ui eight wide column clickable" onClick={handleToggleHog}>
			<h1>{hogDetails.name}</h1>
			<img className="hogImage" src={hogDetails.image} alt={hogDetails.name} />
			<ul className="extraDetails" id={`details-${hogDetails.name}`}>
				<li><b>Specialty:</b> {hogDetails.specialty}</li>
				<li><b>Weight:</b> {hogDetails.weight}</li>
				<li><b>Highest medal achieved:</b> {hogDetails["highest medal achieved"]}</li>
				<li><b>Greased?</b> {hogDetails.greased === true ? "Yes" : "No"}</li>
			</ul>
		</div>
	);
};

export default Hog;
