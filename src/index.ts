import generateComponent from './generator';
import { Hook, Template, ComponentType } from './types/index';

generateComponent({
  title: "GeneratedComponent",
  hooks: [Hook.US, Hook.UE],
  template: Template.FC,
  type: ComponentType.V
});