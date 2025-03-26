require ('dotenv').config();
const {Pool, Connection}=require("pg");
const pool1=new Pool({
    ConnectionString:process.env.database_url,
    ssl:{rejectUnauthorized:false}
})
pool1.connect()
.then(()=>
{
    console.log("connected to database")
})
.catch((err)=>{
    console.log("database connection error",err)
})
module.exports=pool1
