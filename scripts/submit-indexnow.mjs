#!/usr/bin/env node
// Submit site URLs to IndexNow. The script is safe in CI: if no key is
// configured, it exits successfully after printing a skip message.

import { readFileSync, existsSync } from 'fs'

const HOST = 'zenine.github.io'
const SITE_ORIGIN = 'https://zenine.github.io'
const BASE_PATH = '/resume-intelligence-hub-site/'
const ENDPOINT = 'https://api.indexnow.org/indexnow'

function loadKey() {
  if (process.env.INDEXNOW_KEY) return process.env.INDEXNOW_KEY.trim()
  const file = process.env.INDEXNOW_KEY_FILE
  if (file && existsSync(file)) return readFileSync(file, 'utf8').trim()
  console.warn('[skip] no INDEXNOW_KEY or INDEXNOW_KEY_FILE configured')
  return ''
}

function publicUrl(path) {
  return `${SITE_ORIGIN}${BASE_PATH}${path}`
}

const urlList = [
  publicUrl(''),
  publicUrl('quick-start.html'),
  publicUrl('skill-contract.html'),
  publicUrl('examples.html'),
  publicUrl('philosophy.html'),
  publicUrl('frameworks.html'),
  publicUrl('faq.html'),
  publicUrl('release.html'),
  publicUrl('zh/'),
  publicUrl('zh/quick-start.html'),
  publicUrl('zh/skill-contract.html'),
  publicUrl('zh/examples.html'),
  publicUrl('zh/philosophy.html'),
  publicUrl('zh/frameworks.html'),
  publicUrl('zh/faq.html'),
  publicUrl('zh/release.html'),
  publicUrl('ja/'),
  publicUrl('ja/quick-start.html'),
  publicUrl('ja/skill-contract.html'),
  publicUrl('ja/examples.html'),
  publicUrl('ja/philosophy.html'),
  publicUrl('ja/frameworks.html'),
  publicUrl('ja/faq.html'),
  publicUrl('ja/release.html'),
  publicUrl('zh-TW/'),
  publicUrl('zh-TW/quick-start.html'),
  publicUrl('zh-TW/skill-contract.html'),
  publicUrl('zh-TW/examples.html'),
  publicUrl('zh-TW/philosophy.html'),
  publicUrl('zh-TW/frameworks.html'),
  publicUrl('zh-TW/faq.html'),
  publicUrl('zh-TW/release.html'),
  publicUrl('llms.txt'),
  publicUrl('zh/llms.txt'),
  publicUrl('ja/llms.txt'),
  publicUrl('zh-TW/llms.txt'),
  publicUrl('llms-full.txt'),
  publicUrl('sitemap.xml'),
]

const key = loadKey()
if (!key) process.exit(0)

if (process.argv.includes('--dry-run')) {
  console.log(JSON.stringify({ host: HOST, keyLocation: publicUrl(`${key}.txt`), urlList }, null, 2))
  process.exit(0)
}

const response = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: publicUrl(`${key}.txt`),
    urlList,
  }),
})

console.log(`POST ${ENDPOINT} -> ${response.status} ${response.statusText}`)
if (!response.ok) {
  console.error(await response.text())
  process.exit(1)
}
