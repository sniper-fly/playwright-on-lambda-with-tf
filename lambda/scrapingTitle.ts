import { chromium as playwright } from "playwright-core";
import chromium from "@sparticuz/chromium";
import "dotenv/config";

export async function scrapingTitle(url: string) {
  const browser = await playwright.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(url);
  const pageTitle = await page.title();

  if (process.env.NODE_ENV !== "production") {
    await browser.close();
  }
  return pageTitle;
}
