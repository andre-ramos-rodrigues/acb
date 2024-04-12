"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const Form = () => {
const [formData, setFormData] = useState({
nomeCandidato: "",enderecoCandidato: "",bairroCandidato: "", cpfCandidato: "", sexoCandidato: "", nascimentoCandidato: "", nomeResponsavel: "", 
cpfResponsavel: "", parentescoResponsavel: "", escolaridadeResponsavel: "", situacaoProfissional: ""
});

  const router = useRouter()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    //const response = await axios.get('http://localhost:3000/api/hello');
    /*const response = await axios.get('http://localhost:3000/api/testconnection');
    console.log(response.data)
    return response.data*/

    try {
      console.log(formData.nomeCandidato)
      const response = await fetch('http://localhost:3000/api/novocandidato', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify({
          nome: formData.nomeCandidato,
          endereco: formData.enderecoCandidato,
          bairro: formData.bairroCandidato,
          cpf: formData.cpfCandidato,
          sexo: formData.sexoCandidato,
          nascimento: formData.nascimentoCandidato,
          nomeresponsavel: formData.nomeResponsavel,
          cpfresponsavel: formData.cpfResponsavel,
          parentesco: formData.parentescoResponsavel,
          escolaridade: formData.escolaridadeResponsavel,
          profissional: formData.situacaoProfissional
        }), // Convert data to JSON format
    });

          if (response.ok) {
            // Handle successful response
            const responseData = await response.json();
            console.log(responseData);
            router.push('/candidatos', { scroll: false })

        } else {
            // Handle errors
            console.error('Failed to insert data:', response.statusText);
        }

    } catch (err) {
      console.log(err.message)
    }
};

  return (
    <main className='w-[100vw] items-center'>
        <form onSubmit={handleSubmit} action='' method='post' className='flex flex-col gap-7 bg-gray-200 p-6 rounded-md items-center my-5 mx-7
        '>
            <h1 className='font-bold '>Dados de Identificação</h1>

            <div className='flex justify-between gap-5'>
            <label htmlFor="nomeCandidato"> Nome do Candidato</label> 
            <input value={formData.nomeCandidato} onChange={handleChange} type="text" id="nomeCandidato" name="nomeCandidato"></input>
            </div>

            <div className='flex gap-5'>
            <label htmlFor="enderecoCandidato"> Endereço</label> 
            <input value={formData.enderecoCandidato} onChange={handleChange} type="text" id="enderecoCandidato" name="enderecoCandidato"></input>
            </div>

            <div className='flex gap-5'>
            <label htmlFor="bairroCandidato"> Bairro</label> 
            <input value={formData.bairroCandidato} onChange={handleChange} type="text" id="bairroCandidato" name="bairroCandidato"></input>
            </div>

            <div className='flex gap-5'>
            <label htmlFor="cpfCandidato"> CPF do candidato</label> 
            <input value={formData.cpfCandidato} onChange={handleChange} type="text" id="cpfCandidato" name="cpfCandidato"></input>
            </div>

            
            <div className='flex gap-5'>
            <label htmlFor="sexoCandidato"> Sexo</label> 
            <input value="masculino" onChange={handleChange} type="radio" id="masculino" name="sexoCandidato" />
            <label htmlFor="masculino">Masculino</label><br></br>
            <input value="feminino" onChange={handleChange} type="radio" id="feminino" name="sexoCandidato" />
            <label htmlFor="feminino">Feminino</label><br></br>
            </div>
            
            <div className='flex gap-5'>
            <label htmlFor="nascimentoCandidato"> Data de nascimento</label> 
            <input value={formData.nascimentoCandidato} onChange={handleChange} type="date" id="nascimentoCandidato" name="nascimentoCandidato"></input>
            </div>

            <h1 className='font-bold'>Responsável que mora com a criança</h1>

            <div className='flex justify-between gap-5'>
            <label htmlFor="nomeResponsavel"> Nome do Responsável</label> 
            <input value={formData.nomeResponsavel} onChange={handleChange} type="text" id="nomeResponsavel" name="nomeResponsavel"></input>
            </div>

            <div className='flex justify-between gap-5'>
            <label htmlFor="cpfResponsavel"> CPF do Responsável</label> 
            <input value={formData.cpfResponsavel} onChange={handleChange} type="text" id="cpfResponsavel" name="cpfResponsavel"></input>
            </div>

            <div className='flex justify-between gap-5'>
            <label htmlFor="parentescoResponsavel"> Parentesco com a criança</label> 
            <input value={formData.parentescoResponsavel} onChange={handleChange} type="text" id="parentescoResponsavel" name="parentescoResponsavel"></input>
            </div>

            <div className='flex justify-between gap-5'>
            <label htmlFor="escolaridadeResponsavel"> Escolaridade</label> 
            <input value={formData.escolaridadeResponsavel} onChange={handleChange} type="text" id="escolaridadeResponsavel" name="escolaridadeResponsavel"></input>
            </div>

            <div className='flex gap-5'>
            <label htmlFor="situacaoProfissional"> Situação profissional</label> 
            <input value="empregado" onChange={handleChange} type="radio" id="empregado" name="situacaoProfissional" />
            <label htmlFor="empregado">empregado</label><br></br>
            <input value="desempregado" onChange={handleChange} type="radio" id="desempregado" name="situacaoProfissional" />
            <label htmlFor="desempregado">desempregado</label><br></br>
            <input value="autonomo" onChange={handleChange} type="radio" id="autonomo" name="situacaoProfissional"/>
            <label htmlFor="autonomo">autônomo</label><br></br>
            <input value="aposentado" onChange={handleChange} type="radio" id="aposentado" name="situacaoProfissional" />
            <label htmlFor="aposentado">aposentado</label><br></br>
            <input value="outro" onChange={handleChange} type="radio" id="outro" name="situacaoProfissional" />
            <label htmlFor="outro">outro</label><br></br>            
            </div>

            <h1 className='font-bold'>Comonentes do grupo familiar</h1>

            <h1 className='font-bold'>Outros rendimentos</h1>

            <h1 className='font-bold'>Condições de saúde da família</h1>

            <h1 className='font-bold'>Despesas mensais básicas do grupo familiar</h1>

            {/*<div className='p-2 bg-blue-300 cursor-pointer rounded-md font-semibold' onClick={() => handleSubmit()}>Salvar</div>*/}
            <button className='p-2 bg-blue-300 cursor-pointer rounded-md font-semibold' type="submit">Salvar</button>

        </form>
    </main>
  )
}

export default Form