import React, { useCallback, useEffect, useRef } from 'react';
import ListOfGifs from '../components/ListOfGifs';
import useGifs from '../hooks/useGifs';
import Grid from '../components/Loaders/Grid';
import useNearScreen from "../hooks/useNearScreen";
import debounce from 'just-debounce-it';

export default function SearchResults({params}) {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({keyword})
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({externalRef : loading ? null : externalRef, once : false })

    const handleNextPage = () => setPage(prePage => prePage + 1)
    const debounceHandleNextPage = useCallback(debounce(() => handleNextPage(), 500), []) 

    useEffect(() => {
      if(isNearScreen) debounceHandleNextPage()
    },[debounceHandleNextPage, isNearScreen])

    return (
        <>
          <h3>Resultados para {decodeURI(keyword)}</h3>
          { loading 
          ? <Grid /> 
          : <> 
            <ListOfGifs gifs={gifs} />
            <div id='visor' ref={externalRef}></div>
            </>
          }
        </>
    )
}
