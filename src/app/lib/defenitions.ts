export type BreadCrumb = {
    name: string;
    href: string;
};

export type CategoryItem = {
    id: string;
    name: string;
};

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    discount_price: number;
    brand: string;
    category_id: string;
    category_name: string;
    color: string[];
    size: string[];
    images: string[];
    thumbnail: string;
    stockAvailability: string;
    discount?: string;
    rating?: number;
    slug: string;
    sku: string;
    weight?: number;
    createDate?: Date;
    tags: string[];
};

export type Review = {
    productId: string;
    userId: string;
    username: string;
    rating: number;
    review: string;
    date: Date;
};

export type PaymentMethod = {
    id: string;
    name: string;
    description: string;
    iconUrl: string;
};

export type Brand = {
    id: string;
    name: string;
    thumbnail: string;
    slug: string;
};

export type Color = {
    id: string;
    name: string;
    code: string;
};
