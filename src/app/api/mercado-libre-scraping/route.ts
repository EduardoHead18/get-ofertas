'use server'
import { IProducts } from "@/app/types/products";
import { NextResponse } from "next/server"
import { mercadoPuppeteer } from "./meli-implement";

export async function GET() : Promise<NextResponse<IProducts[]>>{
    const response = await mercadoPuppeteer()
    return NextResponse.json(response)
}
