import fs from "fs";
import path from "path";
import handlebars from "handlebars";

handlebars.registerHelper('ifIn', function(this: any, elem, list, options) {
  if(list.indexOf(elem) > -1) {
    return options.fn(this);
  }
  return options.inverse(this);
});

const partialNames = fs
  .readdirSync(path.join(__dirname, '..', 'templates', 'partials'))
  .filter((file) => file.includes('.handlebars'));

for (const file of partialNames) {
  const template = fs.readFileSync(path.join(__dirname, '..', 'templates', 'partials', file), "utf-8");
  handlebars.registerPartial(file.replace(".handlebars", ""), template);
}

export const outputPath = path.join(__dirname, "..", "..", "output");

export default handlebars;