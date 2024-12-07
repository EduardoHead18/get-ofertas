'use server'
import puppeteer from "puppeteer";
import { IProducts } from "@/app/types/products";
import { NextResponse, NextRequest } from "next/server"
import { mercadoPuppeteer } from "./meli-implement";

export async function GET(res:NextResponse){
    const response = await mercadoPuppeteer()
    return NextResponse.json(response)

}
