import { createClient, sql } from "@vercel/postgres";
import { z } from "zod";

const ProductSchema = z.object({
    id: z.string(),
    thumbnail: z.string(),
    images: z.string(),
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    price: z.coerce.number().gt(0),
    discount_price: z.coerce.number().nullable().default(0),
    discount: z.string().optional().default(""),
    brand: z.string(),
    category: z.string(),
    size: z.string(),
    color: z.string(),
    sku: z.string(),
    tags: z.string(),
});

const ColorSchema = z.object({
    id: z.string(),
    code: z.string(),
});

const CreateProduct = ProductSchema.omit({ id: true });
const CreateColor = ColorSchema.omit({ id: true });

export const createProduct = async (formData: FormData) => {
    const validatedFields = CreateProduct.safeParse({
        thumbnail: formData.get("thumbnail"),
        images: formData.get("images"),
        name: formData.get("name"),
        slug: formData.get("slug"),
        description: formData.get("description"),
        price: formData.get("price"),
        discount_price: formData.get("discount_price"),
        discount: formData.get("discount"),
        brand: formData.get("brand"),
        category: formData.get("category"),
        size: formData.get("size"),
        color: formData.get("color"),
        sku: formData.get("sku"),
        tags: formData.get("tags"),
    });
    if (validatedFields.success) {
        const {
            thumbnail,
            name,
            slug,
            description,
            price,
            discount_price,
            discount,
            brand,
            category,
            sku,
        } = validatedFields.data;
        const size = validatedFields.data?.size.split(",");
        const images = validatedFields.data?.images.split(",");
        const tags = validatedFields.data?.tags.split(",");

        const query = `INSERT INTO products (
            name,
            description,
            price,
            discount_price,
            brand_id,
            category_id,
            size,
            images,
            thumbnail,
            stock_availability,
            discount,
            rating,
            slug,
            sku,
            created_at,
            tags)
        VALUES ('${name}',
        '${description}',
        ${price},
        ${discount_price},
        '${brand}',
        '${category}',
        ARRAY [${size.map((item) => `'${item}'`).join(",")}],
        ARRAY [${images.map((item) => `'${item}'`).join(",")}],
        '${thumbnail}',
        'In Stock',
        '${discount}',
        5,
        '${slug}',
        '${sku}',
        CURRENT_DATE,
        ARRAY [${tags.map((item) => `'${item}'`).join(",")}]);`;
        try {
            await sql.query(query);
        } catch (error) {
            console.error(error);
        }
    }
};

export const createColor = async (colorCode: string) => {
    const validatedFields = CreateColor.safeParse({
        code: colorCode,
    });
    if (validatedFields.success) {
        const { code } = validatedFields.data;
        try {
            const query = `INSERT INTO colors(name, code) VALUES('(${code.replace(
                "#",
                ""
            )})', '${code}');`;
            const data =
                await sql`INSERT INTO colors(name, code) VALUES('(${code.replace(
                    "#",
                    ""
                )})', '${code}');`;
            console.log(data);

            return data;
        } catch (error) {
            console.error(error);
        }
    }
};
