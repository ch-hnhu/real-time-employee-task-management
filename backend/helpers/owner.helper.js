import { database } from "../config/firebase.config.js";
import { ref, get, child } from "firebase/database";

const dbRef = ref(database);

export const getOwnerByPhone = async (phoneNumber) => {
	const ownerSnapshot = await get(child(dbRef, `owners`));
	if (ownerSnapshot.exists()) {
		const owners = ownerSnapshot.val();
		let existingOwnerId = null;
		for (const key in owners) {
			if (owners[key].phoneNumber === phoneNumber) {
				existingOwnerId = key;
				break;
			}
		}
		return existingOwnerId;
	}
};
