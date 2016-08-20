var mongoose = require('mongoose');
var express = require("express");
var router = express.Router();
var message = require('../models/schemafile');

router.post('/', function(req, res)
{
console.log(req.body.From);

 var saveSchema = new message({ From: req.body.From,
  Subject: req.body.Subject,date: req.body.date});
 saveSchema.save(function (err)
 {
   if (err) {
     console.log(err);
   } else {
     console.log('Hello Saved');
    res.send('Update the record');
   }
 });
});

router.get('/', function(req, res)
{
 message.find(function (err,data)
 {
   if (err) {
     console.log(err);
   } else {
    res.send(data);
   }
 });
});

router.delete('/',function(req,res)
{
  message.remove({_id:req.body._id},function(err){
    if(err){
      console.log(err);
    }else{
      console.log('deleted');
    }
  });
});




// .put(functIion(req,res){
//   Email.findById({_id:req.body.msgID},function(err, updateEmailById){
//     if(err)
//     {
//       res.send({response:err});
//     }
//     else
//     {
//         var emailAddress=req.body.Address;
//         var emailSubject=req.body.Subject;
//         updateEmailById.msgFromAddress=emailAddress;
//         updateEmailById.msgFromSubject=emailSubject;
//         updateEmailById.save(function(err)){
//           if(err)
//           {
//               re.send({response:err})
//           }
//           else
//             {
//               console.log("updated successfully");
//               res.send("Email data updated");
//             }
//           });
//         }
// });
// })
//
//



module.exports=router;
