# React Staycation with Dark Mode

A beautiful React-based website for a vacation booking platform with dark mode support. This project demonstrates the implementation of a theme toggle feature using React Context API and CSS variables.

## Features

- Responsive design for all screen sizes
- Dark mode toggle with smooth transitions
- Theme persistence using localStorage
- Animated components using Framer Motion
- Modern UI with attention to detail

## Tech Stack

- React 18
- React Router DOM
- Styled Components
- Framer Motion
- React Icons
- React Intersection Observer

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/dadanoes/react-staycation-dark-mode.git
cd react-staycation-dark-mode
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/       # UI components
├── pages/            # Page components
├── ThemeContext.js   # Dark mode context
├── App.js            # Main application component
└── index.js          # Entry point
```

## Dark Mode Implementation

The dark mode feature is implemented using:

1. React Context API for state management
2. CSS variables for theming
3. localStorage for theme persistence

## License

MIT
