import React, { useState } from "react";
import { AccessToken } from "./AccessToken";
import Layout from "./paginas/Layout";
import './App.css'

import { fetchData, fetchArtistDetails, fetchTopTracks } from './SpotifyServices';



function App() {
  const [accessToken, setAccessToken] = useState("");
  const [results, setResults] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [topTracks, setTopTracks] = useState([]);


  // função que é chamada quando seleciona um artista
  const handleSelectArtist = (artist) => {
    console.log('Artista selecionado:', artist);
    fetchArtistDetails(artist.id, accessToken, setSelectedArtist); // fetch para busca os detalhes do artista
    fetchTopTracks(artist.id, accessToken, setTopTracks); // fetch para busca as top tracks do artista
  };

  return (
    <div>
      {!accessToken && <AccessToken setAccessToken={setAccessToken} />}
      {accessToken && (
        <>

          <Layout
            artist={selectedArtist}
            topTracks={topTracks}
            onSearch={(value) => fetchData(value, accessToken, setResults)}
            results={results} // passa o results para o Layout.jsx
            onSelect={handleSelectArtist}
          />

        </>
      )}
    </div>
  );
}

export default App;
