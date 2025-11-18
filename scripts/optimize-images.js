/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const ROOT = process.cwd()
const PUBLIC = path.join(ROOT, 'public')
const OUT_DIR = path.join(PUBLIC, 'images', 'optimized')

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

// Scan pages and components for /images/ references
const scanDirs = [path.join(ROOT, 'pages'), path.join(ROOT, 'components')]
const imgRefs = new Set()

const IMG_REGEX = /["'`]\/images\/([\w-@()\.\/ _]+\.(?:png|jpe?g|webp))/gi

scanDirs.forEach(dir => {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const fp = path.join(dir, file)
    if (fs.statSync(fp).isFile() && fp.endsWith('.js')) {
      const content = fs.readFileSync(fp, 'utf8')
      let m
      while ((m = IMG_REGEX.exec(content))) {
        imgRefs.add(m[1])
      }
    }
  })
})

const mapping = {}

async function processImage(relPath) {
  // relPath is the filename captured after /images/ in source files
  // source images live under public/images/
  const srcPath = path.join(PUBLIC, 'images', relPath)
  if (!fs.existsSync(srcPath)) {
    console.warn('source not found', srcPath)
    return
  }

  const parsed = path.parse(relPath)
  const baseName = parsed.name
  const outWebp = path.join(OUT_DIR, `${baseName}-opt.webp`)
  const outJpg = path.join(OUT_DIR, `${baseName}-opt.jpg`)

  try {
    await sharp(srcPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outWebp)

    await sharp(srcPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toFile(outJpg)

    mapping[`/images/${relPath}`] = {
      webp: `/images/optimized/${path.basename(outWebp)}`,
      jpg: `/images/optimized/${path.basename(outJpg)}`
    }

    console.log('Optimized', relPath)
  } catch (err) {
    console.error('Failed to optimize', relPath, err.message)
  }
}

;(async function main(){
  if (!imgRefs.size) {
    console.log('No image references found in pages/components. You can pass a list manually.')
  }

  for (const rel of imgRefs) {
    await processImage(rel)
  }

  // write mapping
  const MAP_PATH = path.join(OUT_DIR, 'mapping.json')
  fs.writeFileSync(MAP_PATH, JSON.stringify(mapping, null, 2), 'utf8')
  console.log('Wrote mapping to', MAP_PATH)
})()
