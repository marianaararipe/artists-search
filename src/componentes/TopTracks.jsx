import React from 'react';
import Track from './Track';
import estilos from './TopTracks.module.css'

const TopTracks = ({ tracks }) => {
  if (!tracks.length) return null; //se nn tiver valor, o componente nao renderiza nada

  return (
    <div className={estilos.top_tracks}>

      <h3>Top Músicas</h3>

      <div className={estilos.musicas_lista}>
        {tracks.slice(0, 7).map((track, index) => (
          <Track key={track.id} index={index} track={track} />
        ))}
      </div>
      
    </div>
  );
};

export default TopTracks;
