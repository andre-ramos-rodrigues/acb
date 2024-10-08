import Link from 'next/link'
import React from 'react'


const Frase = () => {
  return (
    <div className=' bg-[#698b7f] w-[100%] min-h-[300px] p-7 text-slate-50 flex justify-center align-center items-center'>
     <div className='w-[100%] h-[100%] flex flex-col justify-center align-center items-center'>
     <div className='w-[100%] h-[100%] flex flex-col justify-center align-center items-center'>
     <p className='text-[22px] font-bold tracking-[.13em]'>Lidar com o mal-estar abre espaço para vislumbrar aquilo que se deseja na vida</p> 
     <div className='mt-6 text-[18px] max-w-[70%] text-center'>
        A terapia psicanalítica visa ajudar o sujeito a lidar com seu mal-estar, a partir do encontro com o inconsciente, habilitando-o a fazer escolhas diferentes daquelas que o adoeceram e a favor das que mobilizam seu desejo de viver.
        </div>
     {/* <p className='text-[16px] '>construir bem feito para não ficar uma merda e utilizar os conceitos de forma coerente e apropriada para pessoas que não conhecem.</p> */}
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

export default Frase