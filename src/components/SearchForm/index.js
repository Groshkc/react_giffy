import React, {useState} from 'react';
import {useLocation} from 'wouter';

export default function SearchForm() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
        setKeyword('')
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleChange} 
                type="text" 
                value={keyword}
                placeholder='Search a GIF here...'
                  />
            </form>      
        </>
    )}
