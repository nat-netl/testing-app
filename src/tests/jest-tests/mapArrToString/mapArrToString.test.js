const mapArrToString = require ('./mapArrToString')

describe('mapArrToString', () => {
  test ('Корректное значение', () => {
    expect (mapArrToString([1,4,55,34])).toEqual(['1','4','55','34'])
  })

  test ('Значения различных типов', () => {
    expect (mapArrToString([1,4,55,34, undefined, null, '123'])).toEqual(['1','4','55','34'])
  })

});
