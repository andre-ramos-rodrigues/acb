"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Painel = () => {
    const [candidatos,setCandidatos] = useState([{}])

    function calculateAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        
        // Calculate the difference in years and months
        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        
        // Adjust for negative months
        if (months < 0 || (months === 0 && today.getDate() < birth.getDate())) {
            years--;
            months += 12;
        }
        
        return { years, months };
    }

    useEffect(() => {
        /*
        const getCandidatos = async() => {

            try {
            const response = await fetch("http://localhost:3000/api/getcandidatos", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json', // Specify the content type as JSON
                },
            })

            if (response.ok) {
                // Handle successful response
                const responseData = await response.json();
                setCandidatos(responseData.rows)
                console.log(responseData);
            } else {
                // Handle errors
                console.error('Failed to insert data:', response.statusText);
            }
            }catch(err){
                console.log("erro: ", err.message)
            }
        }

        getCandidatos()*/

    }, [])

  return (
    <main className='bg-neutral-200 min-w-[full] min-h-[full]'>
        { /* 
        <div>
            Candidatos Inscritos
            <div className='flex flex-col'>
                {candidatos.length > 0 && 
                candidatos.map((c) => <Link href={`/candidatos/cpf/${c.cpf}`} key={c.cpf}>{c.nome} --- {candidatos.length > 0 && (calculateAge(c.nascimento))?.years} 
                anos e {candidatos.length > 0 && (calculateAge(c.nascimento))?.months} meses</Link>)
                }
            </div>
        </div>
        */}

        <div>

        </div>

    </main>
  )
}

export default Painel