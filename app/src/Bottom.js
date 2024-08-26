import Link from 'next/link'
import React from 'react'


const Bottom = () => {
  return (
    <div className=' bg-teal-700 w-[100%] min-h-[300px] p-7 text-neutral-200 flex justify-center align-center items-center'>
     <div className='w-[100%] h-[100%] flex flex-col justify-center align-center items-center'>
     <div className='w-[100%] h-[100%] flex flex-col justify-center align-center items-center'>
     <p className='text-[22px] font-bold'>Ressignificar a dor abre espaço para vislumbrar aquilo que se deseja na vida</p> 
     <p className='text-[16px] mt-4'>A análise pessoal é uma forma de tratamento que visa isso aquilo outro e mais um negócio que eu tenho que</p>
     <p className='text-[16px] '>construir bem feito para não ficar uma merda e utilizar os conceitos de forma coerente e apropriada para pessoas que não conhecem.</p>
     {/* <Link href="/candidatos" className='mt-2 text-[16px]'>AGENDA UMA SESSÃO</Link> */}
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

export default Bottom