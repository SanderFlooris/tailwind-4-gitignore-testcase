import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import ViteExpress from "vite-express";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
  const templatePath = path.join(
    __dirname,
    'src/template.html'
  );

  const prerenderedContentPath = path.join(
    __dirname,
    'storage/app/private/cms_content/some-slug/0.html'
  );

  let page = fs.readFileSync(templatePath, 'utf-8');
  const prerenderedContent = fs.readFileSync(prerenderedContentPath, 'utf-8');

  page = page.replaceAll(
    '{{content}}',
    prerenderedContent
  );

  res.send(page);
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

ViteExpress.bind(app, server);
