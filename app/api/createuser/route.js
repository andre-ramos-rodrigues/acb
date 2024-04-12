import query from "@/app/db/verceldb"

export async function POST(req, res) {
    // Handle GET request here
    
    const data = await req.json();
    console.log("starting post!: ", data)

    const createTableQuery = `
            CREATE TABLE IF NOT EXISTS usuarios (
                id SERIAL PRIMARY KEY,
                usuario VARCHAR(200),
                nome VARCHAR(200),
                cpf VARCHAR(200),
                senha VARCHAR(200),
                nivel VARCHAR(200),
                email VARCHAR(200),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
    const { usuario, senha, email, cpf, nome } = data;

    const nivel = "1"
    
    /*const insertQuery = `
                INSERT INTO Alunos (nome, endereco, bairro, cpf, sexo, nascimento, nomeresponsavel, cpfresponsavel, parentesco, escolaridade, profissional)
                VALUES (${nome}, ${endereco}, ${bairro}, ${cpf}, ${sexo}, ${nascimento}, ${nomeresponsavel}, ${cpfresponsavel}, ${parentesco}, ${escolaridade}, ${profissional})
            `;*/
            
            const values = [usuario, senha, email, cpf, nome, nivel];
            //const values = ['Fabio', 'rua X', 'Copacabana', '123', 'masculino', '11/11/2011', 'Maicon', '1234', 'pai', 'nenhuma', 'profissional autonomo'];
            const insertQuery = `
            INSERT INTO usuarios (usuario, senha, email, cpf, nome, nivel)
            VALUES ($1, $2, $3, $4, $5, $6)
            `;
            const getUsuario = `
            SELECT * FROM usuarios WHERE cpf = '${cpf}';
            `

   try {
        const created = await query(createTableQuery)
        created && console.log("table created")
        //const result = await query(insertQuery, [nome, endereco, bairro, cpf, sexo, nascimento, nomeresponsavel, cpfresponsavel, parentesco, escolaridade, profissional]);

        const {rows} = await query(getUsuario)
        if(rows.length > 0){
            console.log("Já existe um usuario com esse CPF")
            return new Response( JSON.stringify({message: "Já existe um usuario com esse CPF"}) ,{ status:403 } )
        } else {
            const result = await query(insertQuery, values);
            result && console.log('inserted data')  
            console.log(rows)
            /*
            const changeStatus = `
            UPDATE candidatos
            SET statuscandidatura = 'matriculado'
            WHERE cpf = '${cpf}';
            `
            
            const change = await query(changeStatus);
            */
            return new Response( JSON.stringify(rows) ,{ status:200 } )
        }
   } catch(err) {
    console.log(err)
    return new Response( JSON.stringify({ message: "error db" }) ,{ status:400 } )
   }

   //return new Response( JSON.stringify({ message: 'GET request received' }) ,{ status:200 } )
  }
