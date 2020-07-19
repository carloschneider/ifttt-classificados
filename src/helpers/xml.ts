interface IXML {
  '?xml version="1.0" encoding="UTF-8"?': null
  rss: Object
}

export const xmlBase = (): IXML => {
  return {
    '?xml version="1.0" encoding="UTF-8"?': null,
    rss: {
      '@': {
        version: '2.0',
      },
      '#': {
        channel: {
          '#': {
            title: 'Classificados UFSC RSS',
            description: 'Gera um XML com os imóveis postados nos classificados UFSC para ser usado no IFTTT',
            item: [],
          },
        },
      },
    },
  }
}
