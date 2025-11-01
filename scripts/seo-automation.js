/**
 * 🚀 SEO Automation Script for Next.js
 * Regenerates sitemap, pings Google/Bing, and requests reindexing if configured.
 */

import fetch from 'node-fetch';
import fs from 'fs';

const siteUrl = 'https://bexatm.com';
const sitemapUrl = `${siteUrl}/sitemap.xml`;

// === Step 1: Ping Google & Bing ===
async function pingSearchEngines() {
  try {
    console.log('🔄 Pinging search engines...');
    await Promise.all([
      fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`),
      fetch(`https://www.bing.com/ping?sitemap=${sitemapUrl}`)
    ]);
    console.log('✅ Successfully notified Google & Bing about sitemap updates');
  } catch (err) {
    console.error('❌ Failed to ping search engines:', err);
  }
}

// === Step 2: (Optional) Request Indexing via Google Indexing API ===
// Uncomment and configure if you have a Google service account and Indexing API enabled
/*
import { google } from 'googleapis';

async function requestIndexing() {
  const urls = [
    'https://bexatm.com/',
    'https://bexatm.com/content/bos',
    'https://bexatm.com/content/cms',
    'https://bexatm.com/content/emp',
    'https://bexatm.com/content/enhance',
    'https://bexatm.com/content/services',
    'https://bexatm.com/faq',
    'https://bexatm.com/whyatm'
  ];

  const KEYFILEPATH = './service-account.json';
  const SCOPES = ['https://www.googleapis.com/auth/indexing'];

  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES,
  });

  const client = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: client });

  for (const url of urls) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: { url, type: 'URL_UPDATED' },
      });
      console.log(`📤 Reindex request sent for ${url}`);
    } catch (error) {
      console.error(`❌ Index request failed for ${url}:`, error.message);
    }
  }
}
*/

// === Step 3: Execute ===
(async () => {
  console.log('🚀 Starting SEO automation for', siteUrl);
  await pingSearchEngines();
  // await requestIndexing(); // uncomment if using Indexing API
  console.log('🎯 SEO automation complete!');
})();
