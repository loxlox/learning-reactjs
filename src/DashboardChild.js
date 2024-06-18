import React from "react";
import { useMatches } from "react-router-dom";

const DashboardChild = (props) => {
	const match = useMatches();
	console.log(match[0].params);

	return <div>Dashboard Child</div>;
};

export default DashboardChild;