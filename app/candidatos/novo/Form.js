"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const Form = () => {
const [formData, setFormData] = useState({
nome: "",idade: "",bairro: "", profissao: "", jafez: "", telefone: "", email: "", 
comosoube: ""
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
      console.log(formData.nome)
      const response = await fetch('http://localhost:3000/api/novo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify({
          nome: formData.nome,
          bairro: formData.bairro,
          idade: formData.idade,
          profissao: formData.profissao,
          jafez: formData.jafez,
          telefone: formData.telefone,
          email: formData.email,
          comosoube: formData.comosoube
        }), // Convert data to JSON format
    });

          if (response.ok) {
            // Handle successful response
            const responseData = await response.json();
            console.log(responseData);
            router.push('/s', { scroll: false })

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
            <div className='flex justify-between gap-5'>
            <label htmlFor="nome"> Nome </label> 
            <input value={formData.nome} onChange={handleChange} type="text" id="nome" name="nome"></input>
            </div>

            <div className='flex justify-between gap-5'>
            <label htmlFor="telefone"> Telefone de contato / whatsapp </label> 
            <input value={formData.telefone} onChange={handleChange} type="text" id="telefone" name="telefone"></input>
            </div>

            <div className='flex justify-between gap-5'>
            <label htmlFor="email"> Email </label> 
            <input value={formData.email} onChange={handleChange} type="text" id="email" name="email"></input>
            </div>

            <div className='flex gap-5'>
            <label htmlFor="bairro"> Bairro </label> 
            <input value={formData.bairro} onChange={handleChange} type="text" id="bairro" name="bairro"></input>
            </div>

            <div className='flex gap-5'>
            <label htmlFor="profissao"> Profissão </label> 
            <input value={formData.profissao} onChange={handleChange} type="text" id="profissao" name="profissao"></input>
            </div>

            
            <div className='flex gap-5'>
            <label htmlFor="jafez"> Já fez terapia anteriormente? </label> 
            <input value="sim" onChange={handleChange} type="radio" id="sim" name="jafez" />
            <label htmlFor="sim">Sim</label><br></br>
            <input value="nao" onChange={handleChange} type="radio" id="nao" name="jafez" />
            <label htmlFor="nao">Não</label><br></br>
            </div>
            
            <div className='flex gap-5'>
            <label htmlFor="comosoube"> Como me achou ?</label> 
            <input value="google" onChange={handleChange} type="radio" id="google" name="comosoube" />
            <label htmlFor="google">Google</label><br></br>
            <input value="indicacao" onChange={handleChange} type="radio" id="indicacao" name="comosoube"/>
            <label htmlFor="indicacao">Indicação</label><br></br>
            <input value="instagram" onChange={handleChange} type="radio" id="instagram" name="comosoube" />
            <label htmlFor="instagram">Instagram</label><br></br>
            <input value="outro" onChange={handleChange} type="radio" id="outro" name="comosoube" />
            <input value="linkedin" onChange={handleChange} type="radio" id="linkedin" name="comosoube" />
            <label htmlFor="linkedin">Linkedin</label><br></br>
            <label htmlFor="outro">Outro</label><br></br>            
            </div>

            {/*<div className='p-2 bg-blue-300 cursor-pointer rounded-md font-semibold' onClick={() => handleSubmit()}>Salvar</div>*/}
            <button className='p-2 bg-blue-300 cursor-pointer rounded-md font-semibold' type="submit">Salvar</button>

        </form>
    </main>
  )
}

export default Form