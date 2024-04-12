import query from "@/app/db"

export async function GET(req, res) {

// Define SQL queries to create tables
const createCandidatos = `
CREATE TABLE IF NOT EXISTS Candidatos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(200) UNIQUE NOT NULL,
    endereco VARCHAR(200),
    bairro VARCHAR(100),
    cpf VARCHAR(100) UNIQUE NOT NULL,
    sexo VARCHAR(100),
    nascimento VARCHAR(100),
    nomeresponsavel VARCHAR(200) NOT NULL,
    cpfresponsavel VARCHAR(100) NOT NULL,
    parentesco VARCHAR(100) NOT NULL,
    escolaridade VARCHAR(100),
    profissional VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

const createTableQuery2 = `CREATE TABLE IF NOT EXISTS Table2 (
    // Define columns for Table2
);`;

// Function to initialize the database
    try {
        // Execute SQL queries to create tables
        await query(createCandidatos);
        //await query(createTableQuery2);

        console.log('Database initialized successfully.');
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error; // Rethrow the error to handle it elsewhere
    }
}

