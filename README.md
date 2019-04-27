# robbie.xyz
Personal website for Robbie Jakob-Whitworth.

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
This project is designed to be served as static pages. It can be deployed
to shared hosting running Apache/PHP or similar. If working locally, it
is convenient to run the following if you have Python 3 installed:

#### Python 3

    cd public/
    python3 -m http.server
    
#### Python 2

    cd public/
    python -m SimpleHTTPServer
