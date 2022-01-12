import React from "react";
import "./Thing.css";

function Thing({name, description}: {name:string, description:string}) {
    const things = ["raindrops","whiskers","kettles","mittens"];
    return (
        <ul>
           {things.map(thing => <li key={thing}>{thing}</li>)}
        </ul>
        
    );
}

export default Thing;