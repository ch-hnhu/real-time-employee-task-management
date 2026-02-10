import React from "react";
import { useState } from "react";
import { ValidateAccessCode } from "../../../apis/owner.api";
import { useNavigate, useLocation } from "react-router-dom";

export default function PhoneVerification() {
	const [code, setCode] = useState("");
	const location = useLocation();
	const navigate = useNavigate();
	const { phoneNumber } = location.state || {};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const result = await ValidateAccessCode({ phoneNumber, accessCode: code });
			if (result.success) {
				localStorage.setItem("ownerPhoneNumber", result.data.phoneNumber);
				navigate("/dashboard");
			}
		} catch (error) {
			console.error("Error during code validation:", error);
		}
	};
	return (
		<>
			<h1>Phone verification</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Enter Your Code'
					value={code}
					onChange={(e) => setCode(e.target.value)}
					required
				/>
				<button type='submit'>Submit</button>
			</form>
		</>
	);
}
