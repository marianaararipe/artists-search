import React from 'react';
import { SearchBar } from '../componentes/SearchBar';
import ArtistDetail from '../componentes/ArtistDetail';
import TopTracks from '../componentes/TopTracks';
import estilos from './Layout.module.css';
import { SearchResultsList } from '../componentes/SearchResultsList';



const Layout = ({ artist, topTracks, onSearch, results, onSelect }) => {


      return (
            <div className={estilos.layout_container}>

                  <div class={estilos.header}>
                        <figure className={estilos.cabecalho}>
                              <div className={estilos.search_bar_container}>
                                    <SearchBar onSearch={onSearch} />
                              </div>

                              {results && results.length > 0 && (
                                    <SearchResultsList results={results} onSelect={onSelect}

                                    />
                              )}
                        </figure>
                  </div>


                  <div className={estilos.content}>
                        {artist && (
                              <div className={estilos.artist_detail_container}>
                                    <ArtistDetail artist={artist} />
                              </div>
                        )}
                        {topTracks.length > 0 && (
                              <div className={estilos.tracks_container}>
                                    <TopTracks tracks={topTracks} />
                              </div>
                        )}
                  </div>


            </div>
      );
};

export default Layout;
