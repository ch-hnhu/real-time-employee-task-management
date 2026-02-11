import { database } from "../config/firebase.config.js";
import { ref, get, child } from "firebase/database";

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

export { GetOwnerList };
