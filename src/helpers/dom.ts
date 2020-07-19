import cheerio from 'cheerio'

export const convertHTMLToDom = (html: string) => {
  return cheerio.load(html)
}
