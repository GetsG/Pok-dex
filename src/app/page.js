"use client";
import {use, useState} from "react";
import estilos from "./page.module.css";

import Topo from "@/componentes/Topo/Topo";
import Card from "@/componentes/Card/Card";
import pokemons from "@/Imagens/Pokemons/listaPokes";
import { FaSearch } from "react-icons/fa";

import { FaFire } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { PiPlantBold } from "react-icons/pi";
import { FaBorderAll } from "react-icons/fa";

export default function Home() {

  const [listaPokemons, setListaPokemons] = useState(pokemons);
  const [pesquisa, setPesquisa] = useState("");
  const [tipo, settipo] = useState("");

  // FILTROS
  const pokemonsFiltrados = listaPokemons
    .filter((pokemon) => {
      if (!tipo || tipo === "") return true;
      return pokemon.elemento === tipo;
    })
    .filter((pokemon) => {
      if (!pesquisa || pesquisa.trim() === "") return true;
      return pokemon.nome.toLowerCase().includes(pesquisa.toLowerCase());
    });

  return (
    <div className={estilos.container}>
      <Topo/>

    

    <div className={estilos.filtros}>

    <form className={estilos.pesquisa} onSubmit={e => e.preventDefault()}>
      <input
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            placeholder="Buscar Pokémon..."
          />
          <button type="submit"><FaSearch /></button>
    </form>

      <button onClick={() => settipo("")} className={estilos.todos}><FaBorderAll /></button>
      <button onClick={() => settipo("fogo")} className={estilos.fogo}><FaFire /></button>
      <button onClick={() => settipo("agua")} className={estilos.agua}><IoIosWater /></button>
      <button onClick={() => settipo("raio")} className={estilos.raio}><AiFillThunderbolt /></button>
      <button onClick={() => settipo("ar")} className={estilos.vento}><FaWind /></button>
      <button onClick={() => settipo("planta")} className={estilos.planta}><PiPlantBold /></button>
    </div>

      <main className={estilos.cards}>

        {pokemonsFiltrados.map((poke) => (
        <Card key={poke.id} nome={poke.nome} elemento={poke.elemento} imagem={poke.imagem} hp={poke.hp} atk={poke.atk} def={poke.def}/>
      ))}

      </main>
      
    </div>
  );
}
