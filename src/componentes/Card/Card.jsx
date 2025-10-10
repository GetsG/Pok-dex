import Image from "next/image";

import Fogo from "@/Imagens/Elementos/chama.png"
import Agua from "@/Imagens/Elementos/goticula.png"
import Ar from "@/Imagens/Elementos/vento.png"
import Raio from "@/Imagens/Elementos/parafuso.png"
import Planta from "@/Imagens/Elementos/folha.png"

import estilos from "./Card.module.css"

export default function Card({nome, elemento, imagem, hp, atk, def}){
    return(
        <div className={estilos.container}>

            <div className={elemento === "fogo"  
                ?(estilos.titulo_fogo)
                : elemento === "agua" 
                ?(estilos.titulo_agua)
                : elemento === "ar" 
                ?(estilos.titulo_ar)
                : elemento === "raio" 
                ?(estilos.titulo_raio) 
                : elemento === "planta" 
                && (estilos.titulo_planta)}>

                <h1>{nome}</h1>

                {elemento === "fogo" ? (
                    <Image src={Fogo} alt="Ícone do elemento fogo" className={estilos.elemento}/>
                ) : elemento === "agua" ? (
                    <Image src={Agua} alt="Ícone do elemento agua" className={estilos.elemento}/>
                ) : elemento === "ar" ? (
                    <Image src={Ar} alt="Ícone do elemento ar" className={estilos.elemento}/>
                ) : elemento === "raio" ? (
                    <Image src={Raio} alt="Ícone do elemento raio" className={estilos.elemento}/>
                ) : elemento === "planta" && (
                    <Image src={Planta} alt="Ícone do elemento planta" className={estilos.elemento}/>
                )}

            </div>

                <div className={estilos.fundo}>
                    <Image src={imagem} alt="Foto Pokemon" className={estilos.foto_pokemon}/>

                <div className={estilos.atributos}>
                    <p>HP {hp}</p>
                    <p>ATK {atk}</p>
                    <p>DEF {def}</p>
                </div>

                </div>

        </div>
    )
}