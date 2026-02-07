import { useState } from "react";
import { CreateNewAccessCode } from "../../../apis/owner.api";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
	const [phoneNumber, setPhoneNumber] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await CreateNewAccessCode({ phoneNumber });
		console.log(result);
		if (result.success) {
			navigate("/phone-verification", { state: { phoneNumber } });
		}
	};

	return (
		<>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='tel'
					placeholder='Your Phone Number'
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
					required
				/>
				<button type='submit'>Submit</button>
			</form>
		</>
	);
}
