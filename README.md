# Crewfare Create Event Form

This repository contains a **multi-step event creation form**, built with **Create React App** and **TypeScript**, following Crewfare's UI/UX guidelines. The project adopts **Atomic Design Principles** for component organization and integrates **Storybook** for documentation and testing of each component.

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

- **Multi-step Form**: Create events across different steps or phases.  
- **Atomic Design**: Organizes components into different levels (Atoms, Molecules, Organisms) for greater scalability and maintainability.  
- **TypeScript**: Provides static typing, improved code readability, and reduced runtime errors.  
- **Storybook**: Documents and displays each component in isolation, facilitating testing and design iteration.  
- **Scalable Structure**: Ready to add new features without complicating existing code.  

---

## Technologies

This project uses the following main libraries and tools:

- **React** (via Create React App)  
- **TypeScript** (via `cra-template-typescript`)  
- **React Hook Form** (with **@hookform/resolvers**)  
- **React DatePicker**  
- **Yup**  
- **Storybook** (with React add-ons and testing integrations)  
- **Node.js / npm** for package management  

Additionally, it includes:

- **Webpack** (through React Scripts / Storybook)  
- **ESLint** (with the Storybook plugin)  
- **PropTypes** (optional for runtime type checking)  

---

## Project Structure (with Storybook)

Below is an **example** of how you can organize the application following **Atomic Design** principles, including Storybook:

```bash
crewfare-create-event-form
├── .storybook               # Storybook configurations
│   ├── main.ts
│   ├── preview.ts
│   └── ...
├── public                   # Static files (index.html, favicon, etc.)
├── src
│   ├── assets               # Images, icons, etc.
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.stories.tsx
│   │   │   │   └── index.ts
│   │   │   └── ...
│   │   ├── molecules
│   │   │   └── ...
│   │   └── organisms
│   │       └── ...
│   ├── pages                # Page-level components
│   ├── types                # TypeScript type definitions
│   ├── App.tsx
│   └── index.tsx
├── .eslintrc.js             # ESLint configuration
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

Getting Started
Prerequisites
Node.js (v14+ recommended)
npm or Yarn installed globally
Installation
Clone the repository:
bash

git clone https://github.com/OddieMaster/crewfare-create-event-form.git
Install the dependencies:
bash

cd crewfare-create-event-form
npm install
# or
yarn
Running the App
bash

npm start
# or
yarn start
Runs the app in development mode.
Open http://localhost:3000 in the browser to view it.
Available Scripts
Within the project directory, you can run:

npm start
Runs the app in development mode on port 3000.

npm test
Launches the test runner in interactive watch mode.

npm run build
Builds the app for production into the build folder.

npm run storybook
Starts Storybook in development mode on port 6006.
Open http://localhost:6006 to view your stories.

npm run build-storybook
Creates a static build of Storybook in the storybook-static folder.

npm run eject
Note: This is a one-way operation. Once ejected, you can’t go back!

Next Steps
Build more components following the hierarchy of Atoms → Molecules → Organisms → Templates → Pages.
Enhance form validation with more complex schemas using Yup and React Hook Form.
Extend Storybook with additional add-ons (accessibility tests, interaction tests, etc.).
Deploy Storybook to a static hosting service or use Chromatic for simpler review processes.
Contributing
Fork this repository.
Create a new branch: git checkout -b feature/new-component.
Commit your changes: git commit -m 'Add new component'.
Push to the branch: git push origin feature/new-component.
Open a Pull Request.
License
This project is licensed under the MIT License.

Happy coding and welcome to contributions!
