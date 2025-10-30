# 🔧 Scripts Directory

Utility scripts for development, testing, and maintenance of the Preincoh landing page.

---

## Overview

This directory contains utility scripts used during development. These are **not committed to git** and are for local development use only.

---

## Available Scripts

### JavaScript Scripts (Node.js)

#### `verify-improvements.js`
Verifies that all design improvements have been properly implemented.

**Usage:**
```bash
node scripts/verify-improvements.js
```

**What it checks:**
- Component files exist
- SVG assets created
- Dependencies installed
- Icons implemented
- Animation timing optimized
- Build status
- Documentation complete

**Output:** Generates `VERIFICATION_REPORT.md`

---

#### `test-lighthouse.js`
Runs Lighthouse audits on the site (requires dev server running).

**Usage:**
```bash
npm run dev    # First terminal
node scripts/test-lighthouse.js    # Second terminal
```

**Prerequisites:**
- Development server must be running on `http://localhost:3000`
- Chrome/Chromium must be installed

**Output:** Generates `lighthouse-report.json` with:
- Performance score
- Accessibility score
- Best Practices score
- SEO score
- Detailed metrics (FCP, LCP, CLS, TTI, etc.)

---

#### `capture-screenshots.js`
Captures screenshots of the website at different viewport sizes.

**Usage:**
```bash
npm run dev    # First terminal
node scripts/capture-screenshots.js    # Second terminal
```

**Prerequisites:**
- Development server must be running
- Puppeteer (installed via npm)

**Captures:**
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)
- Hero section detail
- Dark mode version

**Output:** Screenshots saved to `/screenshots/` directory

---

### Python Scripts (Python 3)

#### `remove_background.py`
Removes white background from the logo and generates favicons.

**Usage:**
```bash
python scripts/remove_background.py
```

**Prerequisites:**
- Python 3.6+
- Pillow library: `pip install Pillow`

**What it does:**
- Removes white pixels from logo (RGB > 240)
- Generates transparent PNG
- Creates favicons in 8 sizes (16-512px)
- Outputs:
  - `public/logo-transparent.png`
  - `public/favicon.ico`
  - `public/apple-touch-icon.png`
  - `public/favicon-*.png`

---

#### `remove_background_advanced.py`
Advanced logo background removal with contrast enhancement.

**Usage:**
```bash
python scripts/remove_background_advanced.py
```

**Prerequisites:**
- Python 3.6+
- Pillow: `pip install Pillow`
- NumPy: `pip install numpy`

**Features:**
- Pixel-level background removal
- Automatic contrast enhancement (1.15x)
- Saturation improvement (1.15x)
- Edge smoothing with Gaussian blur
- Multiple logo variants:
  - 500x500px
  - 800x800px
  - 1200x1200px
- Windows-compatible (UTF-8 encoding)

**Output:**
- `public/logopreincoh-enhanced.png`
- Logo variants in various sizes
- All optimized PNGs

---

### Shell Scripts (Bash)

#### `organize.sh`
Organizes the project structure (already executed, kept for reference).

**Usage:**
```bash
bash scripts/organize.sh
```

**What it does:**
- Creates logical folder structure
- Moves documentation to `docs/`
- Moves config files to `config/`
- Groups files by purpose

---

#### `verify-structure.sh`
Verifies the project structure is properly organized.

**Usage:**
```bash
bash scripts/verify-structure.sh
```

**Checks:**
- Main folders exist (app/, components/, public/, etc.)
- Configuration files present
- Documentation folders created
- Claude Code setup complete

---

## Running Scripts in Development

### Quick Verification
```bash
# Check everything is working
node scripts/verify-improvements.js
```

### Full Testing Suite
```bash
# Start dev server (Terminal 1)
npm run dev

# In Terminal 2, run audits
node scripts/verify-improvements.js
node scripts/test-lighthouse.js
node scripts/capture-screenshots.js
```

### Logo Processing
```bash
# Basic background removal
python scripts/remove_background.py

# Advanced with contrast enhancement
python scripts/remove_background_advanced.py
```

### Project Organization
```bash
# Verify structure
bash scripts/verify-structure.sh

# Re-organize (if needed)
bash scripts/organize.sh
```

---

## Script Locations

| Script | Type | Purpose |
|--------|------|---------|
| `verify-improvements.js` | Node.js | QA verification |
| `test-lighthouse.js` | Node.js | Performance audit |
| `capture-screenshots.js` | Node.js | Visual testing |
| `remove_background.py` | Python | Logo processing |
| `remove_background_advanced.py` | Python | Advanced logo processing |
| `organize.sh` | Bash | Project organization |
| `verify-structure.sh` | Bash | Structure verification |

---

## Output Files

Scripts generate various output files:

```
/public/               (Logo assets)
  ├── logo-transparent.png
  ├── logo-enhanced.png
  ├── favicon.ico
  └── favicon-*.png

/screenshots/          (Screenshots)
  ├── desktop-full.png
  ├── tablet-full.png
  ├── mobile-full.png
  ├── dark-mode-full.png
  └── hero-section.png

Root directory:
  ├── VERIFICATION_REPORT.md
  └── lighthouse-report.json
```

---

## Requirements

### Node.js Scripts
- Node.js 14+ (usually comes with npm)
- Dependencies installed: `npm install`
- Dev server running: `npm run dev`

### Python Scripts
- Python 3.6+
- Pillow: `pip install Pillow`
- NumPy (for advanced): `pip install numpy`

### Bash Scripts
- Bash shell (Unix/Linux/macOS)
- Utilities: mkdir, mv, ls, etc.

---

## Troubleshooting

### Scripts not running
```bash
# Make scripts executable
chmod +x scripts/*.sh
chmod +x scripts/*.js
chmod +x scripts/*.py
```

### Python dependencies missing
```bash
# Install required packages
pip install Pillow
pip install numpy
```

### Dev server errors
```bash
# Ensure dev server is running
npm run dev
# Should be accessible at http://localhost:3000
```

### Chrome not found (Lighthouse)
```bash
# Install Chromium
npm install chromium
# Or use system Chrome
```

---

## Notes

- **These scripts are NOT committed to git** (see `.gitignore`)
- They are **development utilities only**
- Run them locally during development
- Some require the dev server running
- Output files may be generated in the root directory (move them if needed)

---

## Git Status

These files are explicitly excluded in `.gitignore`:
```
.gitignore includes:
  - capture-screenshots.js
  - test-lighthouse.js
  - verify-improvements.js
  - remove_background.py
  - remove_background_advanced.py
  - organize.sh
  - verify-structure.sh
```

They won't be tracked in version control.

---

## For More Information

See:
- [DEVELOPMENT.md](../docs/guides/DEVELOPMENT.md) - Development guide
- [PROJECT_STRUCTURE.md](../docs/PROJECT_STRUCTURE.md) - Project organization
- [.gitignore](../.gitignore) - What's tracked/ignored

---

*Last Updated: October 30, 2025*
*Preincoh Landing Page v1.1.0*
