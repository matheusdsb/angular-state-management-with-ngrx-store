const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ClientSchema = new mongoose.Schema({
	code: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	telephone: {
		type: String,
		required: true
    },
    status: {
        type: String,
        required: true
	},
	birthDate: {
		type: Date,
		required: true
	}
});

ClientSchema.plugin(mongoosePaginate);
mongoose.model('Client', ClientSchema);
