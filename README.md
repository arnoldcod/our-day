# A&H Wedding Website 💒

A modern, elegant wedding website built with React and Vite, featuring a beautiful UI with animations, multi-language support, and countdown timer to the big day.

## 📋 Overview

This is a complete wedding website for Arnold & Haven's special day, featuring a responsive design with smooth animations and internationalization support for English and French.

**Wedding Date:** February 14, 2026

## ✨ Features

- **Countdown Timer** - Live countdown to the wedding day
- **Multi-language Support** - English and French translations using i18next
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for elegant page transitions and interactions
- **Multiple Pages:**
  - Home page with hero section and event details
  - Our Story page with the couple's journey
  - Registry page with gift information
  - RSVP integration via Google Forms
- **Photo Galleries** - Showcasing the couple's journey
- **Venue Information** - Ceremony and reception details with links
- **Travel Information** - Airport details and accommodation suggestions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/arnoldcod/our-day.git
cd our-day
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🛠️ Tech Stack

- **Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.5
- **Routing:** React Router DOM 7.1.1
- **Styling:** Tailwind CSS 3.4.17
- **Animations:** Framer Motion 11.15.0
- **Internationalization:** i18next & react-i18next
- **Icons:** Heroicons
- **Linting:** ESLint

## 📁 Project Structure

```
A&H/
├── src/
│   ├── components/
│   │   ├── HomePage.jsx          # Main landing page
│   │   ├── OurStoryPage.jsx      # Couple's story
│   │   ├── RegistryPage.jsx      # Gift registry
│   │   ├── RsvpPage.jsx          # RSVP form
│   │   ├── Navbar.jsx            # Navigation component
│   │   ├── GallerySection.jsx    # Photo gallery
│   │   └── GallerySectionChina.jsx
│   ├── App.jsx                   # Main app component
│   └── main.jsx                  # Entry point
├── public/                       # Static assets
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🌐 Pages

### Home (`/`)
- Hero section with countdown timer
- Event details (ceremony & reception)
- RSVP call-to-action
- Photo gallery
- Travel information

### Our Story (`/our-story`)
- How the couple met
- Building life together
- The proposal story
- Photo gallery from their journey

### Registry (`/registry`)
- Gift registry information
- Bank transfer details
- Contact information

### RSVP
- Integration with Google Forms for guest responses

## 🎨 Customization

### Changing the Wedding Date

Update the date in `src/components/HomePage.jsx`:

```javascript
const weddingDate = new Date('2026-02-14').getTime();
```

### Adding/Editing Translations

Translations are managed through i18next. Add or modify translation files in your i18n configuration.

### Updating Venue Information

Edit the ceremony and reception details in the `HomePage.jsx` component.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal wedding website, but feel free to fork it for your own wedding!

## 📄 License

This project is private and all rights reserved to Arnold & Haven.

## 📧 Contact

For questions or issues, please reach out to:
- Arnold Uwamwezi: +250 7940 017 26 (Rwanda) / +256 749 002 710 (Uganda)

---

**Built with ❤️ for Arnold & Haven's special day**
