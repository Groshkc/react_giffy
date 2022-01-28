import React from 'react';
import useGifs from '../hooks/useGifs';
import ListOfGifs from '../components/ListOfGifs';
import TrendingSearches from '../components/TrendingSearches';
import Grid from '../components/Loaders/Grid';

export default function Home() {
    const { loading, gifs} = useGifs()

    return (
        <>
            <div className='App-main'>
                <div className='App-results'>
                    <h3 className='App-title'>Ultima busqueda</h3>
                    { loading 
                    ? <Grid /> 
                    : <ListOfGifs gifs={gifs} /> }
                </div>
                <div className='App-trendings'>
                    <TrendingSearches />
                </div>
            </div>
        </>
    )
}
