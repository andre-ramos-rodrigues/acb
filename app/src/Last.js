import Link from 'next/link'
import React from 'react'
import { ImLocation } from "react-icons/im";

const Last = () => {
  return (
    <div className=' bg-neutral-200 w-[100%] min-h-[300px] p-7 text-neutral-700 font-light flex justify-center align-center items-center'>
     <div className='w-[100%] h-[100%] flex flex-col justify-center align-center items-center'>
     <div className='w-[100%] h-[100%] flex flex-col justify-center align-center items-center'>
     <p className='text-[22px] font-bold'>Atendimentos Presenciais e Online</p> 
     <div className='flex flex-row justify-center align-center items-center gap-3'><ImLocation /><p className='text-[16px] '>Botafogo - Voluntários da Pátria</p></div>
     <div className='flex flex-row justify-center align-center items-center gap-3'><ImLocation /><p className='text-[16px] '> Tijuca - Saens Peña</p></div>
     <Link href="/candidatos" className='mt-2 text-[16px]'>AGENDA UMA SESSÃO</Link>
     </div>
     <div>
      {/* 
        RESSIGNIFICAR A DOR ABRE ESPAÇO PARA VISLUMBRAR AQUILO QUE SE DESEJA NA VIDA

        A análise pessoal é uma forma de tratamento que visa isso aquilo outro e mais um negócio que eu tenho que
        construir bem feito para não ficar uma merda e utilizar os conceitos de forma coerente e apropriada para pessoas que não conhecem.
      */}
     </div>
     </div>
    </div>
  )
}

export default Last