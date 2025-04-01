import React from 'react';
import estilos from './ArtistDetail.module.css'
import { abrirPaginaArtista } from '../SpotifyServices';


const ArtistDetail = ({ artist }) => {
  if (!artist) return null;

  return (
    <div className={estilos.artist_detail}>
      <img src={artist.images[0]?.url} alt={artist.name} />

      <h2 
      className={estilos.clique} 
      onClick={() => abrirPaginaArtista(artist.id)}>{artist.name}</h2>

      <p>{artist.followers.total.toLocaleString()} seguidores</p>

      <p>{artist.genres.join(', ')}</p>
    </div>
  );
};

export default ArtistDetail;
