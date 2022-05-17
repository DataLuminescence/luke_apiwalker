import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const HeaderForm = () => {

    // Sets the category from the drop down menu in header
    const [category, setCategory] = useState();
    
    // Sets the id of person or planet to search in the API
    const [id, setId] = useState();

    // ??????
    const navigate = useNavigate();

    // Given an event call this function take category and id ????
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!isNaN(id)){
            navigate(`/${category}/${id}`)
            clearForm()
        }else{
            clearForm()
            alert("Please enter a number in the input field")
            return 0;
        }
    }

    // Used to clear the form after each search
    const clearForm =()=>{
        setId("")
        setCategory("")
    }

    return (
        <fieldset>
            <legend>HeaderForm.jsx</legend>
                {/* Calls handle submit when button is clicked */}
                <form onSubmit={handleSubmit}>
                    <label > Search for: </label>
                    {/* Sets the options available in the drop down menu and listens for the  
                    onChange event to change the value of category variable*/}
                    <select name="category" value={category}
                    onChange={e=> setCategory(e.target.value)}>
                        <option hidden> Choose a Category</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                    <label for={"id"}> ID: </label>
                    {/* Sets the value of id variable when text field changes */}
                    <input type="number" id="id" value={id}
                    onChange={e=>setId(e.target.value)}/>
                    <button type="submit"> Search </button>
                </form>
        </fieldset>
    )
}
export default HeaderForm