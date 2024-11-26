"use server";
import { TIMEOUT } from "dns";
import puppeteer from "puppeteer";
//oferta .andes-money-amount__discount 
export const serverPuppeter = async () => {
  //config browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://listado.mercadolibre.com.mx/oferta#D[A:oferta]", {
    waitUntil: "domcontentloaded",
  });

  //waiting data
  await page.waitForSelector(
    ".andes-money-amount__discount ",
    { timeout: 10000 }
  );    

  const texts = await page.$$eval(
    ".andes-money-amount__discount ", 
    (titles) => {
      return titles.map((el) => el.innerHTML.trim()); // Función aplicada a los elementos
    }
  );

console.log(texts)

  await browser.close();
};
