const express=require('express');
const app=express();
const pool=require('./db');
const router=require('./routes/user_data');
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port=3000;
app.get('/',(req,res)=>{           
    res.send('Hello World');
}); 
app.use('/api/',router);
app.listen(port,()=>{   
    console.log(`Server is running at ${port}`);
}); 
