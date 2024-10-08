import query from "@/app/db/verceldb"
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
    // Handle GET request here
    //const data = await req.json();
    //const { nome } = data

    const result =
      await sql`SELECT * FROM candidatos;`;

    const getCandidatos = `
    SELECT * FROM candidatos
    `
    try {
        //const {rows} = await query(getCandidatos)
        //return new Response( JSON.stringify({ rows }) ,{ status:200 } )
        return NextResponse.json({ result }, { status: 200 });

    } catch(err) { 
        return new Response( JSON.stringify({ error: err }) ,{ status:502 } )
    }

  }