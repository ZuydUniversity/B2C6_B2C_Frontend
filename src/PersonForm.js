import React, {useState} from "react";
import "./PersonForm.css"

// The component named PersonForm
const PersonForm = () => {

    // State hook to manage data (initially empty)
    const [formData, setFormData] = useState({

        FirstName: '', 
        LastName: '',
        Age: ''

    });

    // Function to handle input changes and updates formData state
    const handleChange = (e) => {
        // Update the corresponding field in formData state based on input changes
        // Use spread operation (...) to retain existing formData fields and update the changed fields
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault(); // Prevents default form submission behavior
        try {

            // Sends a POST request to specified API endpoint with form data
            const Response = await fetch("http://localhost:8000/api/person/", {
                method: "POST", // HTTP POST methode
                headers: {
                    "Content-Type": "application/json" // Specifies content type as JSON
                },
                body: JSON.stringify(formData) // Convert formData to JSON string 
            });

            // Check if response status is OK (status code 200-299)
            if (Response.ok)
            {
                
                // refresh page
                window.location.reload();

            }
            else
            {

                console.log("Failed to insert data");

            }

        }
        catch (error)
        {

            console.error("Error:", error);

        }

    };

    // Render the form components
    return (

        <form onSubmit={handleSubmit} className="MainForm">

            <input
                type="text"
                name="FirstName"
                placeholder="First Name"
                onChange={handleChange}
                className="FormInput"
            />

            <br />

            <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="FormInput"
            />

            <br />

            <input
                type="number"
                name="Age"
                placeholder="Age"
                onChange={handleChange}
                className="FormInput"
            />

            <br />

            <button type="submit">Submit</button>
            
        </form>

    );

};

export default PersonForm;