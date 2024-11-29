type CollectionType = {
    uid: string;
    title: string;
    products: number;
    image: string;
  };
  
  type ProductType = {
    uid: string;
    title: string;
    expense:string;
    subDescription:string;
    description: string;
    media: [string];
    category: string;
    collections: [string];
    tags: [string];
    price: number;
    cost: number;
    sizes: [string];
    colors: [string];
    createdAt: string;
    updatedAt: string;
  };
  
  type UserType = {
    clerkId: string;
    wishlist: [string];
    createdAt: string;
    updatedAt: string;
  };
  
  type OrderType = {
    shippingAddress: Object;
    uid: string;
    customerClerkId: string;
    products: [OrderItemType]
    shippingRate: string;
    totalAmount: number
  }
  
  type OrderItemType = {
    product: ProductType;
    color: string;
    size: string;
    quantity: number;
    uid: string;
  }