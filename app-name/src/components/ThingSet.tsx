import React from "react";
import Thing from "./Thing";

function ThingSet(){
    const things = [
        {name: "raindrops", description: "on roses"},
        {name: "whiskers", description: "on kittens"}
    ]
    return (
        <ul>
            {
                things.map(thing => <li key={thing.name}>{thing.name +" "+ thing.description}</li>)
            }
        </ul>
    );
    
}

export default ThingSet;