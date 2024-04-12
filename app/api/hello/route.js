export function GET(req, res) {
  // Handle GET request here
 return new Response( JSON.stringify({ message: 'GET request received' }) ,{ status:200 } )
}

export function POST(req, res) {
  // Handle POST request here
  return new Response( JSON.stringify({ message: 'POST request received' }) ,{ status:200 } )
}