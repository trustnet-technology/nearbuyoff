export interface AddToCartModel {
  userId: string;
  productAttributeId: string;
  productSellerId: string;
  quantity: string;
  isActive: string;
}
export interface OrderNowModel {
  userId: string;
  productAttributeId: string;
  productSellerId: string;
  quantity: string;
  statue: string;
  orderPaymentMode: string;
  contactNumber: string;
  productSellerName: string;
  productName: string;
  productId: string;
  price: string;
  createdDate: string;
}
