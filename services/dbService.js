'use strict'

import { storageService } from "./storageService.js"
import { utilService } from "./utilService.js"

export const dbSerivce = {
    query,
    get,
    insert,
}

const ID_FIELD = '_id'

function query(collectionName) {
    var collection = storageService.load(collectionName)
    if (!collection) collection = []
    return Promise.resolve(collection)
}

async function get(collectionName, id) {
    var collection = await query(collectionName)
    return collection.find(curr => curr[ID_FIELD] === id)
}

async function insert(collectionName, items) {
    var collection = await query(collectionName) 
        items.forEach(curr => (curr[ID_FIELD] = utilService.makeId()))
        collection.push(...items)
}