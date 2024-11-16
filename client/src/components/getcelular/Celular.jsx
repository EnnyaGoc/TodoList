import React, { useState, useEffect } from "react";
import "./celular.css"
import { Link } from "react-router-dom";
import axios from "axios";
import "./celular.css";
import toast from "react-hot-toast";


const Celular = () => {

    const [celulares, setCelulares] = useState([]);
  

    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get("http://localhost:8000/api/getall");
            setCelulares(response.data);
        }

        fetchData();

    },[])

    const deleteCelular = async (celularId) => {
        await axios.delete(`http://localhost:8000/api/delete/${celularId}`)
        .then((response) => {
            setCelulares((prevCelular) => prevCelular.filter((celular) => celular._id !== celularId))
            toast.success(response.data.msg, {position: 'top-right'})
        })
        .catch((error) => {
            console.log(error);
        })

    }

    return(
        <div className="celularTable">
            <Link to={"/add"} className="addButton">Novo Celular</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Capacidade de Memória (GB)</th>
                        <th>Data de Lançamento</th>
                        <th>Ações</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        celulares.map((celular, index) => {
                            return(
                                <tr key={celular._id}>
                                    
                        <td>{celular.marca}</td>
                        <td>{celular.modelo}</td>
                        <td>{celular.memoria}</td>
                        <td>{new Date(celular.lancamento).toLocaleDateString()}</td>
                        <td className="actionButtons">
                            <button onClick={() => deleteCelular(celular._id)}>Excluir</button>
                            <Link to={`/edit/`+celular._id}>Alterar</Link>
                        </td>
                    </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            </div>
    )
}

export default Celular;