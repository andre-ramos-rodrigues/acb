import React from 'react'
import Link from 'next/link'
import Painel from './Painel'
import Form from './Form'

const page = () => {
  return (
    <main className='bg-slate-50 h-[100vh]'>
      <div className="flex flex-col gap-5 text-neutral-700 font-light font-roboto">
          <div className='w-[100wh] p-7 flex flex-col items-center'>
            <p className='font-bold text-xl'>Olá</p>
            <p className=''>Entre em contato por mensagem no WhatsApp,</p>
            <p className=''>ou preencha o formulário abaixo</p>
            {/* <Link className='font-bold text-lg' href='https://www.instagram.com/anabertholasce.psi?igsh=eHBveTFsYnlocmZj' target="_blank">Instagram</Link> */}
            <div className='font-bold text-lg mt-3'>Whatsapp:   21 2255-6677</div>
          </div>
          <Form />
      </div>
    </main>
  )
}

export default page