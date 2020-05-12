export const state = () => ({
  votesEnabled: false,
  additionEnabled: false,
  all: [
    {
      title: 'Frontend Focus',
      description:
        'A once–weekly roundup of the best front-end news, articles and tutorials. HTML, CSS, WebGL, Canvas, browser tech, and more.',
      url: 'https://frontendfoc.us/',
      votes: 350
    },
    {
      title: 'Frontend Weekly',
      description:
        'The best articles, links and news related to Frontend Development delivered once a week to your inbox.',
      url: 'https://frontendweekly.co/',
      votes: 285
    },
    {
      title: 'WDRL (Web deployment Reading list)',
      description:
        'A handcrafted, carefully created weekly update resource for web developers by Anselm Hannemann, founder of Colloq. The project is financed by your donations.',
      url: 'https://wdrl.info/',
      votes: 199
    },
    {
      title: 'JavaScript Weekly',
      description:
        'A free, once–weekly email roundup of JavaScript news and articles.',
      url: 'https://javascriptweekly.com/',
      votes: 164
    },
    {
      title: 'ES.next News',
      description:
        '5 ECMAScript.next links every week, in your inbox. Curated by Dr. Axel Rauschmayer and Johannes Weber',
      url: 'http://esnextnews.com/',
      votes: 128
    },
    {
      title: 'CSS weekly',
      description:
        'weekly e-mail roundup of css articles, tutorials, experiments and tools curated by Zoran Jambor',
      url: 'https://css-weekly.com/',
      votes: 85
    }
  ]
})
