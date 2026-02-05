import { database } from "../config/firebase.config.js";
import { ref, set, get, child } from "firebase/database";

const dbRef = ref(database);

const getOwner = async () => {
	const owners = await get(child(dbRef, `owners`));
	try {
		if (owners.exists()) {
			return {
				success: true,
				message: "Get owner list successfully",
				data: owners,
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

const getOwnerByPhone = async (phone) => {
	try {
		const owner = await get(child(dbRef, `owners/${phone}`));
		if (owner.exists()) {
			return {
				success: true,
				message: "Owner found",
				data: owner,
				error: null,
			};
		} else {
			return {
				success: false,
				message: "Owner not found",
				data: null,
				error: null,
			};
		}
	} catch (error) {
		return {
			success: false,
			message: "Error getting owner by phone",
			data: null,
			error: error.message,
		};
	}
};

const createOwner = async (owner) => {
	try {
		const newOwnerRef = ref(database, `owners/${owner.phone}`);

		await set(newOwnerRef, {
			name: owner.name,
			access_code: owner.access_code,
		});

		const ownerCreated = await get(newOwnerRef);

		if (ownerCreated.exists()) {
			return {
				success: true,
				message: "Owner created successfully",
				data: ownerCreated,
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

export { getOwner, getOwnerByPhone, createOwner };
