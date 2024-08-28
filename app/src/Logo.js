import React from 'react'
import Image from "next/image";

const Logo = () => { // bg-neutral-200
  return (
    <main className="bg-white w-[100%] min-h-[300px] text-white flex flex-col justify-center items-center align-center">
          <Image
              src="/acb.png"
              alt="Logo"
              className="bg-slate-50 rounded-full aspect-square object-cover self-center "
              width={180}
              height={180}
              priority
            />
            <div className='flex flex-col justify-center'>
            <p className='font-semibold text text-black text-[32px] text-center tracking-[.13em]'>Ana Clara Bertholasce</p>
            <p className='text-[#ad6347] text-[20px] text-center tracking-[.08em]'>Psicóloga | Psicanalista</p>
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

export default Logo