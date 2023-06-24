import React, { useState } from "react";

export const BeekeepingInspectionChecklist = () => {
  const [checklist, setChecklist] = useState([
    {
      item: "General Hive Appearance",
      description: "Check the overall appearance of the hive. Look for cracks, signs of damage, and any other concerning issues.",
      checked: false,
    },
    {
      item: "Reproduction",
      description: "Check the queen cells to see if the hive is preparing to reproduce. Look for new queen cells, eggs, and larva.",
      checked: false,
    },
    {
      item: "Signs of Pests",
      description: "Check for signs of pests, such as wax moths, small hive beetles, and varroa mites.",
      checked: false,
    },
    {
      item: "Capacity (Bee Population)",
      description: "Check the bee population to ensure the hive has enough bees. Look for any signs of overcrowding or insufficient numbers.",
      checked: false,
    },
    {
      item: "General Weather Conditions",
      description: "Note the weather conditions. Make sure the weather is not too hot or too cold for the bees.",
      checked: false,
    },
  ]);

  const handleCheckboxChange = (index) => {
    const updatedChecklist = [...checklist];
    updatedChecklist[index].checked = !updatedChecklist[index].checked;
    setChecklist(updatedChecklist);
  }

  const handleSave = () =>{
    const checkedItems = checklist.filter(item => item.checked);
    console.log(checkedItems); // For testing purposes
  
    // Call the Google Apps Script function to save the checked items to Google Sheets
    // google.script.run.saveChecklistData(checkedItems); // Replace 'saveChecklistData' with the appropriate function name in your Google Apps Script code
  }
  

  //DataDisplayBox function, which will be used to display the checked boxes in a little text section at the bottom of the application
const dataDisplayBox = () =>{
  <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>Data Captured:</h2>
      <pre>{JSON.stringify(checkedItems, null, 2)}</pre>
    </div>
}
 
  
  return (
    <div className="beekeeping-inspection-checklist">
      <h2 className="text-2xl font-bold mb-4">Beekeeping Inspection Checklist</h2>
      <ul>
        {checklist.map((item, index) => (
          <li key={item.item} className="flex items-center mb-2 ">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(index)}
              className="mr-2"
            />
            <span className="text-2xl">{item.item}</span>
            <br />
            <br />
            <br />
            <p className="ml-2">{item.description}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleSave}>Save Checked Items</button>
      {/* trying to display the checklist data the user checked */}
      <p>
        {dataDisplayBox}
      </p>
      
      {/* The submit button does save the checked sections in the console */}
      
    </div>

    
  );
}


