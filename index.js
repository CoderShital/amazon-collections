// db -> amazon , colln -> book, electronics, grocery, beauty

const mongoose = require("mongoose");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
};
main().then((res)=>{console.log("connection established.");}).catch((err)=>{console.log(err);});

//schema
const bkSchema = new mongoose.Schema({
    title:String,
    author:String,
    ratings:Number,
});
const elSchema = new mongoose.Schema({
    device:String,
    warranty:Number,
});
const groSchema = new mongoose.Schema({
    item:String,
    expiary:Date,
});
const beaSchema = new mongoose.Schema({
    product:String,
    defect:Boolean,
});

//model n collection
const book = mongoose.model("Book",bkSchema);
// book.insertMany([
//     {title:"To kill a mocking bird", author:"Harper lee", ratings:4.3},
//     {title:"Three thousand stiches", author:"Sudha Murthy", ratings:4.6},
//     {title:"the alchemist", author:"Paulo Coelho", ratings:4.5},
//     {title:"Ikigai", author:"Hector Garcia", ratings:4.8},
// ]) .then((res)=>{console.log(res);}).catch((err)=>{console.log(err);});

// const electronic = mongoose.model("Electronic", elSchema);
// electronic.insertMany([
//     {device:"Headphones", warranty:5},
//     {device:"Mobile", warranty:6},
// ]).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);});

// const grocery = mongoose.model("Grocery", groSchema);
// grocery.insertMany([
//     {item:"ketchup", expiary:new Date("2024-04-12")},
//     {item:"milk", expiary:new Date("2024-02-14")},
// ]).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);});


// const beauty = mongoose.model("Beauty", beaSchema);
// beauty.insertMany([
//     {product:"eye-liner", defective:false},
//     {product:"lipstick", defective:false},
// ]).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);});

book.find({author:"Sudha Murthy"})
.then((res)=>{console.log(res);})
.catch((err)=>{console.log(err);});
