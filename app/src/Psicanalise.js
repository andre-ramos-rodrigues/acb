import Link from 'next/link'
import React from 'react'

const Psicanalise = () => {
    return (
      <div className=' bg-neutral-200 text-neutral-700 font-light w-[100%] min-h-[300px] p-7  flex justify-center align-center items-center'>
       <div className='w-[100%] h-[100%] flex flex-col justify-center align-center items-center'>
       <div className='w-[100%] h-[100%] flex flex-col justify-center align-center items-center'>
       <p className='text-[22px] font-bold'>A Psicanálise</p>
       {/*
       <p className='text-[16px] mt-4'>A análise pessoal é uma forma de tratamento que visa isso aquilo outro e mais um negócio que eu tenho que</p>
       <p className='text-[16px] '>construir bem feito para não ficar uma merda e utilizar os conceitos de forma coerente e apropriada para pessoas que não conhecem.</p>
       */} 
        {/* 
        <div className='mt-4 text-[19px] max-w-[70%] font-semibold'>
        Lidar com o mal-estar abre espaço para vislumbrar aquilo que se deseja na vida
        </div>
        */}
        
        <div className='mt-1 text-[16px] max-w-[70%]'>
        A terapia psicanalítica visa ajudar o sujeito a lidar com seu mal-estar, a partir do encontro com o inconsciente, habilitando-o a fazer escolhas diferentes daquelas que o adoeceram e a favor das que mobilizam seu desejo de viver.
        </div>

       <Link href="/candidatos" className='mt-2 text-[16px] hover:text-green-600'>Saiba mais</Link>
       </div>
       <div>
        {/* 
          A terapia psicanalítica visa ajudar o sujeito a lidar com seu mal-estar, a partir do encontro com o inconsciente, habilitando-o a fazer escolhas diferentes daquelas que o adoeceram e a favor das que mobilizam seu desejo de viver. 
            A psicanálise entende que estar e se movimentar no mundo em que vivemos é desconfortável, portanto eliminar o mal-estar de viver também seria retirar as possibilidades de satisfação e prazer que encontramos na vida. Entender e aprender a se relacionar com as singularidades de seu próprio desconforto possibilita colocar em movimento o que cada um constrói como felicidade.
            O tratamento em análise é feito a partir da associação livre, técnica criada por Sigmund Freud que implica que o paciente fale o lhe vem à mente, respeitando o próprio fluxo de seus pensamentos. A atenção flutuante e a análise do discurso também são técnicas utilizadas durante a sessão pelo analista.
            Clicando em “A psicanálise” você pode explorar temas como o inconsciente, a transferência, a pulsão, os sonhos, a linguagem e a repetição.
        */}
       </div>
       </div>
      </div>
    )
  }

export default Psicanalise