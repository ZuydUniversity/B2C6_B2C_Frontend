import React, {useState} from "react";
import "./PersonForm.css"

const PersonForm = () => {

    const [formData, setFormData] = useState({

        FirstName: '',
        LastName: '',
        Age: ''

    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {

            const Response = await fetch("http://localhost:8000/api/person/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (Response.ok)
            {
                
                console.log("Data inserted succesfully!");
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