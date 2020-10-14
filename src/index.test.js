const { color } = require('./index')

test('inputs color outputs color', () => {
  expect(color('#000000')).toBe('#000000')
})
