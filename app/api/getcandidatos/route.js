import query from "@/app/db/verceldb"

export async function GET(req, res) {
    // Handle GET request here
    //const data = await req.json();
    //const { nome } = data

    const getCandidatos = `
    SELECT * FROM candidatos
    `
    try {
        const {rows} = await query(getCandidatos)
        return new Response( JSON.stringify({ rows }) ,{ status:200 } )

    } catch(err) { 
        return new Response( JSON.stringify({ error: 'DB' }) ,{ status:500 } )
    }

  }