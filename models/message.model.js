var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    integrationId: {type: String, default: ''},
    messageId: {type: String, default: ''},
    replyMesageId: {type: String, default: ''},
    apiKey: {type: String, default: ''},
    fromNumber: {type: String, default: ''},
    toNumber: {type: String, default: ''},
    timestamp: {type: Date, default: ''},
    text: {type: String, default: ''},
    charset: {type: String, default: ''},
    udh: {type: String, default: ''},
    network: {type: String, default: ''},
    keyword: {type: String, default: ''}
});

messageSchema.index({messageId: 'text', fromNumber: 'text', toNumber: 'text'});

module.exports = mongoose.model('Message', messageSchema);