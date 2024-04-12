import query from "@/app/db/verceldb"

export async function POST(req, res) {
    // Handle GET request here
    const data = await req.json();
    const { nome } = data

    console.log("nome :", nome)

    const getCandidatos = `
    SELECT * FROM candidatos WHERE nome ILIKE '%${nome}%';
    `
    try {
        const {rows} = await query(getCandidatos)

        if (rows.length > 0) {
            return new Response( JSON.stringify({ rows }) ,{ status:200 } )
        } else {
            return new Response (JSON.stringify({ message: "Não foi localizado candidato com o nome informado" }) ,{ status:400 })
        }
        
    } catch(err) { 
        return new Response( JSON.stringify({ error: 'DB' }) ,{ status:500 } )
    }

  }