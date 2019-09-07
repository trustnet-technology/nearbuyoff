export class MenuModel {
  name: string;
  categoryID: string;
  children: SubcategoryMenuModel[];
}
export class SubcategoryMenuModel {
  name: string;
  url: string;
}
