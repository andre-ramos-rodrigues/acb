import Link from 'next/link'
import React from 'react'

const Bottom = () => {
  return (
    <div className=' bg-teal-700 w-[100%] min-h-[300px] p-7 text-white flex justify-center align-center items-center'>
     <div className='w-[100%] h-[100%] flex flex-col justify-center align-center items-center'>
     <div className='w-[100%] h-[100%] flex flex-col justify-center align-center items-center'>
     <p className='text-[26px] font-bold'>A terapia é uma forma de tratamento que visa aliviar o estresse emocional.</p> 
     <p className='text-[18px] font-bold'>Identificar as causas dos problemas de saúde mental é a forma de auxiliar o paciente a descobrir novas formas de lidar com as questões da vida.</p>
     <p className='text-[18px] font-bold'>A terapia traz inúmeros benefícios e, principalmente, uma sensação de encontro consigo mesmo que o ajuda a curar problemas antigos, atuais e a evitar conflitos futuros</p>
     <Link href="/candidatos" className='mt-2'>AGENDA UMA SESSÃO</Link>
     </div>
     <div>

     </div>
     </div>
    </div>
  )
}

export default Bottom