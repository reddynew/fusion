require ('dotenv').config();
const {Pool, Connection}=require("pg");
const pool=new Pool({
    ConnectionString:'postgresql://postgres:Legal@123Legal@db.legal.supabase.co:5432/postgres',
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
module.exports=pool
