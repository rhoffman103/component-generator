export enum ComponentType {
  C = 'Components',
  V = 'Views'
}

export enum Hook {
  US = 'useState',
  UE = 'useEffect'
}

export class ComponentDto {
  title: string = '';
  template: Template.FC | Template.CC = Template.FC;
  hooks?: Partial<Hook[]> = [];
  type: ComponentType.C | ComponentType.V = ComponentType.C;
}

export enum Template {
  FC = 'functionalComponent.handlebars',
  CC = 'classComponent.handlebars'
}