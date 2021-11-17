import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 300px;
  }
`;

function App() {
  // State de Frases
  const [frase, setFrase] = useState({});

  // Effect for showing the phrase
  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const frase = (
      await (
        await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
      ).json()
    )[0];
    setFrase(frase);
  };

  return (
    <Contenedor>
      <Frase frase={frase}></Frase>
      <Boton onClick={consultarAPI}>Obtener frase</Boton>
    </Contenedor>
  );
}

export default App;
