const https = require('https');

https.get('https://docs.google.com/forms/d/e/1FAIpQLSev4odpcJ5fFEPHh9qDT5vJs8nByx66GN5hhVCkDmyQsAZFmg/viewform', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const match = data.match(/FB_PUBLIC_LOAD_DATA_ = (.*);/);
    if (match) {
      try {
        const parsed = JSON.parse(match[1]);
        const fields = parsed[1][1];
        fields.forEach(field => {
          const label = field[1];
          const entryId = field[4][0][0];
          console.log(`Label: "${label}", ID: entry.${entryId}`);
          // If it's a radio/dropdown, it might have options
          if (field[4][0][1]) {
            console.log("Options: " + field[4][0][1].map(o => o[0]).join(", "));
          }
        });
      } catch (e) {
        console.log("Error parsing");
      }
    }
  });
});
