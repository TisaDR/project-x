const mongoose = require("mongoose");
const Chat = require("./models/chat.js");



main().then(() => {
    console.log("connection  succesful")
}).catch((err) => console.log(err));

async function main() {
 await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

 let chats = [
{
    from :"neha",
    to:"priya",
    msg: "send on your exam sheets",
    created_at: new Date(),
},
{
    from :"feha",
    to:"prifya",
    msg: "sednd on your exam sheets",
    created_at: new Date(),
},
{


from :"neaha",
    to:"prviya",
    msg: "sensd on your exam sheets",
    created_at: new Date(),
},
{
from :"neha",
    to:"priya",
    msg: "send on your exam sheets",
    created_at: new Date(),
}



 ];

 
   Chat.insertMany(chats); 

 