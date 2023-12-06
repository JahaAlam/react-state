import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const teamStyle = {
        border:'2px solid green',
        padding: '15px',
        borderRedious: '15px'
    }

    const handleAdd =()=>{
        const newTeam = team+1;
        setTeam(newTeam);
    }
    const handleRemove = () =>{
        setTeam(team-1);
    }


    return(
        <div style = {teamStyle}>
            <h2>Players: {team} </h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}