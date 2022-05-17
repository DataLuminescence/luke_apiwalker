import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from "axios"


const Planet = () => {
    // Sets the value of id by using useParams. Value comes from HeaderForm ?????
    const {id} = useParams()
    
    //
    const navigate = useNavigate()

    // Sets the planet variable to display the attributes of planets in API
    const [planet, setPlanet] = useState()

    // Calls Star Wars API based on planet id variable
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response=>{
                console.log(response.data)
                setPlanet(response.data)
            })
            .catch(err => navigate("/error"))
    },[id])

    return (
        <fieldset>
            <legend> Planet.jsx</legend>
            {
                planet?
                <div>
                    <h3> {planet.name}</h3>
                    <h3> Climate: {planet.climate} </h3>
                </div>:
                // Loading message instead of error message
                <h1> Loading... </h1>
            }
        </fieldset>
    )
}

export default Planet