import cheerio from 'cheerio'

import { convertHTMLToDom } from '@helpers/index'

describe('Helper: convertHTMLToDom', () => {
  let html:string
  let $

  beforeEach(() => {
    html = `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
            </head>
            <body>
              <h1>Hello world</h1>
            </body>
            </html>`

    $ = convertHTMLToDom(html)
  })

  it('should return an instance of cheerio', () => {
    const h1 = $('h1')

    expect(h1).toBeInstanceOf(cheerio)
  })

  it('should return the content of h1', () => {
    const title = 'Hello world'
    const h1 = $('h1')
    const text = h1.text()

    expect(text).toEqual(title)
  })
})
