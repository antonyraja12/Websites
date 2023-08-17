const express=require("express");
const database=require("mysql");
const cors=require("cors");
const bodyParser = require("body-parser");


const add=express();
add.use(cors());
add.use(bodyParser.json());
add.use(express.json());
add.use(express.static('public'));

const connection=database.createConnection(

    {
        host:'localhost',
        user:'root',
        password:'Dev@2001',
        database:'science_experiment_diy_blog'

    }
)
connection.connect ((error)=>{(error)? console.log(error):console.log("DB Connected Successfully")});
add.post('/api/createExperiment', async (req, res) => {
    try {
      const { experimentName, description, difficultyLevel, subject, mainImage, materials, steps } = req.body;
  
      // Insert experiment data into the Experiment table
      const [result] = await database.promise().query('INSERT INTO Experiment (ExperimentName, Description, DifficultyLevel, Subject, MainImageURL) VALUES (?, ?, ?, ?, ?)',
        [experimentName, description, difficultyLevel, subject, mainImage]
      );
      const experimentId = result.insertId;
  
      // Insert material data into the Material table
      for (const material of materials) {
        await database.promise().query('INSERT INTO Material (ExperimentID, MaterialName, Quantity) VALUES (?, ?, ?)',
          [experimentId, material.name, material.quantity]
        );
      }
  
      // Insert step data into the Step table
      for (const step of steps) {
        await database.promise().query('INSERT INTO Step (ExperimentID, StepNumber, ImageURL, Description) VALUES (?, ?, ?, ?)',
          [experimentId, step.stepNumber, step.imageURL, step.description]
        );
      }
  
      res.json({ message: 'Experiment data inserted successfully' });
    } catch (error) {
      console.error('Error creating experiment:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
    

add.listen(4040,()=>{console.log("Server Successfully Connected on port no 4040 ")});