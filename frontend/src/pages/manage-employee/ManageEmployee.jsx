import { useState } from "react";
import { GetEmplyeeList } from "../../../apis/owner.api";
import { useEffect } from "react";
import { auth } from "../../config/firebase.config";

export default function ManageEmployee() {
	const [employeeList, setEmployeeList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState(null);

	const fetchEmployeeList = async () => {
		setIsLoading(true);
		setErrors(null);
		try {
			const currentOwner = localStorage.getItem("ownerPhoneNumber");
			if (!currentOwner) {
				setErrors("Please login first");
				return;
			}
			const result = await GetEmplyeeList({ ownerPhoneNumber: currentOwner });
			if (result.success) {
				const employees = Object.values(result.data).filter((e) => e !== null);
				setEmployeeList(employees);
			} else {
				setErrors(result.message);
			}
		} catch (error) {
			setErrors("An unexpected error occurred");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchEmployeeList();
	}, []);

	return (
		<>
			<div>ManageEmployee</div>
			{isLoading ? (
				<p>Loading employees...</p>
			) : errors !== null ? (
				<p>{errors}</p>
			) : (
				<ul>
					{employeeList.map((e, i) => {
						return <li key={i}>{e.name}</li>;
					})}
				</ul>
			)}
		</>
	);
}
