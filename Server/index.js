const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// mongodb+srv://<username>:<password>@cluster0.88u2plt.mongodb.net/
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.88u2plt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //await client.connect();

    const spotCollection = client.db("spotDB").collection('spot');
    const userCollection = client.db("spotDB").collection('user');
    const countryCollection = client.db("spotDB").collection('country');
  

    app.get('/spot', async(req, res) => {
        const cursor = spotCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })

    app.get('/spot/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await spotCollection.findOne(query);
      res.send(result);
    })

    app.post('/spot', async(req, res)=>{
        const newSpot = req.body;
        console.log(newSpot);
        const result = await spotCollection.insertOne(newSpot);
        res.send(result);
      })

      app.put('/spot/:id', async(req, res) => {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)}
        const options = {upsert: true};
        const updatedSpot = req.body;
        const spot = {
          $set : {
            spotName:updatedSpot.spotName, 
            country:updatedSpot.country, 
            location:updatedSpot.location ,
            cost:updatedSpot.cost ,
            description:updatedSpot.description, 
            season:updatedSpot.season ,
            visitor:updatedSpot.visitor, 
            time:updatedSpot.time ,
            name:updatedSpot.name ,
            email:updatedSpot.email,
            image:updatedSpot.image
          }
        }
        const result = await spotCollection.updateOne(filter, spot, options);
        res.send(result);
      })

      app.get("/myList/:email", async(req, res) => {
        console.log(req.params.email);
        const result = await spotCollection.find({email:req.params.email}).toArray();
        res.send(result);
      })


      app.get("/spot/:country", async(req, res) =>{
        console.log(req.params.country);
        const result = await spotCollection.find({country:req.params.country}).toArray();
        res.send(result);
      })

      app.delete('/myList/:email/:id', async(req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await spotCollection.deleteOne(query);
        res.send(result);
      })

    app.get('/country', async(req, res) => {
        const cursor = countryCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })


    // User related APIs
    app.get('/user', async(req, res) => {
      const cursor = userCollection.find();
      const users = await cursor.toArray();
      res.send(users);
    })

    app.post('/user', async(req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/',(req,res) => {
    res.send('Explorex server is up and running!')
})

app.listen(port, () => {
    console.log(`Explorex is active on port no: ${port}`)
})