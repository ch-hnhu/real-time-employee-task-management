import { CreateNewAccessCode, ValidateAccessCode } from "../services/auth.service.js";
import { sendSMS } from "../services/twilio.service.js";

export default class ownerController {
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
}
