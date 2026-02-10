import { database, auth } from "../config/firebase.config.js";
import {
	ref,
	set,
	get,
	child,
	push,
	query,
	orderByChild,
	equalTo,
	onValue,
} from "firebase/database";
import { getOwnerByPhone } from "../helpers/owner.helper.js";
import { sendSMS } from "./twilio.service.js";

const dbRef = ref(database);

const GetOwnerList = async () => {
	try {
		const owners = await get(child(dbRef, `owners`));
		if (owners.exists()) {
			return {
				success: true,
				message: "Owner list retrieved successfully",
				data: owners.val(),
				error: null,
			};
		} else {
			return {
				success: false,
				message: "No owner data available",
				data: null,
				error: null,
			};
		}
	} catch (error) {
		return {
			success: false,
			message: "Error getting owner list",
			data: null,
			error: error.message,
		};
	}
};

const CreateNewAccessCode = async ({ phoneNumber }) => {
	try {
		let data = {};
		const accessCode = Math.floor(100000 + Math.random() * 900000).toString();
		const existingOwnerId = await getOwnerByPhone(phoneNumber);

		if (existingOwnerId) {
			await set(child(dbRef, `owners/${existingOwnerId}`), {
				phoneNumber: phoneNumber,
				accessCode: accessCode,
			});

			data = await get(child(dbRef, `owners/${existingOwnerId}`));
		} else {
			const newOwnerRef = push(child(dbRef, "owners"));

			await set(newOwnerRef, {
				phoneNumber: phoneNumber,
				accessCode: accessCode,
			});

			data = await get(newOwnerRef);
		}

		if (data.exists()) {
			const message = `Your access code is: ${accessCode}`;
			console.log("Sending SMS to", phoneNumber, "with message:", message);
			await sendSMS({ to: phoneNumber, message });
			return {
				success: true,
				message: "Owner created successfully",
				data: data.val(),
				error: null,
			};
		} else {
			return {
				success: false,
				message: "Failed to create owner",
				data: null,
				error: null,
			};
		}
	} catch (error) {
		return {
			success: false,
			message: "Error creating owner",
			data: null,
			error: error.message,
		};
	}
};

const ValidateAccessCode = async ({ accessCode, phoneNumber }) => {
	try {
		const ownerId = await getOwnerByPhone(phoneNumber);

		if (ownerId) {
			let owner = await get(child(dbRef, `owners/${ownerId}`));

			if (owner.exists() && owner.val().accessCode === accessCode) {
				await set(child(dbRef, `owners/${ownerId}/accessCode`), "");
				owner = await get(child(dbRef, `owners/${ownerId}`));

				return {
					success: true,
					message: "Access code is valid",
					data: owner.val(),
					error: null,
				};
			} else {
				return {
					success: false,
					message: "Invalid access code",
					data: null,
					error: null,
				};
			}
		}
	} catch (error) {
		return {
			success: false,
			message: "Error validating access code",
			data: null,
			error: error.message,
		};
	}
};

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

export { GetOwnerList, CreateNewAccessCode, ValidateAccessCode, GetEmployeeList };
