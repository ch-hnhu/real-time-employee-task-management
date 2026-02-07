import "dotenv/config";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const twilioMessagingServiceId = process.env.TWILIO_MESSAGING_SERVICE_ID;
const client = twilio(accountSid, authToken);

const sendSMS = async ({ to, message }) => {
	try {
		const result = await client.messages.create({
			body: message,
			messagingServiceSid: twilioMessagingServiceId,
			to: to,
		});

		return {
			success: true,
			message: "SMS sent successfully",
			data: result,
			error: null,
		};
	} catch (error) {
		return {
			success: false,
			message: "Failed to send SMS",
			data: null,
			error: error.message,
		};
	}
};

export { sendSMS };
