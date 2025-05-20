import React from 'react';
import estilos from './Track.module.css'
import { abrirPaginaMusica } from '../SpotifyServices';


const Track = ({ index, track }) => {

      //funcao para formatar a duracao (a API do Spotify retorna ela em milissegundos)
      const formatoDuracao = (durationMs) => {
            const minutes = Math.floor(durationMs / 60000);
            const seconds = Math.floor((durationMs % 60000) / 1000);
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      };


      return (
            <figure className={estilos.conteiner} onClick={() => abrirPaginaMusica(track.id)}>
                  <figcaption className={estilos.ranking}>{index + 1}</figcaption>

                  <div className={estilos.info}>

                        <figcaption className={estilos.name}>
                              {track.name}
                        </figcaption>


                        <figcaption className={estilos.artistas}>
                              {track.artists.map(a => a.name).join(', ')} {/*coloca , se houver mais de um artista */}
                        </figcaption>

                  </div>

                  <figcaption className={estilos.tempo}>
                        {formatoDuracao(track.duration_ms)}
                  </figcaption>

            </figure>

      );
};

export default Track;
