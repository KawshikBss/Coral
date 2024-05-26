import { sql } from "@vercel/postgres";
import { Product } from "../defenitions";

export async function fetchProducts() {
    try {
        const data = await sql<Product>`SELECT
            p.id AS id,
            p.name AS name,
            p.description AS description,
            p.price AS price,
            p.discount_price AS discount_price,
            b.name AS brand_name,
            c.id AS category_id,
            c.name AS category_name,
            co.name AS color_name,
            co.code AS color_code,
            p.size AS size,
            p.images AS images,
            p.thumbnail AS thumbnail,
            p.stock_availability AS stock_availability,
            p.discount AS discount,
            p.rating AS rating,
            p.slug AS slug,
            p.sku AS sku,
            p.tags AS tags
            FROM
                products p
            JOIN
                product_colors pc ON p.id = pc.product_id
            LEFT JOIN
                brands b ON p.brand_id = b.id
            LEFT JOIN
                categories c ON p.category_id = c.id
            LEFT JOIN
                colors co ON pc.color_id = co.id;`;
        return data.rows;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchSingleProduct(id: string) {
    try {
        const data = await sql`SELECT
            p.id AS id,
            p.name AS name,
            p.description AS description,
            p.price AS price,
            p.discount_price AS discount_price,
            b.name AS brand_name,
            c.id AS category_id,
            c.name AS category_name,
            co.name AS color_name,
            co.code AS color_code,
            p.size AS size,
            p.images AS images,
            p.thumbnail AS thumbnail,
            p.stock_availability AS stock_availability,
            p.discount AS discount,
            p.rating AS rating,
            p.slug AS slug,
            p.sku AS sku,
            p.tags AS tags,
            p.created_at AS created_at
            FROM
                products p
            JOIN
                product_colors pc ON p.id = pc.product_id
            LEFT JOIN
                brands b ON p.brand_id = b.id
            LEFT JOIN
                categories c ON p.category_id = c.id
            LEFT JOIN
                colors co ON pc.color_id = co.id
            WHERE p.id = ${id};`;
        return data.rows[0] as Product;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export async function fetchLatestProducts() {
    try {
        const data = await sql<Product>`SELECT
            p.id AS id,
            p.name AS name,
            p.description AS description,
            p.price AS price,
            p.discount_price AS discount_price,
            b.name AS brand_name,
            c.id AS category_id,
            c.name AS category_name,
            co.name AS color_name,
            co.code AS color_code,
            p.size AS size,
            p.images AS images,
            p.thumbnail AS thumbnail,
            p.stock_availability AS stock_availability,
            p.discount AS discount,
            p.rating AS rating,
            p.slug AS slug,
            p.sku AS sku,
            p.tags AS tags
            FROM
                products p
            JOIN
                product_colors pc ON p.id = pc.product_id
            LEFT JOIN
                brands b ON p.brand_id = b.id
            LEFT JOIN
                categories c ON p.category_id = c.id
            LEFT JOIN
                colors co ON pc.color_id = co.id
            ORDER BY p.created_at DESC;`;
        return data.rows;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchProductsByCategory(category_id: string | null) {
    if (!category_id) return [];
    try {
        const data = await sql<Product>`SELECT
            p.id AS id,
            p.name AS name,
            p.description AS description,
            p.price AS price,
            p.discount_price AS discount_price,
            b.name AS brand_name,
            c.id AS category_id,
            c.name AS category_name,
            co.name AS color_name,
            co.code AS color_code,
            p.size AS size,
            p.images AS images,
            p.thumbnail AS thumbnail,
            p.stock_availability AS stock_availability,
            p.discount AS discount,
            p.rating AS rating,
            p.slug AS slug,
            p.sku AS sku,
            p.tags AS tags
            FROM
                products p
            JOIN
                product_colors pc ON p.id = pc.product_id
            LEFT JOIN
                brands b ON p.brand_id = b.id
            LEFT JOIN
                categories c ON p.category_id = c.id
            LEFT JOIN
                colors co ON pc.color_id = co.id
            WHERE c.id = ${category_id};`;
        return data.rows;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch products");
    }
}

export async function fetchProductsByBrand(brands: string) {
    const brand = brands
        .split(",")
        .map((item) => `'${item}'`)
        .join(",");
    try {
        const query = `SELECT
        p.id AS id,
        p.name AS name,
        p.description AS description,
        p.price AS price,
        p.discount_price AS discount_price,
        b.id AS brand_id,
        b.name AS brand_name,
        c.id AS category_id,
        c.name AS category_name,
        co.name AS color_name,
        co.code AS color_code,
        p.size AS size,
        p.images AS images,
        p.thumbnail AS thumbnail,
        p.stock_availability AS stock_availability,
        p.discount AS discount,
        p.rating AS rating,
        p.slug AS slug,
        p.sku AS sku,
        p.tags AS tags
        FROM
            products p
        JOIN
            product_colors pc ON p.id = pc.product_id
        LEFT JOIN
            brands b ON p.brand_id = b.id
        LEFT JOIN
            categories c ON p.category_id = c.id
        LEFT JOIN
            colors co ON pc.color_id = co.id
        WHERE brand_id IN (${brand});`;
        const data = await sql.query(query);

        return data.rows as Product[];
    } catch (error) {
        console.error(error);
        // throw new Error("Failed to fetch products");
        return [];
    }
}

export async function fetchProductsByColor(colors: string) {
    const color = colors
        .split(",")
        .map((item) => `'${item}'`)
        .join(",");
    try {
        const query = `SELECT
            p.id AS id,
            p.name AS name,
            p.description AS description,
            p.price AS price,
            p.discount_price AS discount_price,
            b.name AS brand_name,
            c.id AS category_id,
            c.name AS category_name,
            co.name AS color_name,
            co.code AS color_code,
            p.size AS size,
            p.images AS images,
            p.thumbnail AS thumbnail,
            p.stock_availability AS stock_availability,
            p.discount AS discount,
            p.rating AS rating,
            p.slug AS slug,
            p.sku AS sku,
            p.tags AS tags
        FROM
            products p
        JOIN
            product_colors pc ON p.id = pc.product_id
        LEFT JOIN
            brands b ON p.brand_id = b.id
        LEFT JOIN
            categories c ON p.category_id = c.id
        LEFT JOIN
            colors co ON pc.color_id = co.id
        WHERE co.id IN (${color});
        `;
        const data = await sql.query(query);
        return data.rows as Product[];
    } catch (error) {
        console.error(error);
        // throw new Error("Failed to fetch products");
        return [];
    }
}

export async function fetchProductsByPriceRange(priceRange: string) {
    const priceRanges = priceRange.split(",").sort();
    const minPrice = priceRanges[0].split("-")[0];
    const maxPrice = priceRanges?.pop()?.split("-")[1];
    try {
        const data = await sql<Product>`SELECT
            p.id AS id,
            p.name AS name,
            p.description AS description,
            p.price AS price,
            p.discount_price AS discount_price,
            b.name AS brand_name,
            c.id AS category_id,
            c.name AS category_name,
            co.name AS color_name,
            co.code AS color_code,
            p.size AS size,
            p.images AS images,
            p.thumbnail AS thumbnail,
            p.stock_availability AS stock_availability,
            p.discount AS discount,
            p.rating AS rating,
            p.slug AS slug,
            p.sku AS sku,
            p.tags AS tags
            FROM
                products p
            JOIN
                product_colors pc ON p.id = pc.product_id
            LEFT JOIN
                brands b ON p.brand_id = b.id
            LEFT JOIN
                categories c ON p.category_id = c.id
            LEFT JOIN
                colors co ON pc.color_id = co.id
            WHERE ${minPrice} <= p.price
            AND p.price <= ${maxPrice}
            OR ${minPrice} <= p.discount_price
            AND p.discount_price <= ${maxPrice};`;
        return data.rows;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchProductsByRating(rating: string) {
    rating = rating.split(",").sort().pop() ?? "";
    try {
        const data = await sql<Product>`SELECT
            p.id AS id,
            p.name AS name,
            p.description AS description,
            p.price AS price,
            p.discount_price AS discount_price,
            b.name AS brand_name,
            c.id AS category_id,
            c.name AS category_name,
            co.name AS color_name,
            co.code AS color_code,
            p.size AS size,
            p.images AS images,
            p.thumbnail AS thumbnail,
            p.stock_availability AS stock_availability,
            p.discount AS discount,
            p.rating AS rating,
            p.slug AS slug,
            p.sku AS sku,
            p.tags AS tags
            FROM
                products p
            JOIN
                product_colors pc ON p.id = pc.product_id
            LEFT JOIN
                brands b ON p.brand_id = b.id
            LEFT JOIN
                categories c ON p.category_id = c.id
            LEFT JOIN
                colors co ON pc.color_id = co.id
            WHERE p.rating <= ${rating};`;
        return data.rows;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchProductsByAvailability(stock_availability: string) {
    stock_availability = stock_availability.split(",")[0];
    try {
        const data = await sql<Product>`SELECT
            p.id AS id,
            p.name AS name,
            p.description AS description,
            p.price AS price,
            p.discount_price AS discount_price,
            b.name AS brand_name,
            c.id AS category_id,
            c.name AS category_name,
            co.name AS color_name,
            co.code AS color_code,
            p.size AS size,
            p.images AS images,
            p.thumbnail AS thumbnail,
            p.stock_availability AS stock_availability,
            p.discount AS discount,
            p.rating AS rating,
            p.slug AS slug,
            p.sku AS sku,
            p.tags AS tags
            FROM
                products p
            JOIN
                product_colors pc ON p.id = pc.product_id
            LEFT JOIN
                brands b ON p.brand_id = b.id
            LEFT JOIN
                categories c ON p.category_id = c.id
            LEFT JOIN
                colors co ON pc.color_id = co.id
            WHERE p.stock_availability = ${stock_availability};`;
        return data.rows;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchFilteredProducts(searchParams: {
    [key: string]: string | undefined;
}) {
    const category = searchParams["category"]?.length
        ? searchParams["category"]
        : null;
    let brand = searchParams["brand"]?.length ? searchParams["brand"] : null;
    let color = searchParams["color"]?.length ? searchParams["color"] : null;
    const priceRange = searchParams["price range"]?.length
        ? searchParams["price range"]
        : null;
    const rating = searchParams["rating"]?.length
        ? searchParams["rating"]
        : null;
    let availability = searchParams["availability"]?.length
        ? searchParams["availability"]
        : null;
    const page = searchParams["page"]?.length
        ? parseInt(searchParams["page"])
        : 0;
    const limit = searchParams["limit"]?.length
        ? parseInt(searchParams["limit"])
        : 0;
    let sort_by = searchParams["sort_by"]?.length
        ? searchParams["sort_by"]
        : null;
    brand =
        brand
            ?.split(",")
            .map((item) => `'${item.trim()}'`)
            .join(",") ?? null;
    color =
        color
            ?.split(",")
            .map((item) => `'${item.trim()}'`)
            .join(",") ?? null;

    const priceRanges = priceRange?.split(",").sort();
    const minPrice = priceRanges?.[0].split("-")[0];
    const maxPrice = priceRanges?.pop()?.split("-")[1];
    try {
        const query = `SELECT
                p.id AS id,
                p.name AS name,
                p.description AS description,
                p.price AS price,
                p.discount_price AS discount_price,
                b.name AS brand_name,
                c.id AS category_id,
                c.name AS category_name,
                co.name AS color_name,
                co.code AS color_code,
                p.size AS size,
                p.images AS images,
                p.thumbnail AS thumbnail,
                p.stock_availability AS stock_availability,
                p.discount AS discount,
                p.rating AS rating,
                p.slug AS slug,
                p.sku AS sku,
                p.tags AS tags
            FROM
                products p
            JOIN
                product_colors pc ON p.id = pc.product_id
            LEFT JOIN
                brands b ON p.brand_id = b.id
            LEFT JOIN
                categories c ON p.category_id = c.id
            LEFT JOIN
                colors co ON pc.color_id = co.id
            WHERE true
                ${category ? `AND c.id = '${category}'` : ""}
                ${brand ? `AND b.id IN (${brand})` : ""}
                ${color ? `AND co.id IN (${color})` : ""}
                ${
                    minPrice && maxPrice
                        ? `AND (
                    (p.price BETWEEN ${minPrice} AND ${maxPrice})
                    OR (p.discount_price BETWEEN ${minPrice} AND ${maxPrice})
                )`
                        : ""
                }
                ${rating ? `AND p.rating <= ${rating}` : ""}
                ${
                    availability
                        ? `AND p.stock_availability = '${availability}'`
                        : ""
                }
                ORDER BY ${
                    sort_by ? `p.discount_price ${sort_by}` : "p.rating DESC"
                }
                ${limit ? `LIMIT ${limit}` : ""}
                ${page > 1 ? `OFFSET ${page * limit}` : ""};
                `;
        const data = await sql.query(query);
        return data.rows as Product[];
    } catch (error) {
        console.error(error);
        return [];
    }
}
