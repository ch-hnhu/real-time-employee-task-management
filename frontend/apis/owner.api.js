import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4041";

// Get all owners
export const getOwners = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/owner`);
		return response.data;
	} catch (error) {
		console.error("Error fetching owners:", error);
		return {
			success: false,
			message: "Failed to fetch owners",
			error: error.message,
		};
	}
};

// Get owner by phone
export const getOwnerByPhone = async (phone) => {
	try {
		const response = await axios.get(`${API_BASE_URL}/owner/${phone}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching owner:", error);
		return {
			success: false,
			message: "Failed to fetch owner",
			error: error.message,
		};
	}
};

export const CreateNewAccessCode = async (owner) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/owner/create-new-access-code`, owner);
		return response.data;
	} catch (error) {
		console.error("Error creating owner:", error);
		return {
			success: false,
			message: "Failed to create owner",
			error: error.message,
		};
	}
};

export const ValidateAccessCode = async ({ phoneNumber, accessCode }) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/owner/validate-access-code`, {
			phoneNumber,
			accessCode,
		});
		return response.data;
	} catch (error) {
		console.error("Error validating access code:", error);
		return {
			success: false,
			message: "Failed to validate access code",
			error: error.message,
		};
	}
};
