var recipes = {}



function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( {}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}


function deleteFromObjectByKey(object, key) {
  object = {}
  var newObj = Object.assign({}, object)
  delete newObj.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  object = {}
  var newObj = Object.assign({}, object)
  delete newObj.key
  newObj
  return newObj
  delete object.key
  object
  return object
}