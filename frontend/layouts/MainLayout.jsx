import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../src/components/Sidebar";

export default function MainLayout() {
	return (
		<>
			<Sidebar />
			<Outlet />
		</>
	);
}
