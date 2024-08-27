import React from 'react'
import { PiCircleFill } from "react-icons/pi";

const Sinais = () =>  {
    return (
      <div className=' bg-[#698b7f] w-[100%] min-h-[300px] p-7 text-neutral-200 flex justify-center align-center items-center'>
       <div className='w-[100%] h-[100%] flex flex-col justify-center align-center items-center'>
       <div className='w-[100%] h-[100%] flex flex-col justify-center align-center items-center'>
       <p className='text-[22px] font-bold'>O mal-estar pode aparecer de várias formas</p> 
       <div className='flex flex-col place-content-start'>
       <div className='mt-4 flex flex-row gap-4 items-center'><PiCircleFill className='text-[8px]'/><p className='text-[18px]'>Depressão</p></div>
       <div className='flex flex-row gap-4 items-center'><PiCircleFill className='text-[8px]' /><p className='text-[18px]'>Ansiedade</p></div>
       <div className='flex flex-row gap-4 items-center'><PiCircleFill className='text-[8px]' /><p className='text-[18px]'>Fobias/Medos</p></div>
       <div className='flex flex-row gap-4 items-center'><PiCircleFill className='text-[8px]' /><p className='text-[18px]'>Procrastinação</p></div>
       <div className='flex flex-row gap-4 items-center'><PiCircleFill className='text-[8px]' /><p className='text-[18px]'>Autocobrança</p></div>
       <div className='flex flex-row gap-4 items-center'><PiCircleFill className='text-[8px]' /><p className='text-[18px]'>Outros</p></div>
       {/* <Link href="/candidatos" className='mt-2 text-[16px]'>AGENDA UMA SESSÃO</Link> */}
       </div>
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

export default Sinais