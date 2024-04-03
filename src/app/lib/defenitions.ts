export type BreadCrumb = {
    name: string;
    href: string;
};

export type CategoryItem = {
    name: string;
    slug: string;
};

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    brand: string;
    category: string;
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
    dimensions?: {
        length: number;
        width: number;
        height: number;
    };
    tags: string[];
};
