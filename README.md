# Crewfare Create Event Form

This repository contains a **multi-step event creation form** built using **Create React App** with **TypeScript**, adhering to Crewfare’s UI/UX guidelines. The project follows **Atomic Design Principles** for an organized and maintainable component structure, and will include **Storybook** integration for component documentation.

---

## Table of Contents
1. [Features](#features)
2. [Technologies](#technologies)
3. [Project Structure (with Storybook)](#project-structure-with-storybook)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the App](#running-the-app)
   - [Available Scripts](#available-scripts)
5. [Next Steps](#next-steps)
6. [Contributing](#contributing)
7. [License](#license)

---

## Features
- **Multi-Step Form**: Navigate through different stages of the event creation process.
- **Atomic Design**: Components are organized at different hierarchy levels (Atoms, Molecules, Organisms).
- **TypeScript**: Enjoy type safety, better code readability, and fewer runtime errors.
- **Storybook (Upcoming)**: Visualize and test individual components in isolation.
- **Scalable Structure**: Ready for additional features and easy to maintain.

---

## Technologies
- **React** (Create React App)
- **TypeScript**
- **JavaScript ES6+**
- **HTML5 & CSS3**
- **Node.js / npm or Yarn** for package management

---

## Project Structure (with Storybook)

Below is an example of a possible project structure when using **Storybook** in a React/TypeScript application:

```bash
crewfare-create-event-form
├── .storybook           # Storybook configuration files
│   ├── main.tsx
│   ├── preview.tsx
│   └── ...
├── public               # Static files (index.html, favicon, etc.)
├── src
│   ├── assets           # Images, icons, etc.
│   ├── components       # Reusable UI components (Atoms, Molecules, Organisms)
│   │   ├── Button
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   └── ...
│   ├── pages            # Page-level components
│   ├── types            # TypeScript type definitions
│   ├── App.tsx
│   └── index.tsx
├── .eslintrc.js         # ESLint configuration
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
