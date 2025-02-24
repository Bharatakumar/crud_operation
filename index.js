require('./database_connection');
const mydata = require('./input');
const express = require('express');
const server = express();
server.use(express.json());
const { swaggerDocs } = require("./swagger1.js");
const swaggerUi = require("swagger-ui-express");


server.get('/',  (req, res)=> {
    res.send('Welcome to the server');
})

server.listen(4000, () => {
    console.log('server is running on port 4000')
})

server.post('/addNewStudent', async  (req, res) => {
    try {
        const data = req.body;
        await mydata.create(data);
        return res.send('Student added successfully')
    } catch (error) {
        return res.send(error)
    }
})


server.get('/getStudent/:name', async  (req, res)=> {
    try {
        const name = req.params.name;
        const data = await mydata.find({ name: name });
        return res.json({
            message: 'Student data retrieved successfully',
            data: data
        })
    } catch (error) {
        return res.send(error)
    }
})
server.get('/getallstudents', async (req, res)=> {
    try {
        const data = await mydata.find();
        return res.json({
            message: 'All students data retrieved successfully',
            data: data
        })
    } catch (error) {
        return res.send(error)
    }
}
)
server.put('/updatestudent/:id', async function (req, res) {
    try {
        const id = req.params.id;
        //  const newname=req.body.newname; 
        const upstd = await mydata.findOne({ _id: id })
        if (!upstd) {
            return res.status(404).json({ message: "Not found" })
        }
        //  const updatestudent=await User.updateOne({"name":id},{$set:{"name":newname}});
        //  const data=await User.find({"name":newname});
        const updatestudent = await mydata.findByIdAndUpdate(id, req.body, { new: true })
        return res.json(updatestudent)
    }
    catch (error) {
        res.json({ error: "Internal Server error" })
    }

})
server.delete('/delete/:name', async (req, res)=> {
    const name = req.params.name;
    try {
        await mydata.deleteOne({ name: name });
        return res.send('data deleted successfully');

    }
    catch (error) {
        return
    }
}
)
server.use('/api_docx', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = server;
