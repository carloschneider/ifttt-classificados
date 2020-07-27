import { buildLink } from '@helpers/index'
import { baseURL } from '@services/ufsc'

describe('Helpers: buidLink', () => {
  it('should return the absolute path', () => {
    const path = 'path'
    const link = buildLink(path)

    expect(link).toEqual(`${baseURL}/${path}`)
  })
})
