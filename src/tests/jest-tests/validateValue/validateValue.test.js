const validateValue = require ('./validateValue')

test ('Валидация значение', () => {
  expect (validateValue(50)).toBe(true)
})

describe('validateValue', () => {
  test ('Корректное значение', () => {
    expect (validateValue(50)).toBe(true)
  })

  test ('Меньше корректного', () => {
    expect (validateValue(-1)).toBe(false)
  })

  test ('Больше корректного', () => {
    expect (validateValue(500)).toBe(false)
  })

  test ('Пограничное значение снизу', () => {
    expect (validateValue(0)).toBe(true)
  })

  test ('Пограничное значение сверху', () => {
    expect (validateValue(100)).toBe(true)
  })
});
