const express = require("express");
const cors = require("cors");

const recipeeModel =require("./model/recipe");
const recipeeModelita = require("./model/recipeeita");
const app = new express;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
// get recipee
app.get('/view',async(req,res)=>{
    var data=await recipeeModel.find();
    res.json(data)
    })
// add recipee
app.post('/addrecipee',async (req,res)=>{
    console.log(req.body);
var data =await new recipeeModel(req.body);
data.save();
res.send({status:"data saved"})
})
// delete recipee
app.delete("/delete/:id",async(req,res)=>{
    console.log(req.params.id);
    let id= req.params.id
    await recipeeModel.findByIdAndDelete(id)
    res.json({status:"deleted"})
    })
    // edit recipee
    app.put('/editrecipee/:id', async(req,res)=>{
        let id =req.params.id;
        try{
            await recipeeModel.findByIdAndUpdate(id, req.body);
            res.send("Data updated successfully");
        }
        catch(err){
            res.status(500).send(err)
        }
    })
// ITALIAN
    // get recipee italian
app.get('/viewita',async(req,res)=>{
    var data=await recipeeModelita.find();
    res.json(data)
    })
// add recipee
app.post('/addrecipeeita',async (req,res)=>{
    console.log(req.body);
var data =await new recipeeModelita(req.body);
data.save();
res.send({status:"data saved"})
})
// delete recipee
app.delete("/deleteita/:id",async(req,res)=>{
    console.log(req.params.id);
    let id= req.params.id
    await recipeeModelita.findByIdAndDelete(id)
    res.json({status:"deleted"})
    })
    // edit recipee
    app.put('/editrecipeeita/:id', async(req,res)=>{
        let id =req.params.id;
        try{
            await recipeeModelita.findByIdAndUpdate(id, req.body);
            res.send("Data updated successfully");
        }
        catch(err){
            res.status(500).send(err)
        }
    })


app.listen(3008,()=>{
    console.log("server is listen to 3008");

})