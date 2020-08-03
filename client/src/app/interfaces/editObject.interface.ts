import { Menu } from './menu.interface';
export interface EditObject {
  templateId: string;
  elementId: string;
  data: string | Menu;
}
