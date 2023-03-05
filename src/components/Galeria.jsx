import { useContext, useEffect, useState } from "react";
import "../assets/css/galeria.css";
import IconHeart from "./IconHeart";
import { LikeContext } from "../context/LikeContext";



export default function Home() {

  const { pic, setPic } = useContext(LikeContext);
  const obtieneData = async () => {
    const response = await fetch("/fotos.json");//"../public/fotos.json"
    const datos = await response.json();
    console.log(datos.photos[0].id)
    console.log(datos.photos[0].src['tiny'])
    setPic(datos.photos);
  }


  const { filled, setFilled } = useContext(LikeContext);

  //Lógica de estado de corazón
  //Se crea objeto, 
  const handleClick = (id) => {
    setFilled((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };
  //Id de imagen : valor (true o false)
  console.log(filled);


  //UseEffect para el que se consulte 1 ves la api
  useEffect(() => {
    obtieneData();
  }, []);
  
  return (
    <div className="galeria grid-columns-5 p-3">
      {pic.map((item) => (
        <article key={item.id}>
          <img src={item.src['tiny']} onClick={() => handleClick(item.id)} />
          <li>{item.photographer}</li>
          <IconHeart className="absolute" filled={filled[item.id]} onClick={() => handleClick(item.id)} />
        </article>
      ))}
    </div>
  );
}
