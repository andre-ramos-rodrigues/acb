import React from 'react'
import Link from 'next/link'
import Form from './Form.js'

const page = () => {
  return (
    <main className=''>
      <div>
          <div className='bg-blue-400 text-center p-2 font-bold'>Novo Candidato</div>
      </div>
      <div className='flex items-center'>
      <Form />
      </div>
    </main>
  )
}

export default page