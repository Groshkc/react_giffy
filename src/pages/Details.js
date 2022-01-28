import React from "react";
import Gifs from "../components/Gifs";
import useGlobalGifs from "../hooks/useGlobalGifs";
import useSingleGif from "../hooks/useSingleGif";

export default function Details({params}) {
    //const {gifs} = useContext(GifsContext);
    const gifs = useGlobalGifs();
    const gif = gifs.find( singleGif => singleGif.id === params.id )
    
    return (
        <>
            <h3 className='Detail-title'>{gif.title}</h3>
            <Gifs {...gif} />
        </>
    )}
