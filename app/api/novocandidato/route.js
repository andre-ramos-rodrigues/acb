import query from "@/app/db/verceldb"
import nodemailer from "nodemailer"

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

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });

          const info = await transporter.sendMail({
            from: email, // sender address
            to: process.env.RECEIVER_EMAIL, // list of receivers
            subject: `SITE - Novo contato - ${nome}`, // Subject line
            // nome, idade, bairro, email, jafez, telefone, comosoube, pronome, atendimento
            text: `
            
            Nome: ${nome}
            Pronome: ${pronome}
            Idade: ${idade}
            Preferência de atendimento: ${atendimento}
            Já fez terapia antes: ${jafez}
            Como soube de você: ${comosoube}
            Telefone: ${telefone}
            Email: ${email}
            Bairro que mora: ${bairro}

            `, // plain text body
            html: `
            <div>
            <p>Nome: <b>${nome}</b> </p>
            <p>Pronome: ${pronome} </p>
            <p>Idade: ${idade} </p>
            <p>Preferência de atendimento: ${atendimento} </p>
            <p>Já fez terapia antes: ${jafez} </p>
            <p>Como soube de você: ${comosoube} </p>
            <p>Telefone: ${telefone} </p>
            <p>Email: ${email} </p>
            <p>Bairro que mora: ${bairro} </p>
            </div>`, // html body
          });

          console.log('Email enviado: ', info.messageId)

        const created = await query(createTableQuery)
        created && console.log("table created")
        // ignorar const result = await query(insertQuery, [nome, endereco, bairro, cpf, sexo, nascimento, nomeresponsavel, cpfresponsavel, parentesco, escolaridade, profissional]);
        
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
