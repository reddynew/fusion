const express=require('express');
const router=express.Router();
const pool=require('../db');
router.get('/user',(req,res)=>{
    res.send('Hello World from routes');
})  

router.post('/store', async (req, res) => {
    try {
        console.log("req.body",req.body)
        const { name, contact, location, caseType, answers } = req.body;

        // Convert "yes" or "no" answers to Boolean (true/false)
        const childrenInvolved = answers["Are there children involved in your case?"] === "yes";
        const seekingDivorce = answers["Are you seeking a divorce or separation?"] === "yes";
        const mediationAttempted = answers["Have you tried mediation or counseling?"] === "yes";
        const assetsToDivide = answers["Is there any property or assets to be divided?"] === "yes";

        // Insert data into PostgreSQL
        const result = await pool.query(
            `INSERT INTO legal_cases (name, contact, location, case_type, children_involved, seeking_divorce, mediation_attempted, assets_to_divide) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
            [name, contact, location, caseType, childrenInvolved, seekingDivorce, mediationAttempted, assetsToDivide]
        );

        res.status(201).json({ message: 'Case stored successfully', case: result.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;


module.exports=router;
