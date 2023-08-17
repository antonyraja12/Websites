import React, { useState } from 'react';
import axios from 'axios';

const ExperimentCreation = () => {
  const [experimentName, setExperimentName] = useState('');
  const [description, setDescription] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [subject, setSubject] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [materials, setMaterials] = useState([]);
  const [steps, setSteps] = useState([]);

  const handleAddMaterial = () => {
    // Add new material to the materials array
    setMaterials([...materials, { name: '', quantity: '' }]);
  };

  const handleAddStep = () => {
    // Add new step to the steps array
    setSteps([...steps, { stepNumber: steps.length + 1, imageURL: '', description: '' }]);
  };
  const handleStepChange = (index, field, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index][field] = value;
    setSteps(updatedSteps);
  };
  const handleMaterialChange = (index, field, value) => {
    const updatedMaterials = [...materials];
    updatedMaterials[index][field] = value;
    setMaterials(updatedMaterials);
  };


  const handleSubmit = async () => {
    // alert(experimentName);
    try {
      const experimentData = {
        experimentName,
        description,
        difficultyLevel,
        subject,
        mainImage,
        materials,
        steps
      };

      // Send experimentData to the backend API
      const response = await axios.post('/api/createExperiment', experimentData);

      // Handle response from the backend
      console.log('Experiment created successfully!', response.data);
      
      
      // Reset form fields after successful submission
      setExperimentName('');
      setDescription('');
      setDifficultyLevel('');
      setMainImage('');
      setMaterials('');
      setSubject('');
      setSteps('');
      // ... (reset other state variables)
    } catch (error) {
      console.error('Error creating experiment:', error);
    }
  };

  return (
    <div>
      <h2>Create New Experiment</h2>
      <form>
        <label>Experiment Name:</label>
        <input type="text" value={experimentName} onChange={e => setExperimentName(e.target.value)} /> <br/>
        <label>One line description:</label>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} /><br/>
        <label>difficultyLevel:</label>
        <input type="text" value={difficultyLevel} onChange={e => setDifficultyLevel(e.target.value)} /><br/>
        <label>main Image:</label>
        <input type="text" value={mainImage} onChange={e => setMainImage(e.target.value)} /><br/>
        <label>Subject:</label>
        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} />
       
       
       
        {/* Other input fields for experiment details */}
        
        <h3>Materials</h3>
        {materials.map((material, index) => (
          <div key={index}>
            <label>Material Name:</label>
            <input type="text" value={material.name} onChange={e => handleMaterialChange(index, 'name', e.target.value)} />
            <label>Quantity:</label>
            <input type="text" value={material.quantity} onChange={e => handleMaterialChange(index, 'quantity', e.target.value)} />
          </div>
        ))}
        <button type="button" onClick={handleAddMaterial}>Add Material</button>
        
        <h3>Steps</h3>
        {steps.map((step, index) => (
          <div key={index}>
            <label>Step {index + 1}:</label>
            <input type="text" value={step.imageURL} onChange={e => handleStepChange(index, 'imageURL', e.target.value)} />
            <input type="text" value={step.description} onChange={e => handleStepChange(index, 'description', e.target.value)} />
          </div>
        ))}
        <button type="button" onClick={handleAddStep}>Add Step</button>
        
        <button type="button" onClick={handleSubmit}>Create Experiment</button>
      </form>
    </div>
  );
};

export default ExperimentCreation;
