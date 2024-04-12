import query from "@/app/db"

export async function POST(req, res) {
    // Handle GET request here
    const data = await req.json();
    const { cpf } = data

    console.log("cpf :", cpf)

    const getCandidatos = `
    SELECT * FROM candidatos WHERE cpf = '${cpf}';
    `
    try {
        const {rows} = await query(getCandidatos)

        if(rows.length > 0) {
            return new Response( JSON.stringify({ rows }) ,{ status:200 } )
        } else {
            return new Response (JSON.stringify({ message: "Não foi localizado candidato com o CPF informado" }) ,{ status:400 })
        }
        
    } catch(err) { 
        return new Response( JSON.stringify({ error: 'Um erro ocorreu durante a execução da consulta SQL.' }) ,{ status:500 } )
    }

  }

export async function PUT(req, res) {
    // Extract parameters from the request body
    const data = await req.json();
    //const { cpf, campo, valor } = data;
    const { cpf, dados } = data

    // Construct the SQL query to update the specified field of the student
    const updateQuery = `
        UPDATE candidatos
        SET $1 = $2
        WHERE cpf = ${cpf}
    `;

    try {
        // Execute the SQL query with the provided parameters
        if (dados.length > 1) {
            dados.map(async (d) => {
            await query(updateQuery, [d.campo, d.valor]);
            })
        } else {
            await query(updateQuery, [dados.campo, dados.valor]);
        }
        
        // Return success response
        return new Response(JSON.stringify({ message: `campos atualizados com sucesso`}), { status: 200})
    } catch (error) {
        // Return error response
        console.error("Error updating student field:", error);
        return new Response( JSON.stringify({ error: 'Um erro ocorreu durante a execução da consulta SQL.' }) ,{ status:500 } )
    }
}