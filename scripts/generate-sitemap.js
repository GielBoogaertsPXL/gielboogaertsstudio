import fs from 'node:fs/promises'

const urls = [
    '/',
    '/work',
    '/about',
    '/work/microtype',
    '/work/jumbledscript',
    '/work/eopa',
    '/work/typeinterplay',
    '/work/virgajesse',
    '/work/enzomari',
    '/work/archetype',
    '/work/phoneticalphabet',
    '/work/hybridpublishing',
    '/work/immohabits',
    '/work/pasters'
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>https://gielboogaerts.com${url}</loc>
  </url>
`).join('')}
</urlset>
`

await fs.writeFile('./dist/sitemap.xml', sitemap)

console.log('✅ sitemap.xml generated')