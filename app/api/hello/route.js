export async function  GET(req, res) {
  // Handle GET request here
  console.log('trying hello endpoint!')

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

export function POST(req, res) {
  // Handle POST request here
  return new Response( JSON.stringify({ message: 'POST request received' }) ,{ status:200 } )
}