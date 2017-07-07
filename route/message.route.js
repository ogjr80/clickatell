var router = require('express').Router();
var Message = require('../models/message.model');

router.post('/', function(req, res, next){
    var new_msg = new Message({
        integrationId: req.body.integrationId,
        messageId: req.body.messageId,
        replyMesageId: req.body.replyMesageId,
        apiKey: req.body.apiKey,
        fromNumber: req.body.fromNumber,
        toNumber: req.body.toNumber,
        timestamp: new Date(req.body.timestamp),
        text: req.body.text,
        charset: req.body.charset,
        udh: req.body.udh,
        network: req.body.network,
        keyword: req.body.keyword
    });

    new_msg.save(function(err){
        if(err){return next(err);}
        console.log("new message received");
    });
});

router.get('/', function(req, res, next){
    Message.find(function(err, messages){
        if(err){return next(err);}
        res.json(messages);
    });
});

router.get('/:id', function(req, res, next){
    Message.findById({_id: req.params.id}, function(err, message){
        if(err){return next(err);}
        res.json(message);
    });
});

module.exports = router;