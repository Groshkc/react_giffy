import React from "react";
import { Link } from "wouter";

export default function Category ({ name = '', options = [] }){
    return (
        <>
        <h3 className='Category-title'>{name}</h3>
        <ul>
        { options.map( options => (
            <li key={options}>
                <Link 
                to={`/search/${options}`} >{options}
                </Link>
            </li>
        ))}
        </ul> 
        </>
    )
}