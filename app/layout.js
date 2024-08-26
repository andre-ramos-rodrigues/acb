import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import TestCon from './TestCon'
import Head from 'next/head';
import { DM_Serif_Display } from 'next/font/google'
import Image from "next/image";
import { GrLinkedin } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";

const inter = Inter({ subsets: ["latin"] });

const dm = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm',
})

export const metadata = {
  title: "Ana Clara Bertholasce | Psicóloga e Psicanalista",
  description: "Atendimento online e presencial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-Br">
      <body className={`${dm.variable} font-sans`}>
        <div className="flex flex-col justify-between ">
          {/* HEADER */}
          <div className="bg-neutral-300 content-center items-center fixed 
                w-full top-0 left-0">
            <div className="mx-[220px] flex flex-row justify-center gap-5 h-[120px] text-center content-center items-center">
              {/* <Link href="/" className="text-neutral-700 text-[45px] ">ACB</Link> */}
             
  
              <Link href="/" className="text-neutral-700 font-light hover:font-semibold">Home</Link>
              <Link href="/" className="text-neutral-700 font-light hover:font-semibold">A Psicanálise</Link>
              <Link href="/" className="text-neutral-700 font-light hover:font-semibold">Blog</Link>
              <Link href="/" className="text-neutral-700 font-light hover:font-semibold">Dúvidas Frequentes</Link>
              <Link href="/candidatos" className=" text-neutral-700 rounded-xl font-semibold hover:text-green-600">Agende sua sessão</Link>

              {/* <TestCon /> */}
           
              
              <div className="flex flex-row justify-center gap-5 text-center content-center items-center">
                {/* <Link href="/candidatos" className="bg-gray-700 font-roboto font-light text-gray-200 px-6 py-2 rounded-xl">Agende sua sessão</Link> */}

                <Link href='https://www.instagram.com/anabertholasce.psi?igsh=eHBveTFsYnlocmZj' target="_blank"><GrInstagram className="text-neutral-700 font-light hover:text-green-600"/></Link>
                <Link href="/"><GrLinkedin className="text-neutral-700 font-light hover:text-green-600"/></Link>

              </div>
                
            </div>
          </div>
           {/* HEADER */}
          <div className="mt-[120px]">{children}</div>
        </div>
      </body>      
    </html>
  );
}
