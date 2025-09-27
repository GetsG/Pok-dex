import Image from "next/image";

import Fogo from "@/Imagens/Elementos/chama.png"
import Agua from "@/Imagens/Elementos/goticula.png"
import Ar from "@/Imagens/Elementos/vento.png"
import Raio from "@/Imagens/Elementos/parafuso.png"
import Planta from "@/Imagens/Elementos/folha.png"

import estilos from "./Card.module.css"

export default function Card(props){
    return(
        <div className={estilos.container}>

            <div className={props.elemento === "fogo"  
                ?(estilos.titulo_fogo)
                : props.elemento === "agua" 
                ?(estilos.titulo_agua)
                : props.elemento === "ar" 
                ?(estilos.titulo_ar)
                : props.elemento === "raio" 
                ?(estilos.titulo_raio) 
                : props.elemento === "planta" 
                && (estilos.titulo_planta)}>

                <h1>{props.nome}</h1>

                {props.elemento === "fogo" ? (
                    <Image src={Fogo} className={estilos.elemento}/>
                ) : props.elemento === "agua" ? (
                    <Image src={Agua} className={estilos.elemento}/>
                ) : props.elemento === "ar" ? (
                    <Image src={Ar} className={estilos.elemento}/>
                ) : props.elemento === "raio" ? (
                    <Image src={Raio} className={estilos.elemento}/>
                ) : props.elemento === "planta" && (
                    <Image src={Planta} className={estilos.elemento}/>
                )}

            </div>

                <div className={estilos.fundo}>
                    <Image src={props.imagem} className={estilos.foto_pokemon}/>

                <div className={estilos.atributos}>
                    <p>HP {props.hp}</p>
                    <p>ATK {props.atk}</p>
                    <p>DEF {props.def}</p>
                </div>

                </div>

        </div>
    )
}