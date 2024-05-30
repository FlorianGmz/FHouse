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
        └── data.json
     📁src
        └── 📁@types
        └── main.tsx
        └── App.tsx
        └── vite-env.d.ts
        └── 📁Components
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
            └── apiFaliHouse.ts
            └── loaders.ts
        └── 📁styles
            └── GlobalStyles.ts
        └── 📁ui
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
