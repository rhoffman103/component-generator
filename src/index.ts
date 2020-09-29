import yargs from "yargs";
import generateComponent from './generator';
import { Hook, Template, Category } from './types/index';

enum Arg {
  NAME = 'name',
  HOOKS = 'hooks',
  TYPE = 'type',
  CAT = 'category'
};

generateComponent({
  title: "GeneratedComponent",
  hooks: [Hook.US, Hook.UE],
  template: Template.FC,
  category: Category.C
});