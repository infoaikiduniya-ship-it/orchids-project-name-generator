import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./report-audit.json', 'utf8'));

const perf = data.categories.performance;
console.log('--- Performance Score ---');
console.log(`Score: ${Math.round(perf.score * 100)}/100`);

console.log('\n--- Core Web Vitals ---');
const metrics = ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'interactive', 'speed-index'];
metrics.forEach(id => {
  const audit = data.audits[id];
  if (audit) {
    console.log(`${audit.title}: ${audit.displayValue} (${Math.round(audit.numericValue)}ms)`);
  }
});

console.log('\n--- Page Weight / Size ---');
const totalByteWeight = data.audits['total-byte-weight'];
if (totalByteWeight) {
  console.log(`${totalByteWeight.title}: ${totalByteWeight.displayValue}`);
}

console.log('\n--- Top Performance Opportunities ---');
Object.keys(data.audits).forEach(id => {
  const audit = data.audits[id];
  if (audit && audit.details && audit.details.type === 'opportunity' && audit.numericValue > 0) {
    console.log(`\n> ${audit.title} (Savings: ${audit.displayValue || Math.round(audit.numericValue) + 'ms'}):`);
    if (audit.details.items) {
      audit.details.items.slice(0, 5).forEach(item => {
        console.log(`  - Url: ${item.url || 'N/A'}`);
        console.log(`    Wasted Ms: ${item.wastedMs ? Math.round(item.wastedMs) + 'ms' : 'N/A'}`);
        console.log(`    Size: ${item.totalBytes ? Math.round(item.totalBytes / 1024) + ' KB' : 'N/A'}`);
      });
    }
  }
});

console.log('\n--- Network Request Statistics ---');
const networkRequests = data.audits['network-requests'];
if (networkRequests && networkRequests.details && networkRequests.details.items) {
  const totalRequests = networkRequests.details.items.length;
  console.log(`Total Requests: ${totalRequests}`);
}
