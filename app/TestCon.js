'use client'

import React from 'react'

const TestCon = () => {

    const test = async() => {
      console.log(process.env.NEXT_PUBLIC_BASE_URL)

      console.log(process.env.NEXT_PUBLIC_POSTGRES_DATABASE)

      console.log(process.env.NEXT_PUBLIC_POSTGRES_HOST)

        try {  
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getcandidatos`, {
            method: 'GET'
          })


          if(response.ok){
            const responseData = await response.json();
            console.log(responseData);
          }
        } catch(er){
          console.log(er.message)
        }
      }

  return (
    <div onClick={() => test()}>Teste</div>
  )
}

export default TestCon