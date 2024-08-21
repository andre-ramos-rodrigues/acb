import query from "@/app/db/verceldb"

export async function GET(req, res) {
    // Handle GET request here

    const getCandidatos = `
    SELECT * FROM candidatos
    `
    try {
        const {rows} = await query(getCandidatos)
        return new Response( JSON.stringify({ rows }) ,{ status:200 } )

    } catch(err) { 
        return new Response( JSON.stringify({ error: err }) ,{ status:500 } )
    }

  }
  

export async function POST(req, res) {
    // Handle GET request here
    
    const data = await req.json();
    console.log("starting post!: ", data)
    

    const createTableQuery = `
            CREATE TABLE IF NOT EXISTS Candidatos (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(200) NOT NULL,
                idade VARCHAR(100),
                bairro VARCHAR(100),
                email VARCHAR(100) UNIQUE NOT NULL,
                jafez VARCHAR(100),
                telefone VARCHAR(100),
                comosoube VARCHAR(300),
                pronome VARCHAR(100),
                atendimento VARCHAR(300),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
    const { nome, idade, bairro, email, jafez, telefone, comosoube, pronome, atendimento} = data;
    
    /*const insertQuery = `
                INSERT INTO Candidatos (nome, endereco, bairro, cpf, sexo, nascimento, nomeresponsavel, cpfresponsavel, parentesco, escolaridade, profissional)
                VALUES (${nome}, ${endereco}, ${bairro}, ${cpf}, ${sexo}, ${nascimento}, ${nomeresponsavel}, ${cpfresponsavel}, ${parentesco}, ${escolaridade}, ${profissional})
            `;*/
            
            const values = [nome, idade, bairro, email, jafez, telefone, comosoube, pronome, atendimento];
            //const values = ['Fabio', 'rua X', 'Copacabana', '123', 'masculino', '11/11/2011', 'Maicon', '1234', 'pai', 'nenhuma', 'profissional autonomo'];
            const insertQuery = `
            INSERT INTO Candidatos (nome, idade, bairro, email, jafez, telefone, comosoube, pronome, atendimento)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            `;
            const getCandidatos = `
            SELECT * FROM candidatos WHERE email = '${email}';
            `

   try {
        const created = await query(createTableQuery)
        created && console.log("table created")
        //const result = await query(insertQuery, [nome, endereco, bairro, cpf, sexo, nascimento, nomeresponsavel, cpfresponsavel, parentesco, escolaridade, profissional]);
        const result = await query(insertQuery, values);
        result && console.log('inserted data')  
        const {rows} = await query(getCandidatos)
        console.log(rows)
        return new Response( JSON.stringify(rows) ,{ status:200 } )
   } catch(err) {
    console.log(err)
    return new Response( JSON.stringify({ message: err }) ,{ status:400 } )
   }

   //return new Response( JSON.stringify({ message: 'GET request received' }) ,{ status:200 } )
  }
