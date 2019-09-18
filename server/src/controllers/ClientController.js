const mongoose = require('mongoose');

const Client = mongoose.model('Client');

module.exports = {
	async index(req, res) {		
		const { page = 1, limit = 10 } = req.query;
		const clients = await Client.find();
		return res.json(clients);
	},

	async show(req, res) {
		const client = await Client.findById(req.params.id);
		return res.json(client);
	},

	async store(req, res) {
		try {
			await Client.create(req.body);
			const clients = await Client.find().sort({"_id" : -1}).limit(1);
			return res.json(clients[0]);
		} catch(err) {
			return res.status(414).send(err);
		}		
	},

	async update(req, res) {
		try {
			const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
			return res.json(client);
		} catch (err) {
			return res.status(414).send(err);
		}
	},

	async destroy(req, res) {
		await Client.findByIdAndRemove(req.params.id);
		return res.send();
	}
};
