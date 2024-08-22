import query from "@/app/db"

export async function POST(req, res) {
    // Handle GET request here
    // const data = await req.json();
    // const { cpf } = data

    const alterQuery = `
    ALTER TABLE candidatos
    ADD COLUMN horario VARCHAR(30)
    `
    const alterQueryAno = `
    ALTER TABLE alunos
    ADD COLUMN ano VARCHAR(30)
    `
    try {
        const {rows} = await query(alterQuery)

        if(rows.length > 0) {
            return new Response( JSON.stringify({ rows }) ,{ status:200 } )
        } else {
            return new Response (JSON.stringify({ message: "Houve um problema" }) ,{ status:400 })
        }
        
    } catch(err) { 
        return new Response( JSON.stringify({ error: 'Um erro ocorreu durante a execução da consulta SQL.' }) ,{ status:500 } )
    }

  }

