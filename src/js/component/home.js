import React, { useState } from "react";

export function Home() {
	const [tareas, setTareas] = useState("");
	
	const [lista, setLista] = useState([""]);  //listado

return (
    <div className ="text-center mt-5">
        <h1 className="display-3 text -primary">TodoList</h1>
        <input 
            value={tareas}
            onChange={e=>{
                setTareas(e-target.value);
            
            }}
            
            onKeyPress={e=>{
                if(e.key == "Entrar"){
                    //adicionar la tarea al arreglo
                    setLista(lista.concat(tareas));
                    setTareas(""); //limpiar imput
                    console.log()lista;
                }

            }}
    />

    {lista.map((item, index)) => {
        return <li key={index}> {item}</li>;
    })}


