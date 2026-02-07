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
		const result = await ValidateAccessCode({ phoneNumber, accessCode: code });
		if (result.success) {
			navigate("/dashboard");
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
