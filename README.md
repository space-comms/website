# Leeds Space Comms — Student Society Website

A modern, responsive website for Leeds Space Comms, a student-led satellite and space communications society at the University of Leeds. Built with React, Vite, and Tailwind CSS with a space-inspired design aesthetic.

## 🛰️ About Leeds Space Comms

Leeds Space Comms is a vibrant student society dedicated to satellite and space communications technology. We're a community of engineering, computing, and physics students passionate about:

- **CubeSat Development** — Building and programming nano-satellites
- **Radio Communications** — APRS, beacons, and experimental radio projects  
- **Antenna Design** — Constructing and testing various antenna systems
- **Space Tracking** — Monitoring satellites and space missions
- **Educational Workshops** — Hands-on learning about space technology
- **Outreach Events** — Inspiring the next generation of space enthusiasts

**Open to all students** — Whether you're studying engineering, computer science, physics, or any field, if you're curious about space communications, you're welcome to join us!

## 🚀 Mission Statement

To foster student innovation in satellite and space communications through collaborative projects, educational workshops, and hands-on experience with cutting-edge space technology. We aim to bridge the gap between academic learning and real-world space industry applications while building a supportive community of space enthusiasts.

## 🔧 Current Projects

- **University CubeSat Initiative** — Contributing to satellite missions
- **Ground Station Development** — Building antenna arrays for satellite tracking
- **APRS Network Expansion** — Enhancing amateur radio packet networks
- **Educational Beacon Project** — Teaching radio fundamentals through practice
- **Space Weather Monitoring** — Real-time atmospheric and solar data collection

## 👥 Get Involved

**Interested in joining?** We welcome students from all backgrounds and experience levels:

- **Weekly Meetings** — Thursdays at 6 PM in the Engineering Building
- **Project Teams** — Join ongoing satellite and radio communication projects
- **Workshops** — Learn soldering, programming, and RF design
- **Competitions** — Participate in national and international space challenges
- **Social Events** — Connect with like-minded space enthusiasts

**Contact us:** [leedsspacecomms@leeds.ac.uk](mailto:info@leedsspacecomms.co.uk)  
**Follow us:** [@leedsspacecomms](https://instagram.com/leedsspacecomms) on Instagram and LinkedIn

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

## 🚀 Contributing to Leeds Space Comms Website

We welcome contributions from all society members and fellow students! Whether you're a beginner or experienced developer, there are ways to get involved:

### For New Members
- **Web Development Workshops** — Join our coding sessions to learn React, JavaScript, and web design
- **Content Creation** — Help write about our projects, update news, and create educational content
- **Design Input** — Contribute ideas for user interface improvements and accessibility
- **Testing** — Help test the website on different devices and report issues

### For Experienced Developers
- **Feature Development** — Build new sections for project showcases, member profiles, or interactive demos
- **Performance Optimization** — Help improve loading times and user experience
- **Mobile Enhancements** — Ensure the site works perfectly on all devices
- **Accessibility Improvements** — Make the site more inclusive for all users

### How to Contribute
1. **Join the Society** — Attend our weekly meetings or contact us via email
2. **Fork the Repository** — Create your own copy of the codebase
3. **Create a Feature Branch** — `git checkout -b feature/your-idea`
4. **Make Your Changes** — Follow our coding guidelines and add meaningful commits
5. **Test Thoroughly** — Ensure your changes work across different browsers
6. **Submit a Pull Request** — Describe your changes and their benefits
7. **Code Review** — Collaborate with other members to refine your contribution

### Project Ideas for Students
- **Project Gallery** — Showcase current and past CubeSat and radio projects
- **Learning Resources** — Interactive tutorials for satellite tracking and radio basics
- **Event Calendar** — Integration with society meeting schedules and workshops
- **Member Spotlight** — Profiles of active members and their contributions
- **Real-time Data** — Live satellite tracking or space weather information

## 📡 Technology Learning Path

New to web development? Here's how society members can get started:

1. **HTML & CSS Basics** — Foundation of web development
2. **JavaScript Fundamentals** — Programming logic and interactivity  
3. **React Introduction** — Modern component-based development
4. **Tailwind CSS** — Utility-first styling approach
5. **Git & GitHub** — Version control and collaboration
6. **Deployment** — Getting websites live on the internet

## 📋 Deployment & Hosting

## 🚀 Deployment & Hosting

### GitHub Pages Deployment (Current Setup)
The website is automatically deployed to [leedsspacecomms.co.uk](https://leedsspacecomms.co.uk) using GitHub Actions.

#### Automatic Deployment Process:
1. **Push to main branch** triggers the deployment workflow
2. **Build Process**: 
   - Install dependencies with `npm ci`
   - Run ESLint for code quality checks
   - Build production bundle with `npm run build`
3. **Deploy**: Automatically deploy to GitHub Pages
4. **Custom Domain**: Served at `leedsspacecomms.co.uk`

#### Manual Deployment:
```bash
# Build the project locally
npm run build

# Preview the production build
npm run preview
```

#### GitHub Pages Configuration:
- **Source**: GitHub Actions
- **Custom Domain**: `leedsspacecomms.co.uk`
- **HTTPS**: Enabled automatically
- **Build Tool**: Vite with React

#### DNS Configuration Required:
To serve the website at `leedsspacecomms.co.uk`, configure these DNS records:

```
Type    Name    Value
CNAME   www     space-comms.github.io
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
```

### Local Development Environment
```bash
# Clone the repository
git clone https://github.com/space-comms/website.git
cd website

# Install dependencies  
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Workflow Status
[![Deploy to GitHub Pages](https://github.com/space-comms/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/space-comms/website/actions/workflows/deploy.yml)

### Production URLs
- **Primary**: [leedsspacecomms.co.uk](https://leedsspacecomms.co.uk)
- **GitHub Pages**: [space-comms.github.io/website](https://space-comms.github.io/website)

## 🔧 Build Configuration

### Vite Configuration
- **Base Path**: `/` (root for custom domain)
- **Output Directory**: `dist/`
- **Source Maps**: Enabled for debugging
- **Asset Directory**: `assets/`

### Environment Files
- **CNAME**: Custom domain configuration
- **.nojekyll**: Disables Jekyll processing
- **robots.txt**: SEO and crawler configuration
- **404.html**: Custom 404 page with client-side routing support

## 📞 Contact & Get Involved

**Leeds Space Comms Society**  
University of Leeds, Leeds, UK

- **Email:** [info@leedsspacecomms.com](mailto:leedsspacecomms@leeds.ac.uk)
- **Instagram:** [@leedsspacecomms](https://instagram.com/leedsspacecomms)
- **LinkedIn:** [@leedsspacecomms](https://linkedin.com/company/leedsspacecomms)
- **GitHub:** [github.com/space-comms](https://github.com/space-comms)

**Weekly Meetings:** Wednesday's 6 PM, Engineering Building  
**New Members Welcome** — No experience required, just enthusiasm for space!

---

*Built with ❤️ by Leeds Space Comms students — 76 de Al-Musbahi* 🛰️
