import express from 'express';
import fetch from 'fetch';
import cheerio from 'cheerio';
import xml from 'object-to-xml';

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listen on ${port}`);
});

function capitalize(title) {
  return title.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()).trim();
}

function fullLink(link) {
  return `https://classificados.inf.ufsc.br/${link}`;
}

app.get('/', (req, res) => {
  const ads = {
    '?xml version="1.0" encoding="UTF-8"?': null,
    channel: {
      '#': {
        title: 'Classificados UFSC RSS',
        description: 'Gera um XML com os imóveis postados nos classificados UFSC para ser usado no IFTTT',
        item: [],
      },
    },
  };

  fetch.fetchUrl('https://classificados.inf.ufsc.br/index.php?catid=72', (err, meta, body) => {
    const $ = cheerio.load(body.toString());

    $('h2').next('table').find('tr:nth-child(1n+2)').each((id, e) => {
      const $el = $(e);

      if ($el.find('td a').text() === 'Próximo 30 >') {
        return false;
      }

      const title = capitalize($el.find('.pointer a').text());
      const link = fullLink($el.find('.pointer a').attr('href'));
      const price = $el.find('td').eq(6).text();

      return ads.channel['#'].item.push({
        id,
        title,
        link,
        price,
      });
    });

    res
      .status(200)
      .set('Content-Type', 'text/xml')
      .send(xml(ads));
  });
});
