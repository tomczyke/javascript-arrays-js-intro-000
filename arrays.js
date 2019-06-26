var chocolateBars = [
  'snickers' ,
  'hundred grand' ,
  'kitkat' ,
  'skittles'
]

function addElementToBeginningOfArray(array,element) {
  return [array, ...element];
  }

function destructiveAddElementToBeginningOfArray(array,element) {
  return array.unshift(element)
}
