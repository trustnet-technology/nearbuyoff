export class ProductModel {
  productID: number;
  title: string;
  desc: string;
  photoURL: string;
  mrp: number;
  price: number;
  discount: number;
  constructor(
    productID: number,
    title: string,
    desc: string,
    photoURL: string,
    mrp: number,
    price: number,
    discount: number
  ) {
    this.productID = productID;
    this.title = title;
    this.desc = desc;
    this.photoURL = photoURL;
    this.mrp = mrp;
    this.price = price;
    this.discount = discount;
  }
}
