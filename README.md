# Leeds Space Comms Website

A modern, responsive website for Leeds Space Comms built with React, Vite, and Tailwind CSS. Inspired by SpaceX's design aesthetic with a focus on space communications technology.

## 🚀 Fixed Issues & Status

✅ **All Compilation Errors Fixed**
- Removed unused imports
- Fixed deprecated social media icons  
- Replaced array index keys with unique identifiers
- Fixed CSS import order for Tailwind v3.4
- Resolved PostCSS configuration issues

✅ **Build Status**: Successfully builds for production
✅ **Tailwind CSS**: Working correctly with v3.4.17
✅ **All Components**: Error-free and functional
✅ **GitHub Pages**: Ready for deployment with automated workflow
- 🌟 **Framer Motion**: Smooth animations and transitions
- 🧭 **React Router**: Client-side routing for seamless navigation
- ♿ **Accessible**: WCAG compliant design with semantic HTML

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Fonts**: Inter & Space Grotesk (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/space-comms/website.git
cd website
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

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.jsx   # Main navigation bar
│   ├── Footer.jsx       # Site footer
│   └── StarField.jsx    # Animated background stars
├── pages/               # Page components
│   ├── Home.jsx         # Homepage with hero section
│   ├── About.jsx        # About us page
│   ├── Technologies.jsx # Our technologies showcase
│   ├── Services.jsx     # Services offered
│   ├── Media.jsx        # Media gallery
│   ├── News.jsx         # News and updates
│   └── Contact.jsx      # Contact form and info
├── assets/              # Static assets
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## Key Features

### Navigation
- Sticky navigation with blur effect on scroll
- Mobile-responsive hamburger menu
- Active page indicators
- Social media integration

### Homepage
- Full-screen hero section with animated particles
- Feature highlights with icons
- Performance statistics
- Call-to-action sections

### Technologies Page
- Grid layout showcasing different technologies
- Status indicators (Deployed, Production, Beta, etc.)
- Detailed feature lists for each technology

### Contact Page
- Interactive contact form
- Contact information cards
- Social media links
- Map placeholder for future integration

### Animations
- Page transitions using Framer Motion
- Hover effects on interactive elements
- Scroll-triggered animations
- Floating and glow effects

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **Space theme**: Dark blues and blacks for backgrounds
- **Primary**: Blue accent colors for interactive elements
- **Custom**: Additional cosmic-inspired colors

### Fonts
- **Inter**: Primary font for body text
- **Space Grotesk**: Display font for headings

### Social Media
Update social media links in:
- `src/components/Navigation.jsx`
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

## Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Update the base URL in `vite.config.js` if needed

### Other Platforms
The built static files in the `dist` directory can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Azure Static Web Apps

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is proprietary to Leeds Space Comms. All rights reserved.

## Contact

For questions about this website, please contact:
- Email: hello@leedsspacecomms.com
- Instagram: [@leedsspacecomms](https://instagram.com/leedsspacecomms)
- LinkedIn: [Leeds Space Comms](https://linkedin.com/company/leedsspacecomms)+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
