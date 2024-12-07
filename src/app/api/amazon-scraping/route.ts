//TODO: MAKE CODE HAH

'use server'
import { NextResponse, NextRequest } from "next/server"

export async function GET(res: NextResponse){
    return NextResponse.json({message:"hola"})
}