"use server";
import { title } from "process";
import puppeteer from "puppeteer";
//oferta .andes-money-amount__discount
export const mercadoPuppeteer = async () => {
  //config browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://listado.mercadolibre.com.mx/oferta#D[A:oferta]", {
    waitUntil: "domcontentloaded",
  });

  //waiting data
  await page.waitForSelector(".poly-card", { timeout: 2000 });

  //here I get product data from Mercado Libre.
  const dataProducts = await page.$$eval(".poly-card", (data) => {
    return data.map((data) => {
      const title =
        data
          .querySelector(".poly-card .poly-component__brand")
          ?.textContent?.trim() || "whitout title";
      const description =
        data.querySelector(".poly-component__title a")?.textContent?.trim() ||
        "whitout description";
      const discount =
        data
          .querySelector(".andes-money-amount__discount ")
          ?.textContent?.trim() || "without discount";
      const priceNow =
        data
          .querySelector(".poly-price__current .andes-money-amount__fraction")
          ?.textContent?.trim() || "without discount";
      const priceBefore =
        data
          .querySelector(
            ".andes-money-amount--previous .andes-money-amount__fraction"
          )
          ?.textContent?.trim() || "without discount";

      const imageUrl = (
        data.querySelector("img.poly-component__picture") as HTMLImageElement
      )?.src;

      const productUrl = data.querySelector("a")?.href || "without url";

      const createArrayObjectProducts: IProducts = {
        title,
        discount,
        priceNow,
        priceBefore,
        imageUrl,
        productUrl,
        store: "Mercado libre",
      };

      return createArrayObjectProducts;
    });
  });

  console.log(dataProducts);

  await browser.close();
};
interface IProducts {
  title: String;
  discount: String;
  priceNow: String;
  priceBefore: String;
  imageUrl: String;
  productUrl: String;
  store: String;
}
