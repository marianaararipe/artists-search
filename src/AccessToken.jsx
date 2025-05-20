import React, { useState, useEffect } from 'react';


export const AccessToken = ({ setAccessToken }) => {
  const clientId = 'daf6839b3d1c4751830e2deb62a0e96d';
  const clientSecret = 'dac9abd6d453478abd714238a13bec92';
  const authToken = btoa(`${clientId}:${clientSecret}`);

  useEffect(() => {
    const getAccessToken = async () => {

      //chamada padrao da API
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${authToken}`,
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.access_token); // Passa o token para o componente pai
        console.log("Token de acesso obtido com sucesso");
      } else {
        console.log("Não foi possível obter o token de acesso");
      }
    };

    getAccessToken();
  }, [setAccessToken]); //chama o useEffect para rodar apenas uma vez


  
  //mostrar "Carregando..." enquanto o token nao é verificado
  return <div>Carregando...</div>;
};

