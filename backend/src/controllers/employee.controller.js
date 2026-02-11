import { GetEmployeeList } from "../services/employee.service.js";

export default class employeeController {
	static async GetEmployeeList(req, res) {
		const { ownerPhoneNumber } = req.query;
		const result = await GetEmployeeList({ ownerPhoneNumber });
		res.json(result);
	}
}
