/* jshint indent: 1 */
const mongoose = require('mongoose');
var Schema = mongoose.Schema;


let messageSchema = new Schema({
	id: {
		type: mongoose.SchemaTypes.ObjectId
	},
	
	message: {
		type: String,
		default: ""
	},
	readStatus: {
		type: Number,
		default: 0
	},
	username: {
		type: String,
		default: ""
	},
	room: {
		type: String,
		default: ""
	},
	messageType: {
		type: String,
		default: ""
	},
	__createdtime__: {
		type: Date
	},
	deletedId: {
		type: mongoose.SchemaTypes.ObjectId
	}
});

messageSchema.set('timestamps', true);

const message = mongoose.model('messages', messageSchema);
module.exports = message;
