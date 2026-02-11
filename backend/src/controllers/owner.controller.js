import {
	GetOwnerList,
	CreateNewAccessCode,
	ValidateAccessCode,
	GetEmployeeList,
} from "../services/owner.service.js";
import { sendSMS } from "../services/twilio.service.js";

export default class ownerController {
	static async GetOwnerList(_, res) {
		const result = await GetOwnerList();
		res.json(result);
	}
	static async CreateNewAccessCode(req, res) {
		const { phoneNumber } = req.body;
		const result = await CreateNewAccessCode({ phoneNumber });
		res.json(result);
	}
	static async ValidateAccessCode(req, res) {
		const { phoneNumber, accessCode } = req.body;
		const result = await ValidateAccessCode({ phoneNumber, accessCode });
		res.json(result);
	}
	static async SendSMS(req, res) {
		const { to, message } = req.body;
		const result = await sendSMS({ to, message });
		res.json(result);
	}
	static async GetEmployeeList(req, res) {
		const { ownerPhoneNumber } = req.query;
		const result = await GetEmployeeList({ ownerPhoneNumber });
		res.json(result);
	}
}
