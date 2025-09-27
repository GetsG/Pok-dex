import estilos from "./page.module.css"

import Topo from "@/componentes/Topo/Topo"
import Card from "@/componentes/Card/Card"

import Pikachu from "@/Imagens/Pokemons/Pikachu.png"
import Charmander from "@/Imagens/Pokemons/Charmander.png"
import Bulbasaur from "@/Imagens/Pokemons/Bulbasaur.png"
import Pidgey from "@/Imagens/Pokemons/Pidgey.png"
import Squirtle from "@/Imagens/Pokemons/Squirtle.png"
import Vulpix from "@/Imagens/Pokemons/Vulpix.png"
import Psyduck from "@/Imagens/Pokemons/Psyduck.png"
import Oddish from "@/Imagens/Pokemons/Oddish.png"

export default function Home() {
  return (
    <div className={estilos.container}>
      <Topo/>

      <main className={estilos.cards}>
        <Card nome={"Pikachu"} elemento={"raio"} imagem={Pikachu} hp={35} atk={55} def={40}/>
        <Card nome={"Charmander"} elemento={"fogo"} imagem={Charmander} hp={39} atk={52} def={43}/>
        <Card nome={"Squirtle"} elemento={"agua"} imagem={Squirtle} hp={44} atk={48} def={65}/>
        <Card nome={"Pidgey"} elemento={"ar"} imagem={Pidgey} hp={40} atk={45} def={40}/>
        <Card nome={"Psyduck"} elemento={"agua"} imagem={Psyduck} hp={50} atk={52} def={48}/>
        <Card nome={"Bulbasaur"} elemento={"planta"} imagem={Bulbasaur} hp={45} atk={49} def={49}/>
        <Card nome={"Vulpix"} elemento={"fogo"} imagem={Vulpix} hp={38} atk={41} def={40}/>
        <Card nome={"Oddish"} elemento={"planta"} imagem={Oddish} hp={45} atk={50} def={55}/>
      </main>
      
    </div>
  );
}
