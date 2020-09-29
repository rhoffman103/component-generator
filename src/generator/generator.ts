import fs from "fs";
import path from "path";
import hbs, { outputPath } from "../config/handlebars";
import { Template, ComponentDto } from "../types";

const getTemplate = (template: Partial<Template>) => {
  return fs.readFileSync(path.join(__dirname, "..", "templates", template), "utf-8")
};

const generateComponent = async (data: ComponentDto) => {
  const categoryDir = `${data.category}s`;
  const template = hbs.compile(getTemplate(data.template))(data);
  const indexTemplate = `export { default } from "./${data.title}";`;
  const currentComponents = fs.readdirSync(path.join(outputPath, categoryDir));
  const outputDir = path.join(outputPath, categoryDir, data.title);

  if (!currentComponents.includes(data.title)) {
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(path.join(outputDir, `${data.title}.js`), template);
    fs.writeFileSync(path.join(outputDir, "index.js"), indexTemplate)
    console.log(`Created Component ${data.title}`);
  }
  else {
    console.log(`Component Title: ${data.title} already exists.`)
  }

};

export default generateComponent;