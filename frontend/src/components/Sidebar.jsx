import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<>
			<Link to={"dashboard"}>Dashboard</Link>
			<Link to={"manage-employee"}>Manage Employee</Link>
			<Link to={"manage-task"}>Manage Task</Link>
			<Link to={"message"}>Message</Link>
		</>
	);
}
