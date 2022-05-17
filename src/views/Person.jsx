import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const Person = () => {
    // Sets the value of id by using useParams. Value comes from HeaderForm ?????
    const { id } = useParams()

    //
    const navigate = useNavigate()
    
    // Sets the person variable to display the attributes of people in API
    const [person, setPerson] = useState()

    // Sets the homeworld variable associated with a person
    const [homeworld, setHomeworld] = useState()



    const getPlanet = (url) => {
        axios.get(url)
            .then(response => {
                setHomeworld(response.data)
            })
            .catch(err => navigate("/error"))
    }

    // Calls Star Wars API based on person id variable
    useEffect(() => {
        setPerson(null)
        setHomeworld(null)
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setPerson(response.data)
                getPlanet(response.data.homeworld)
            })
            .catch(err => navigate("/error"))

    }, [id])

    return (
        <fieldset>
            <legend> Person.jsx</legend>
            {
                // Determines if the person exists in the API if so display their info
                // otherwise display there is no such person in ther API
                person && homeworld ?
                    <div>
                        <h3> {person.name}</h3>
                        <h3> Height: {person.height}</h3>
                        <h3> Mass: {person.mass}</h3>
                        <h3> Hair Color: {person.hair_color}</h3>
                        <h3> Skin Color: {person.skin_color}</h3>
                        <h3> Homeworld: <a href={person.homeworld.split("/api")[1]}> {homeworld.name} </a></h3>

                    </div> :
                    // Loading message instead of error message
                    <h1> Loading... </h1>
            }
        </fieldset>
    )
}

export default Person