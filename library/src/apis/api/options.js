import instance from "../utils/instance"

export const getAllBookTypeRequest = async () => {
    return await instance.get("/admin/book/option/type")
}

export const getAllCategoryRequest = async () => {
    return await instance.get("/admin/book/option/categories")
}