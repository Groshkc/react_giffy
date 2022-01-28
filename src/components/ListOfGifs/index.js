import React from 'react';
import Gifs from "../Gifs";
import './styles.css';

export default function ListOfGifs({gifs}) {
    return (
        <div className='ListOfGifs'>
        {        
        gifs.map(({id, title, url}) => 
            <Gifs 
            key={id}
            id={id}
            title={title}
            url={url}
            />
        )}
        </div>
    )
}
