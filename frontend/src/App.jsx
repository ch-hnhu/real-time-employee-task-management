import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import PhoneVerification from "./pages/auth/PhoneVerification";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
	return (
		<>
			<Routes>
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/phone-verification' element={<PhoneVerification />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
