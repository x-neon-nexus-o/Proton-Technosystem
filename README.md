# Proton Technosystem

A modern, high-performance website for **Proton Technosystem**, a premier electronics repair and installation service provider. Built with React, Tailwind CSS, and a focus on premium aesthetics and user experience.

![Proton Technosystem Banner](https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)

## 🚀 Features

-   **Premium UI/UX**: Glassmorphism effects, smooth gradients, and sophisticated animations.
-   **Dark Mode Support**: Fully integrated dark mode with a toggle switch, respecting user preference.
-   **Responsive Design**: Mobile-first approach ensuring perfect rendering on all devices.
-   **Interactive Elements**:
    -   3D Flip Cards for Services
    -   Auto-scrolling Brand Slider
    -   Testimonial Carousel with smooth transitions
    -   Animated "How It Works" flow
-   **Performance**: Optimized with Vite for lightning-fast load times.
-   **Contact Integration**: Functional contact form layout and embedded Google Maps.
-   **Accessibility**: Semantic HTML and ARIA labels for better accessibility.

## 🛠️ Tech Stack

-   **Framework**: [React](https://react.dev/) (via [Vite](https://vitejs.dev/))
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3.4)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Animation**: Custom CSS keyframes and Tailwind utilities.

## 📂 Project Structure

```
Proton Technosystem/
├── src/
│   ├── assets/          # Static assets (images, logos)
│   ├── components/      # Reusable UI components
│   │   ├── Header.jsx       # Navigation & Theme Toggle
│   │   ├── Hero.jsx         # Landing section with Parallax
│   │   ├── Services.jsx     # 3D Flip Cards
│   │   ├── Products.jsx     # Product Grid & Tabs
│   │   ├── WhyChooseUs.jsx  # Feature Grid
│   │   ├── Brands.jsx       # Logo Slider
│   │   ├── HowItWorks.jsx   # Step-by-step Process
│   │   ├── Testimonials.jsx # Client Reviews Carousel
│   │   ├── Contact.jsx      # Form & Map
│   │   ├── Footer.jsx       # Site Footer
│   │   └── FloatingButtons.jsx # FABs (WhatsApp/Call)
│   ├── App.jsx          # Main Layout & Theme Logic
│   ├── main.jsx         # Entry Point
│   └── index.css        # Global Styles & Tailwind Directives
├── public/              # Public static files
├── tailwind.config.js   # Tailwind Configuration (Theme, Colors, Animations)
├── postcss.config.js    # PostCSS Configuration
├── package.json         # Dependencies & Scripts
└── README.md            # Project Documentation
```

## 🎨 Color Palette

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary** | `#e60023` | Brand Red (Deep Crimson) |
| **Secondary** | `#0057b7` | Proton Blue |
| **Accent** | `#0d0d0d` | Jet Black |
| **Light Bg** | `#f7f7f7` | Cloud White |
| **Dark Bg** | `#111827` | Gray 900 (Dark Mode) |

## 🔧 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/proton-technosystem.git
    cd proton-technosystem
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🚀 Deployment

The project is configured for deployment to **GitHub Pages**.

1.  **Deploy Command**
    ```bash
    npm run deploy
    ```
    This script runs the build process and pushes the `dist` folder to the `gh-pages` branch.

2.  **Configuration**
    -   `vite.config.js`: Sets `base` to `/Proton-Technosystem/`.
    -   `package.json`: Includes `homepage`, `predeploy`, and `deploy` scripts.
    -   `Brands.jsx`: Uses dynamic base URL for asset paths.

## 🌓 Dark Mode Implementation

The project uses Tailwind's `darkMode: 'class'` strategy.
-   **State**: Managed in `App.jsx` using `useState`.
-   **Persistence**: Currently session-based (resets on reload) to comply with specific project constraints (No `localStorage`).
-   **Toggle**: Accessible via the Sun/Moon icon in the Header.

## 🤝 Contributing

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

© 2025 Proton Technosystem. All rights reserved.
