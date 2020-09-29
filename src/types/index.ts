export enum Category {
  C = 'component',
  V = 'view'
};

export enum Hook {
  US = 'useState',
  UE = 'useEffect'
};

export enum Template {
  FC = 'functionalComponent.handlebars',
  CC = 'classComponent.handlebars'
};

export class ComponentDto {
  title: string = '';
  template: Partial<Template> = Template.FC;
  category: Partial<Category> = Category.C;
  hooks?: Partial<Hook[]> = [];
};
