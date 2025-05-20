import React from 'react';
import estilos from './SearchResultsList.module.css';
import { SearchResult } from './SearchResult';

export const SearchResultsList = ({ results, onSelect }) => {
    return (
        <div className={estilos.results_list}>
            {results.map((artist) => (
                <SearchResult 
                    key={artist.id}  
                    artist={artist} 
                    onSelect={onSelect} 
                />
            ))}
        </div>
    );
};
