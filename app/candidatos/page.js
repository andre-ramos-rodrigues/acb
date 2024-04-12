import React from 'react'
import Link from 'next/link'
import Painel from './Painel'
import Form from './Form'

const page = () => {
  return (
    <main className='bg-neutral-200 h-[100vh]'>
      <div className="flex flex-col gap-5 text-neutral-700 font-light font-roboto">
          <div className='w-[100wh] p-7 flex flex-col items-center'>
            <p className='font-bold text-xl'>Olá</p>
            <p className=''>Pode me contactar via direct ou WhatsApp,</p>
            <p className=''>mas se preferir pode preencher o formulário abaixo e eu entro em contato</p>
            <p className='font-bold text-lg'>Instagram</p>
            <div className='font-bold text-lg'>Whatsapp:   21 2255-6677</div>
          </div>
          <Form />
      </div>
    </main>
  )
}

export default page