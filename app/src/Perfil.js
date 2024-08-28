import React from 'react'
import Image from "next/image";

const Perfil = () => {
  return ( //bg-[#dddddd] bg-[#9db2aa]
    <main className=" bg-slate-50 text-neutral-700 font-light w-[100%] min-h-[300px] flex flex-col justify-center gap-7 items-center align-center py-4">
           { /*<div className='text-center text-[22px] font-semibold'>Quem sou eu?</div> */}
          <div className='flex flex-row justify-center align-center content-center gap-7'>

          {/* px-4 py-2 pb-[60px] */}            
          
          <div className='rounded-xs bg-[#9db2aa] self-center shadow-xl'>
          <Image
              src="/anaclara.jpg"
              alt="Logo"
              className="bg-[#9db2aa] rounded-xs object-cover self-center "
              width={220}
              height={220}
              priority
            />
            </div>
          
            

          {/* 
          <div className='rounded-full bg-[#9db2aa] self-center shadow-xl'>
          <Image
              src="/anaclara.jpg"
              alt="Logo"
              className="bg-[#9db2aa] rounded-full object-cover self-center "
              width={220}
              height={220}
              priority
            />
            </div>
          */}

              <div className='rounded-xs px-4  pb-[60px] bg-white shadow-xl min-w-[180px] min-h-[180px]'>
              <div className='text-center text-[22px] font-semibold mb-4'>Quem sou eu?</div> 
              <p>Meu nome é <span className='font-semibold text-[#ad6347]'>Ana Clara</span></p>
              <p>Formada em Psicologia pela Universidade Veiga de Almeida</p>
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