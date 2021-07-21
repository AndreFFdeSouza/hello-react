import React, { useState } from 'react';
import Header from '../Header';
import axios from 'axios';

function Form(){
    const [campos, setCampos]= useState({
        txtQuestion:' ',
        txtRes: ' ',
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
            alert('Pergunta: ' + campos.txtQuestion +' Resposta: ' + campos.txtRes);
            console.log('Pergunta: ' + campos.txtQuestion +' Resposta: ' + campos.txtRes);
        });//then processa a resposta
    }

    return (
        <div>
            <Header title="React Form" />
            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>
                        <h2>Question Register</h2>
                    </legend>
                    <div class="input-group">
                        <span class="input-group-text">Question: </span>
                        <textarea class="form-control" aria-label="With textarea" name="txtQuestion" id="txtQuestion" onChange={handleInputChange}></textarea>
                    </div>
                    <div class="input-group">
                        <span class="input-group-text">Response:</span>
                        <textarea class="form-control" aria-label="With textarea" name="txtRes" id="txtRes" onChange={handleInputChange}></textarea>
                    </div>
                    <button type="submit" class="btn btn-outline-primary" value="Submit">Submit</button>
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