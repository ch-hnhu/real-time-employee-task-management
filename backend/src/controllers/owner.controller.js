import { GetOwnerList } from "../services/owner.service.js";

export default class ownerController {
	static async GetOwnerList(_, res) {
		const result = await GetOwnerList();
		res.json(result);
	}
}
