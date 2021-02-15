# RETIRED
Replaced by [robzwolf/website](https://github.com/robzwolf/website).

The below is preserved for historical reasons only.

***

# robbie.xyz
Personal website for Robbie Jakob-Whitworth.

## Requirements
- node v10
    - > v12 does not work
- [netlify-cli](https://www.netlify.com/docs/cli/#installation)

## Quick Start
### 1. Install dependencies

    npm install
    
### 2. Build assets
If working locally:

    npm run dev
    
If building for production:

    npm run prod

To watch the assets:

    npm run watch

### 3. Start server
This project is designed to be served as static pages. It can be deployed to static hosting
such as GitHub Pages, Netlify, etc. Additionally, it can be deployed to shared hosting
running Apache/PHP or similar. 

#### Netlify
If you have [netlify-cli](https://www.netlify.com/docs/cli/#installation) installed:

    netlify dev
    
#### Python
Alternatively, if you have Python:

#### Python 3

    cd public/
    python3 -m http.server
    
#### Python 2

    cd public/
    python -m SimpleHTTPServer
