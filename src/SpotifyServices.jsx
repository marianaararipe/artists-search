
//busca artistas com base na SearchBar
export const fetchData = async (value, accessToken, setResults) => {
      if (!value) return;

      try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(value)}&type=artist`, {
                  headers: { Authorization: `Bearer ${accessToken}` },
            });

            if (response.ok) {
                  const data = await response.json();
                  if (data.artists) {
                        setResults(data.artists.items); // Atualiza os resultados
                  }
            } else {
                  console.error("Erro na requisição:", response.status, response.statusText);
            }
      } catch (error) {
            console.error("Erro ao buscar artistas:", error);
      }
};


//pega o id do artista e pega os detalhes
export const fetchArtistDetails = async (artistId, accessToken, setSelectedArtist) => {
      try {
            const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
                  headers: { Authorization: `Bearer ${accessToken}` },
            });

            if (response.ok) {
                  const data = await response.json();
                  setSelectedArtist(data); 

                  
            } else {
                  console.error("Erro ao buscar detalhes do artista:", response.status, response.statusText);
            }
      } catch (error) {
            console.error("Erro ao buscar detalhes do artista:", error);
      }
};


//musicas mais populares do artista
export const fetchTopTracks = async (artistId, accessToken, setTopTracks) => {
      try {
            const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
                  headers: { Authorization: `Bearer ${accessToken}` },
            });

            if (response.ok) {
                  const data = await response.json();
                  setTopTracks(data.tracks); // Atualiza o estado com as top tracks
            } else {
                  console.error("Erro ao buscar top tracks:", response.status, response.statusText);
            }
      } catch (error) {
            console.error("Erro ao buscar top tracks:", error);
      }
};


// abre a página do artista no Spotify
export const abrirPaginaArtista = (artistId) => {
      if (!artistId) return;
      const url = `https://open.spotify.com/artist/${artistId}`;
      window.open(url, '_blank');
};

// abre a página da música no Spotify
export const abrirPaginaMusica = (trackId) => {
      if (!trackId) return;
      const url = `https://open.spotify.com/track/${trackId}`;
      window.open(url, '_blank');
};
