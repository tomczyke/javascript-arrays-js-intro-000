var chocolateBars = [
  'snickers' ,
  'hundred grand' ,
  'kitkat' ,
  'skittles'
]

function addElementToBeginningOfArray(a,e) {
  return [a, ...e];
  }

function destructiveAddElementToBeginningOfArray(a,e) {
  return a.unshift(e)
}