import { sql } from "@vercel/postgres";
import { Brand, CategoryItem, Color } from "./defenitions";

export async function fetchCategoryList() {
    try {
        const data = await sql`SELECT * FROM categories`;
        return data.rows as CategoryItem[];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchBrandList() {
    try {
        const data = await sql`SELECT * FROM brands`;
        return data.rows as Brand[];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchColorList() {
    try {
        const data = await sql`SELECT * FROM colors`;
        return data.rows as Color[];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchCategory(id: string | null) {
    if (id === null) return undefined;
    try {
        const data = await sql`SELECT * FROM categories WHERE id = '${id}'`;
        return data.rows[0] as CategoryItem;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
