# Architect Agency Website

## Overview

This repository contains my first personal project, a simple yet beautiful website for a fictional architect agency. The project showcases my skills in design, styling, and animation while providing a great user experience with a minimal amount of libraries.

## Tech Stack

- **TypeScript**
- **React** with **Vite**
- **Styled Components** for styling
- **React Slick** for carousel/slider components
- **React AOS** for scroll animations
- **React Slideshow** for slideshow components
- **React Router DOM** for routing and data fetching
- **JSON Server** for creating a fake backend server with API endpoints from a simple `data.json` file

## Project Highlights

- **Design & Styling**: Utilized Styled Components to create a visually appealing and consistent design throughout the website.
- **Animations**: Implemented smooth animations using React AOS, React Slick, and React Slideshow to enhance the user experience.
- **Routing & Data Fetching**: Used React Router DOM for seamless navigation and data fetching.
- **Fake Backend**: Set up a JSON Server to simulate API endpoints and serve data from a `data.json` file.

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher) or yarn

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/FlorianGmz/FLHouse.git
   cd architect-agency-website
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Start the JSON server**:

   ```sh
   npm run server
   ```

   This will start a fake backend server at http://localhost:9000.

4. **Start the development server**:
   ```sh
   npm run dev
   ```
   This will start the Vite development server at http://localhost:5173.

## Project Structure

```
     📁data
        └── data.json                               # Fake data for JSON server
     📁src
        └── 📁@types                                # Types declaration
        └── main.tsx                                # React components
        └── App.tsx                                 # Main app component with router
        └── vite-env.d.ts
        └── 📁Components                            # React components
            └── 📁AboutPage
            └── 📁AppLayout
            └── 📁ArchitectContact
            └── 📁Carousel
            └── 📁ContactPage
            └── 📁ContactRow
            └── 📁Footer
            └── 📁Header
                └── Header.tsx
                └── StyledHeaderComponents.ts
                └── 📁ListItem
                └── 📁NavIcon
                └── 📁NavList
                └── 📁NavLogo
            └── 📁HomePage
            └── 📁NavBar
            └── 📁ProcessPage
            └── 📁ProjectCard
            └── 📁ProjectPage
            └── 📁ProjectsPage
            └── 📁Slideshow
        └── 📁assets
        └── 📁services
            └── apiFaliHouse.ts                     # Utility functions for data fetching
            └── loaders.ts                          # Loader for React-Router
        └── 📁styles
            └── GlobalStyles.ts                     # Global css value used with StyledComponents
        └── 📁ui                                    # Reusable StyledComponents
            └── IntroductionText.tsx
            └── LoadingPage.tsx
            └── StyledHeader.tsx
            └── StyledImg.tsx
     tsconfig.json
     tsconfig.node.json
     vite.config.ts
     README.md
     index.html
     package-lock.json
     package.json
```

## Learning Experience

This project was a fantastic learning opportunity where I:

- **Gained hands-on experience with Styled Components for the first time.**
- **Learned to use lightweight libraries like React AOS, React Slick, and React Slideshow to enhance the user interface.**
- **Improved my understanding of React Router DOM for efficient routing and data fetching.**
- **Explored how to create a fake backend with JSON Server.**

## Conclusion

I had a great time working on this project and learned a lot along the way. The project showcases my ability to create a stylish, functional, and user-friendly website with a focus on design and animation. I hope you enjoy exploring the Architect Agency Website as much as I enjoyed building it.

Feel free to reach out if you have any questions or feedback!

## License

This project is licensed under the MIT License.
