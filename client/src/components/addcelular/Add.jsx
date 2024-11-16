import React, { useState } from "react";
import "./add.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";



const Add = () => {

    const celulares = {
        marca:"",
        modelo:"",
        memoria:"",
        lancamento:""
    }
    const[celular, setCelular] = useState();
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setCelular({...celular, [name]:value});

    }

    const submitForm = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8000/api/create", celular)
        .then((response) => {
            toast.success(response.data.msg, {position:"top-right"})
            navigate("/")
        }).catch(error => console.log(error))
    }
    return(
        <div className="addCelular">
            <Link to={"/"}>Cancelar</Link>
            <h3>Celular</h3>
            <form className="addCelularForm" onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="marca">Marca</label>
                    <input type="text" onChange={inputHandler} id="marca" name="marca" autoComplete="off" placeholder="Marca" />
                </div>
                <div className="inputGroup">
                    <label htmlFor="modelo">Modelo</label>
                    <input type="text" onChange={inputHandler} id="modelo" name="modelo" autoComplete="off" placeholder="Marca" />
                </div>
                <div className="inputGroup">
                    <label htmlFor="memoria">Memória</label>
                    <input type="number" onChange={inputHandler} id="memoria" name="memoria" autoComplete="off" placeholder="Memória" />
                </div>
                <div className="inputGroup">
                    <label htmlFor="lancamento">Lançamento</label>
                    <input type="date" onChange={inputHandler} id="lancamento" name="lancamento" autoComplete="off"  />
                </div>
                <div className="inputGroup">
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default Add