import { useState } from "react";
import axios from "axios";

const Creatingcrud = ()=>{
    const [data, setData] = useState({
        userName: "",
        email: "",
        about: "",
        contact: "",
        password: "",
    })

    const handleForm=(e)=>{
        let {name, value} = e.target
        setData({...data, [name] : value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            const res = await axios.post("https://assignmentdata-54327-default-rtdb.asia-southeast1.firebasedatabase.app/form.json", data);
            alert("Data Added Successfully")

        // console.log(data)

        setData({
            userName: "",
            email: "",
            about: "",
            contact: "",
            password: "",
        })
        }
        catch{
            alert("Unable to add data! Try once again")
        }
    }

    return(
        <>
        
        <h1>Question:</h1>
        <p>Implement the following features:
        Add a task: Users can input a task name and add it to the firebase's database.
        Display tasks: Fetch the list of tasks from firebase's and display them in a list.
        Edit a task: Add functionality to update a task name.
        Delete a task: Allow users to remove a task from firebase's.</p>

        <form onSubmit={handleSubmit}>
            <input name="userName" placeholder="enter name" type="text" value={data.userName} onChange={handleForm} required/><br/><br/>
            <input name="email" placeholder="enter email" type="email" value={data.email} onChange={handleForm} required/><br/><br/>
            <input name="contact" placeholder="enter contact" type="text" value={data.contact} onChange={handleForm} required/><br/><br/>
            <input name="about" placeholder="enter about" type="text" value={data.about} onChange={handleForm} required/><br/><br/>
            <input name="password" placeholder="enter password" type="password" value={data.password} onChange={handleForm} required/><br/><br/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Creatingcrud;