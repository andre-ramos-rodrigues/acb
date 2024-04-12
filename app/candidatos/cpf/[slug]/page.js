"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Page = ({params}) => {
  const [candidato,setCandidato] = useState({})
  //const router = useRouter()

  useEffect(() => {

    const getCandidato = async() => {
      //const { cpf } = router.query;
      const response = await fetch("http://localhost:3000/api/getcandidatoporcpf", 
        {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json', // Specify the content type as JSON
          },
          body: JSON.stringify({
            cpf: params.slug
          })
        }
      )

      if(response.ok) {
        const responseData = await response.json();
        //console.log(responseData);
        setCandidato(responseData)
        console.log(candidato)
      } else{
        console.log(response.statusText)
      }
    }

    getCandidato()
  }, [])
  return (
    <div>
      {
        candidato && 
          <div>
            {candidato.nome}
            {candidato.bairro}
          </div>
        
      }
    </div>
  )
}

export default Page