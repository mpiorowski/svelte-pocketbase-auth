migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwpo2gv9e20brjs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dperr2xi",
    "name": "userId",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwpo2gv9e20brjs")

  // remove
  collection.schema.removeField("dperr2xi")

  return dao.saveCollection(collection)
})
