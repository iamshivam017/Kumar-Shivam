import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const css = readFileSync(new URL('../dist/styles.css', import.meta.url), 'utf8');
const js = readFileSync(new URL('../dist/script.js', import.meta.url), 'utf8');
const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');

test('uses the verified professional identity and degree everywhere', () => {
  assert.match(html, /Kumar Shivam/);
  assert.doesNotMatch(html, /Shivam Kumar/);
  assert.match(readme, /Kumar Shivam/);
  assert.doesNotMatch(readme, /Shivam Kumar/);
  assert.match(html, /AI\/ML &amp; Software Engineer|AI\/ML & Software Engineer/);
  assert.match(html, /B\.Sc\. in Data Science &amp; AI|B\.Sc\. in Data Science & AI/);
  assert.match(html, /Indian Institute of Technology Guwahati/);
  assert.match(html, /2023–2027/);
  assert.doesNotMatch(html, /B\.Tech/i);
});

test('has one proposition-led h1 and the required information architecture', () => {
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.match(html, /<h1[^>]*>\s*Building intelligent software/);
  for (const id of ['work', 'capabilities', 'experience', 'about', 'contact']) {
    assert.match(html, new RegExp(`id=["']${id}["']`));
  }
});

test('features only evidence-backed flagship projects', () => {
  for (const name of ['AgentLedger', 'AgentShield AI', 'SafeSpend', 'Credit Risk Predictor', 'ReviewLens']) {
    assert.match(html, new RegExp(name));
  }
  assert.doesNotMatch(html, />CoSign</);
  assert.doesNotMatch(html, />ProofPay</);
  assert.equal((html.match(/<article[^>]+class=["'][^"']*case-study/g) || []).length, 3);
  assert.match(html, /<aside class="work-index"[\s\S]*01—03[\s\S]*href="#credit-risk"/);
  assert.match(html, /<section class="more-work shell"[\s\S]*SafeSpend[\s\S]*ReviewLens/);
});

test('links to verified professional profiles and repositories', () => {
  for (const url of [
    'https://github.com/iamshivam017',
    'https://www.linkedin.com/in/shivam017/',
    'https://x.com/shivam_aarya017',
    'https://github.com/iamshivam017/AgentLedger',
    'https://github.com/iamshivam017/AgentShield-AI',
    'https://github.com/iamshivam017/SafeSpend',
    'https://github.com/iamshivam017/Credit-Risk-Predictor',
    'https://github.com/iamshivam017/ReviewLens'
  ]) assert.ok(html.includes(url), `missing ${url}`);

  for (const tag of html.match(/<a\b[^>]*target=["']_blank["'][^>]*>/g) || []) {
    assert.match(tag, /rel=["'][^"']*noopener[^"']*noreferrer[^"']*["']/);
  }
});

test('implements the restrained responsive design contract', () => {
  for (const token of ['--canvas:', '--ink:', '--accent:', '--line:', '--space-', '--page-gutter:', '--grid-gap:']) assert.ok(css.includes(token), `missing ${token}`);
  assert.match(css, /@media\s*\(max-width:\s*800px\)/);
  assert.match(css, /@media\s*\(max-width:\s*430px\)/);
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /min-height:\s*44px/);
  assert.doesNotMatch(css, /font-size:\s*(?:[0-9]|1[01])px/);
  const remSizes = [...css.matchAll(/font-size:\s*([\d.]+)rem/g)].map(match => Number(match[1]));
  assert.ok(remSizes.every(size => size >= 0.75), 'rem text must not fall below a readable 0.75rem floor');
});

test('uses one calibrated grid and typography scale across major sections', () => {
  assert.match(css, /--layout-grid:repeat\(12,minmax\(0,1fr\)\)/);
  assert.match(css, /\.hero\{[^}]*grid-template-columns:var\(--layout-grid\)/);
  assert.match(css, /\.section-intro\{[^}]*grid-template-columns:var\(--layout-grid\)/);
  assert.match(css, /\.case-study\{[^}]*grid-template-columns:var\(--layout-grid\)/);
  assert.match(css, /\.about-section\{[^}]*grid-template-columns:var\(--layout-grid\)/);
  assert.match(css, /\.contact-inner\{[^}]*grid-template-columns:var\(--layout-grid\)/);
  assert.match(css, /h2\{font-size:clamp\(2\.5rem,[^,]+,2\.875rem\)/);
  assert.match(css, /\.hero h1\{font-size:clamp\(4rem,[^,]+,4\.5rem\)/);
  assert.match(css, /\.case-copy h3\{font-size:clamp\(2rem,[^,]+,2\.25rem\)/);
  assert.match(css, /\.case-copy,\.system-frame\{min-width:0\}/);
});

test('presents additional work as a compact responsive project index', () => {
  assert.match(html, /class="work-index-head"/);
  assert.equal((html.match(/class="work-row"/g) || []).length, 2);
  assert.match(css, /\.work-row\{display:grid;grid-template-columns:minmax\(0,2fr\) minmax\(0,4fr\) minmax\(0,3fr\) minmax\(8rem,1\.5fr\)/);
});

test('keeps core text colors at WCAG AA contrast', () => {
  const token = name => css.match(new RegExp(`${name}:(#[0-9a-f]{6})`, 'i'))?.[1];
  const luminance = hex => {
    const channels = hex.slice(1).match(/../g).map(value => parseInt(value, 16) / 255);
    const linear = channels.map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
  };
  const contrast = (foreground, background) => {
    const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
    return (values[0] + 0.05) / (values[1] + 0.05);
  };
  for (const foreground of ['--ink', '--muted', '--accent']) {
    assert.ok(contrast(token(foreground), token('--canvas')) >= 4.5, `${foreground} must meet AA on --canvas`);
  }
});

test('implements accessible menu, detail, and reveal behavior', () => {
  assert.match(js, /aria-expanded/);
  assert.match(js, /aria-controls/);
  assert.match(js, /Escape/);
  assert.match(js, /matchMedia/);
  assert.match(js, /IntersectionObserver/);
  assert.match(js, /aria-current/);
  assert.match(css, /\.work-index a\.is-active/);
  assert.doesNotMatch(html, /<script[^>]+https?:\/\//);
});

test('ships complete professional metadata and crawl files', () => {
  for (const meta of ['canonical', 'og:title', 'og:description', 'og:url', 'twitter:card', 'twitter:title', 'twitter:description']) {
    assert.ok(html.includes(meta), `missing metadata: ${meta}`);
  }
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type":\s*"Person"/);
  assert.match(html, /"@type":\s*"WebSite"/);
  assert.ok(existsSync(new URL('../dist/robots.txt', import.meta.url)));
  assert.ok(existsSync(new URL('../dist/sitemap.xml', import.meta.url)));
});

test('has unique ids, valid fragments, and resolvable local assets', () => {
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const href of [...html.matchAll(/href=["']#([^"']+)["']/g)].map(match => match[1])) assert.ok(ids.includes(href), `missing fragment #${href}`);
  for (const asset of [...html.matchAll(/(?:href|src)=["'](\/[^"'#?]+)["']/g)].map(match => match[1])) {
    assert.ok(existsSync(new URL(`../dist${asset}`, import.meta.url)), `missing local asset ${asset}`);
  }
});
