"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const Form = () => {
const [formData, setFormData] = useState({
nome: "",idade: "",bairro: "", profissao: "", jafez: "", telefone: "", email: "", 
comosoube: "", pronome: "", atendimento: "", horario: ""
});
const [err,setErr] = useState({
  msg: "", isOn: false
})
const [succ,setSucc] = useState({
  msg: "", isOn: false
})
  const router = useRouter()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    setErr({
      isOn: false,
      msg: ""
    })
    //const response = await axios.get('http://localhost:3000/api/hello');
    /*const response = await axios.get('http://localhost:3000/api/testconnection'); 
    console.log(response.data)
    return response.data*/
    // http://localhost:3000/api/novocandidato

    if(formData.nome === '' || formData.telefone === '' || formData.email === '' || formData.atendimento === '' || formData.jafez === '' || formData.idade === '' || formData.horario === ''){
      console.log('preencha os dados obrigatórios')

      setErr({
        isOn: true,
        msg: "Os seguintes campos são obrigatórios: nome, telefone, email, idade, preferência de atendimento (horário e local) e se já fez terapia anteriormente"
      })

      return
    }


    try {
      console.log(formData.nome)
      const response = await fetch(`/api/novocandidato`, {
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
          comosoube: formData.comosoube,
          pronome: formData.pronome,
          atendimento: formData.atendimento,
          horario: formData.horario
        }), // Convert data to JSON format
    });

          if (response.ok) {
            // Handle successful response
            setSucc({
              msg: "Mensagem enviada com sucesso",
              isOn: true
            })
            const responseData = await response.json();
            console.log(responseData);
            //router.push('/', { scroll: false })

        } else {
            // Handle errors
            console.error('Failed to insert data:', response.statusText);
        }

    } catch (err) {
      console.log(err.message)
    }
};

  return (
    <main className='items-center'>
        <form onSubmit={handleSubmit} action='' method='post' className='flex flex-col gap-7 bg-neutral-500 text-neutral-200 p-6 rounded-md items-center my-5 mx-7'>
            <div className='flex justify-between gap-5 items-center'>
            <label htmlFor="nome"> Nome* </label> 
            <input className='text-neutral-700 bg-neutral-200 p-1 rounded-sm' value={formData.nome} onChange={handleChange} type="text" id="nome" name="nome"></input>
            </div>

            {/*
            <div className='flex justify-between gap-5 items-center'>
            <label htmlFor="pronome"> Pronome </label> 
            <input className=' text-neutral-700 bg-neutral-200 p-1 rounded-sm' value={formData.pronome} onChange={handleChange} type="text" id="pronome" name="pronome"></input>
            </div>
            */}

            <div className='flex justify-between gap-5 items-center'>
            <label htmlFor="idade"> Idade* </label> 
            <input className=' text-neutral-700 bg-neutral-200 p-1 rounded-sm' value={formData.idade} onChange={handleChange} type="number" id="idade" name="idade"></input>
            </div>

            <div className='flex justify-between gap-5 items-center'>
            <label htmlFor="telefone"> Telefone de contato / whatsapp* </label> 
            <input className=' text-neutral-700 bg-neutral-200 p-1 rounded-sm' value={formData.telefone} onChange={handleChange} type="text" id="telefone" name="telefone" maxLength="13"></input>
            </div>

            <div className='flex justify-between gap-5 items-center'>
            <label htmlFor="email"> Email* </label> 
            <input className=' text-neutral-700 bg-neutral-200 p-1 rounded-sm' value={formData.email} onChange={handleChange} type="text" id="email" name="email"></input>
            </div>

            <div className='flex gap-5 items-center'>
            <label htmlFor="bairro"> Bairro </label> 
            <input className=' text-neutral-700 bg-neutral-200 p-1 rounded-sm' value={formData.bairro} onChange={handleChange} type="text" id="bairro" name="bairro"></input>
            </div>

            <div className='flex gap-5 items-center'>
            <label htmlFor="profissao"> Profissão </label> 
            <input className=' text-neutral-700 bg-neutral-200 p-1 rounded-sm' value={formData.profissao} onChange={handleChange} type="text" id="profissao" name="profissao"></input>
            </div>

            
            <div className='flex gap-5 items-center'>
            <label htmlFor="jafez"> Já fez terapia anteriormente?* </label> 
            <input value="sim" onChange={handleChange} type="radio" id="sim" name="jafez" />
            <label htmlFor="sim">Sim</label><br></br>
            <input value="nao" onChange={handleChange} type="radio" id="nao" name="jafez" />
            <label htmlFor="nao">Não</label><br></br>
            </div>
            
            <div className='flex gap-5 items-center'>
            <label htmlFor="comosoube"> Como me achou ?</label> 
            <input value="google" onChange={handleChange} type="radio" id="google" name="comosoube" />
            <label htmlFor="google">Google</label><br></br>
            <input value="indicacao" onChange={handleChange} type="radio" id="indicacao" name="comosoube"/>
            <label htmlFor="indicacao">Indicação</label><br></br>
            <input value="instagram" onChange={handleChange} type="radio" id="instagram" name="comosoube" />
            <label htmlFor="instagram">Instagram</label><br></br>
            <input value="linkedin" onChange={handleChange} type="radio" id="linkedin" name="comosoube" />
            <label htmlFor="linkedin">Linkedin</label><br></br>
            <input value="outro" onChange={handleChange} type="radio" id="outro" name="comosoube" />
            <label htmlFor="outro">Outro</label><br></br>            
            </div>

            <div className='flex gap-5 items-center'>
            <label htmlFor="atendimento"> Preferência de local atendimento* </label> 
            <input value="Online" onChange={handleChange} type="radio" id="Online" name="atendimento" />
            <label htmlFor="Online">Online</label><br></br>    
            <input value="Tijuca" onChange={handleChange} type="radio" id="Tijuca" name="atendimento" />
            <label htmlFor="Tijuca">Tijuca - presencial</label><br></br>
            <input value="Botafogo" onChange={handleChange} type="radio" id="Botafogo" name="atendimento"/>
            <label htmlFor="Botafogo">Botafogo - presencial</label><br></br>   
            </div>

            <div className='flex gap-5 items-center'>
            <label htmlFor="horario"> Preferência de horário de atendimento* </label> 
            <input value="manha" onChange={handleChange} type="radio" id="manha" name="horario" />
            <label htmlFor="manha">Manhã</label><br></br>    
            <input value="tarde" onChange={handleChange} type="radio" id="tarde" name="horario" />
            <label htmlFor="tarde">Tarde</label><br></br>
            <input value="noite" onChange={handleChange} type="radio" id="noite" name="horario"/>
            <label htmlFor="noite">Noite</label><br></br>   
            </div>
            {/*<div className='p-2 bg-blue-300 cursor-pointer rounded-md font-semibold' onClick={() => handleSubmit()}>Salvar</div>*/}
            <button className='p-2 bg-neutral-200 text-neutral-700 hover:text-green-600 font-semibold font-roboto cursor-pointer rounded-md ' type="submit">Enviar</button>

        </form>
          {
            succ && <div className='font-semibold text-green-600 self-center align-center text-center w-[100%]'>{succ.msg}</div>
           }
           {
            err && <div className='font-semibold text-red-600 self-center align-center text-center w-[100%]'>{err.msg}</div>
           }
    </main>
  )
}

export default Form