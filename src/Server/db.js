import useReactivity from './useReactivity';
import Categories from './Models/Categories';

export const getCategories = async (skip = 0, limit = 10) => {
    return await useReactivity(() => Categories.find({}, {
        skip: skip,
        limit: limit,
        sort: { createdAt: -1 },
    }).fetch());
}

export const getCategoryById = async (id) => {
    return await useReactivity(() => Categories.find({}, {
        fields: { id: id },
    }));
}

export const insertCategory = async (insertData) => {
    return await Categories.insert(insertData);
}

export const updateCategory = async (id, updateData, upadteMany = false) => {
    if (upadteMany)
        return await collection.updateMany({ id: id }, {
            $set: updateData,
        });
    else
        return await Categories.updateOne({ id: id }, {
            $set: updateData,
        });
}

export const deleteCategory = async (id, deleteMany = false) => {
    if (deleteMany)
        return await Categories.removeMany({ id: id });
    else
        return await Categories.removeOne({ id: id });
}
