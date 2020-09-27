import fs from "fs";
import path from "path";
import hbs from "./config/handlebars";
import { outputPath } from './config/handlebars';

enum ComponentType {
  C = 'Components',
  V = 'Views'
}

enum Hook {
  US = 'useState',
  UE = 'useEffect'
}

class ComponentDto {
  title: string = '';
  template: Template.FC | Template.CC = Template.FC;
  hooks?: Partial<Hook[]> = [];
  type: ComponentType.C | ComponentType.V = ComponentType.C;
}

enum Template {
  FC = 'functionalComponent.handlebars',
  CC = 'classComponent.handlebars'
}

const getTemplate = (template: Partial<Template>) => {
  return fs.readFileSync(path.join(__dirname, "templates", template), "utf-8")
};

const generateComponent = async (data: ComponentDto) => {
  const template = hbs.compile(getTemplate(data.template))(data);
  const indexTemplate = `export { default } from "./${data.title}";`;
  const currentComponents = fs.readdirSync(path.join(outputPath, data.type));
  const outputDir = path.join(outputPath, data.type, data.title);
  console.log(currentComponents);

  if (!currentComponents.includes(data.title)) {
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(path.join(outputDir, `${data.title}.js`), template);
    fs.writeFileSync(path.join(outputDir, "index.js"), indexTemplate)
    console.log(`Created Component ${data.title}`);
  }
  else {
    console.log(`Component Title: ${data.title} already exists.`)
  }

}

generateComponent({
  title: "GeneratedComponent",
  hooks: [Hook.US, Hook.UE],
  template: Template.FC,
  type: ComponentType.V
});