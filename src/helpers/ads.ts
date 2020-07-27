import { capitalize, trim } from 'lodash'
import { xmlBase, buildLink } from './'

export const mapAds = ($: CheerioStatic) => {
  const ads = xmlBase()

  $('h2').next('table').find('tr:nth-child(1n+2)').each((_, e) => {
    const $el = $(e)

    if ($el.find('td a').text() === 'Próximo 30 >') {
      return false
    }

    const price = $el.find('td').eq(6).text()
    const title = `${capitalize(trim($el.find('.pointer a').text()))} - Preço: ${price}`
    const href = $el.find('.pointer a').attr('href')
    const link = buildLink(href)

    return ads.rss['#'].channel['#'].item.push({
      title,
      link
    })
  })

  return ads
}
