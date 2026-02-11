import { database } from "../config/firebase.config.js";
import { ref, set, get, child, push, query, orderByChild, equalTo } from "firebase/database";
import { getOwnerByPhone } from "../utils/owner.helper.js";

const dbRef = ref(database);

const GetEmployeeList = async ({ ownerPhoneNumber }) => {
	try {
		const ownerId = await getOwnerByPhone(ownerPhoneNumber);

		if (!ownerId) {
			return {
				success: false,
				message: "Owner not found",
				data: null,
				error: null,
			};
		}

		const employeesRef = ref(database, "employees");
		const employeesQuery = query(employeesRef, orderByChild("ownerId"), equalTo(ownerId));

		const snapshot = await get(employeesQuery);

		if (snapshot.exists()) {
			return {
				success: true,
				message: "Employee list retrieved successfully",
				data: snapshot.val(),
				error: null,
			};
		} else {
			return {
				success: true,
				message: "No employees found for this owner",
				data: {},
				error: null,
			};
		}
	} catch (error) {
		return {
			success: false,
			message: "Error getting employee list",
			data: null,
			error: error.message,
		};
	}
};

export { GetEmployeeList };
