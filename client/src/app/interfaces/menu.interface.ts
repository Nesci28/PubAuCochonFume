export interface Menu {
  [key: string]: SubMenu;
}

export interface SubMenu {
  info?: string;
  img?: string;
  title: string;
  meals: Meal[];
}

export interface Meal {
  title: string;
  text: string;
}
