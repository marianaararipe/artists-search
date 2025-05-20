import React, { useState } from 'react';
import estilos from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';



export const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleChange = (value) => {
        setInput(value);

        if (value === "") {
            setSearchResults([]);
            setShowResults(false);
        } else {
            onSearch(value)
            .then(results => {
                setSearchResults(results || []); // garantindo que results seja um Array []
                setShowResults(results && results.length > 0); // funcao para só exibir se tiver resultados
            })
            .catch(error => {
                console.error("Erro ao buscar resultados:", error);
                setSearchResults([]); 
                setShowResults(false);
            });
        }
    };



    return (
        <div className={estilos.container}>
            <div className={estilos.input_wrapper}>
                <FaSearch className={estilos.search_icon} />
                <input
                    type="text"
                    placeholder="Pesquise artistas..."
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>

            
            {showResults && (
                <div className={estilos.results_container}>
                    {searchResults.map((artist) => (
                        <div key={artist.id} className={estilos.search_result}>
                            {artist.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
