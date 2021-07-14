import React, { useState } from 'react';
import Header from '../Header';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
//import { response } from 'express';

function Form(){
    const [campos, setCampos]= useState({
        txtTítulo:' ',
        txtOption: ' ',
        //cmbUF: '0'
    });
    function handleInputChange(event){
        campos[event.target.name] = event.target.value;
        setCampos(campos);
        console.log(event.target);
    }
    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3031/cadastro', campos)//post faz requisição ao backend
        .then(response =>{
            alert('Pergunta: ' + campos.txtTítulo +' Resposta: ' + campos.txtOption);
        });//then processa a resposta
    }

    return (
        <div>
            <Header title="React Form" />
            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>
                        <h2>Cadastro de Perguntas</h2>
                    </legend>
                    <div>
                        <label> Título :
                            <input type="text" name="txtTítulo" id="txtTítulo" onChange={handleInputChange} />
                        </label>
                    </div>
                    <div>
                        <label> Opções :
                            <input type="text" name="txtOption" id="txtOption" onChange={handleInputChange} />
                        </label>
                    </div>
                    <input type="submit" value="Salvar" />
                </fieldset>
            </form>
        </div>
    )
}

export default Form;
/* essa parte foi retirada
                    <div>
                        <label> UF:
                            <select name="cmbUF" id="cmbUF" onChange={handleInputChange} >
                                <option value="0">Selecione uma opção</option>
                                {estados.map(estado =>(<option key={estado.id} value={estado.id} >{estado.uf}</option>))}
                            </select>
                        </label>
                    </div>

    const [estados, setEstados]= useState([]);
    useEffect(() => {
        axios.get('http://localhost:3030/estados').then(response => {
            setEstados(response.data);
        })
    }, []);

                    */