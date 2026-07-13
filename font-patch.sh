#!/bin/bash
# Patch worker.js: swap Fontshare → Google Fonts DM Sans + Playfair Display

sed -i 's|<link href="https://api.fontshare.com/v2/css?f\[\]=cabinet-grotesk@400,500,700,800,900&f\[\]=satoshi@300,400,500,700&display=swap" rel="stylesheet">|<link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400\&family=Playfair+Display:wght@700;800;900\&display=swap" rel="stylesheet">|g' worker.js

sed -i "s|--font-display: 'Cabinet Grotesk', 'Helvetica Neue', sans-serif;|--font-display: 'Playfair Display', Georgia, serif;|g" worker.js
sed -i "s|--font-body:    'Satoshi', 'Inter', sans-serif;|--font-body:    'DM Sans', 'Inter', sans-serif;|g" worker.js

sed -i "s|\"style-src 'self' 'unsafe-inline' https://api.fontshare.com\"|\"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com\"|g" worker.js
sed -i "s|\"font-src https://api.fontshare.com https://cdn.fontshare.com\"|\"font-src https://fonts.gstatic.com\"|g" worker.js

echo "Done! Now run: git add worker.js && git commit -m 'feat: DM Sans body font' && git push"
