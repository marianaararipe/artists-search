import React from 'react';
import estilos from './SearchResult.module.css';


export const SearchResult = ({ artist, onSelect }) => {
      return (
            <div className={estilos.search_result} onClick={() => onSelect(artist)}>
                  {artist.name}
            </div>
      );
};