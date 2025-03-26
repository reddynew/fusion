require ('dotenv').config();
const {pool, Connection}=require("pg");
const pool1=new pool({
    ConnectionString:process.env.database_url,
    ssl:{rejectUnauthorized:false}
})
pool.connect()
.then(()=>
{
    console.log("connected to database")
})
.catch((err)=>{
    console.log("database connection error",err)
})
module.exports=pool1
