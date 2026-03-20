# zzzzzzzzzzzzzzzz.com — Developer Handoff

## Files

| File | Description |
|------|-------------|
| `index.html` | Main one-page website |
| `article.html` | Full fake journal article page |
| `style.css` | Styles for index.html |
| `article.css` | Styles for article.html |
| `main.js` | JavaScript (stars, cite modal, copy buttons) |

## Structure

- **index.html** links to `article.html` via the "Read Full Article" button in the Research section.
- Both pages link to Google Fonts (Playfair Display, DM Sans, Libre Baskerville, Source Sans 3). An internet connection is required, or fonts can be self-hosted.
- No build step, no frameworks, no dependencies. Drop files on any static host and it works.

## Hosting

Works on any static host: Netlify, Vercel, GitHub Pages, S3, etc. Just upload all 5 files keeping them in the same folder.

## Notes

- The site uses `backdrop-filter: blur()` in the nav, which requires a modern browser (Chrome 76+, Firefox 103+, Safari 9+).
- The star background is generated dynamically by `main.js`.
- The Cite modal uses `navigator.clipboard` for the copy button — this requires HTTPS in production (works fine on localhost too).
