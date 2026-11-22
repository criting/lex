import { chromium } from "playwright";
import { mkdir, readdir, copyFile, rm } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.LEX_URL || "http://127.0.0.1:3477";
const OUT = process.env.LEX_MEDIA_DIR;

if (!OUT) {
  console.error("Set LEX_MEDIA_DIR");
  process.exit(1);
}

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  recordVideo: {
    dir: path.join(OUT, "_video-tmp"),
    size: { width: 1440, height: 900 },
  },
});
const page = await context.newPage();

async function shot(name, url, opts = {}) {
  await page.goto(new URL(url, BASE).toString(), { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  if (opts.scroll) {
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.7;
      const max = document.body.scrollHeight;
      for (let y = 0; y < max; y += step) {
        window.scrollTo({ top: y, behavior: "instant" });
        await new Promise((r) => setTimeout(r, 180));
      }
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  }
  await page.screenshot({
    path: path.join(OUT, name),
    fullPage: Boolean(opts.fullPage),
  });
  console.log("wrote", name);
}

await shot("lex-01-home-hero.png", "/");
await shot("lex-02-home-scroll.png", "/", { scroll: true, fullPage: true });
await shot("lex-03-practice-areas.png", "/practice-areas/");
await shot("lex-04-practice-detail.png", "/practice-areas/corporate/");
await shot("lex-05-people.png", "/people/");
await shot("lex-06-person.png", "/people/elena-voss/");
await shot("lex-07-insights.png", "/insights/");
await shot("lex-08-contact.png", "/contact/");

const mobile = await browser.newPage();
await mobile.setViewportSize({ width: 390, height: 844 });
await mobile.goto(`${BASE}/`, { waitUntil: "networkidle" });
await mobile.waitForTimeout(500);
await mobile.screenshot({ path: path.join(OUT, "lex-09-mobile-hero.png") });
console.log("wrote lex-09-mobile-hero.png");
await mobile.close();

const clipPage = await context.newPage();
await clipPage.goto(`${BASE}/`, { waitUntil: "networkidle" });
await clipPage.waitForTimeout(400);
await clipPage.evaluate(async () => {
  const step = Math.round(window.innerHeight * 0.55);
  const max = Math.min(document.body.scrollHeight, window.innerHeight * 5);
  for (let y = 0; y <= max; y += step) {
    window.scrollTo({ top: y, behavior: "smooth" });
    await new Promise((r) => setTimeout(r, 420));
  }
});
await clipPage.waitForTimeout(600);

await context.close();
await browser.close();

const tmp = path.join(OUT, "_video-tmp");
const files = await readdir(tmp);
const webm = files.find((f) => f.endsWith(".webm"));
if (webm) {
  await copyFile(path.join(tmp, webm), path.join(OUT, "lex-hero-scroll.webm"));
  console.log("wrote lex-hero-scroll.webm");
}
await rm(tmp, { recursive: true, force: true });
console.log("done");
