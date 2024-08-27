import React from 'react'
import Image from "next/image";

const Perfil = () => {
  return (
    <main className="bg-[#dddddd] text-neutral-700 font-light w-[100%] min-h-[300px] flex flex-col justify-center gap-7 items-center align-center py-4">
           <div className='text-center text-[22px] font-semibold'>Quem sou eu?</div>
          <div className='flex flex-row gap-7'>
          <div className='rounded-xs px-4 py-2 pb-[60px] bg-neutral-200 shadow-sm'>
          <Image
              src="/user.png"
              alt="Logo"
              className="bg-neutral-700 rounded-sm aspect-square object-cover self-center "
              width={180}
              height={180}
              priority
            />
            </div>
              <div className='rounded-xs px-4  pb-[60px] bg-neutral-200 shadow-sm min-w-[180px] min-h-[180px]'>
              <p>Meu nome é <span className='font-semibold text-[#ad6347]'>Ana Clara</span></p>
              <p>Formada em Piscicologia pela Universidade Veiga de Almeida</p>
              <p>Pós-graduada em Psicanálise pela PUC</p>
              <p>Sigo a abordagem Lacaniana</p>
              <p>Mais frases</p>
              <p>Mais frases</p>
            </div>
            </div>
        {/* <div className="bg-neutral-400 rounded-full w-[360px] h-[360px] mt-[-120px]"></div> */}
        {/*
        <div className='bg-neutral-300 text-neutral-700 font-light rounded-full w-[360px] h-[360px] ml-[-120px] mb-[-120px] flex flex-col align-center justify-center items-center'>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        </div>
         */}
    </main>
  )
}

export default Perfil