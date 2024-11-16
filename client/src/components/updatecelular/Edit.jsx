import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../addcelular/add.css";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {

    const celulares = {
        marca:"",
        modelo:"",
        memoria:"",
        lancamento:""
    }

    const {id} = useParams();
    const navigate = useNavigate();
    const [celular, setCelular] = useState([celulares]);

    const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setCelular({...celular, [name]:value});
        console.log(celular);
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getone/${id}`)
        .then((response) => {
            setCelular(response.data);

        })
        .catch((error) => {
            console.log(error);
        })
    },[id])


    const submitForm = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/${id}`, celular)
        .then((response) => {
            toast.success(response.data.msg, {position:"top-right"})
            navigate("/")
        }).catch(error => console.log(error))
    }

    return(
        <div className="addCelular">
        <Link to={"/"}>Voltar</Link>
        <h3>Alterar Celular</h3>
        <form className="addCelularForm" onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="marca">Marca</label>
                <input type="text" value={celular.marca} onChange={inputChangeHandler}id="marca" name="marca" autoComplete="off" placeholder="Marca" />
            </div>
            <div className="inputGroup">
                <label htmlFor="modelo">Modelo</label>
                <input type="text" value={celular.modelo} onChange={inputChangeHandler}id="modelo" name="modelo" autoComplete="off" placeholder="Modelo" />
            </div>
            <div className="inputGroup">
                <label htmlFor="memoria">Memória</label>
                <input type="number" value={celular.memoria} onChange={inputChangeHandler}id="memoria" name="memoria" autoComplete="off" placeholder="Memória" />
            </div>
            <div className="inputGroup">
                <label htmlFor="lancamento">Lançamento</label>
                <input type="date" value={celular.lancamento} onChange={inputChangeHandler}id="lancamento" name="lancamento" autoComplete="off"  />
            </div>
            <div className="inputGroup">
                <button type="submit">Salvar</button>
            </div>
        </form>
    </div>
    )
}

export default Edit