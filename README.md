# About

# See it live

# Screenshots

# This project used:

## In General

- Folder organization in which content is in a descriptive folder with index file and optional files
  - Types are kept in types.ts
  - Styles are kept in styles.ts
  - Tests are kept in tests.ts
  - Local components are kept in /components local folder with same structure
  - Local hooks are kept in /hooks local folder
  - Local translations are kept in /localization local folder

## On Components

- Props extending HTML tags and with component name as prefix
- Ref forwarding
- Arias: busy & disabled,
- Props order: "rest & ref", "arias", "props"
- ConditionalStatements & Returns section
- Maps
- Styled Component
- "S" namespace for Styled Components
- Styles with propStyles variable

## On Styles and Theming

- DefaultStyles variable & file
- ResetStyles variable & file
- Animations variable & file
- Global Styles
- MUI Custom Theming

## On Context

- Error handling
- "value" variable with "get" and "set" objects to organize better
- Memo to memoize "value" and help with unecessary re-renders
- Categorized content sections as "Utility Information" and others by necessity

## As libs

- React Icons
- Styled Components
- Material UI (with Styled Component support libs)
- Framer Motion
- Immer (and use-immer)
- Typescript
- Jest, React Testing Library, User Event and MSW (Mock Service Worker)
- Prettier and ESLint (ESLint Plugin Jest included)
- i18n (i18next)
- Craco (to override Create React App configuration and allow Styled Components with MUI)

# Useful Specific Libs

- Routes handling: npm i react-router-dom
- Requests Handling: npm i axios
- Form Handling: npm i react-hook-form
- Manipulating Tab Text: npm i react-helmet-async
- Date Operations: npm i date-fns
- Calendar/Date Picker: npm i react-day-picker
- Dropzone: npm i react-dropzone
- Text Editor: npm i react-draft-wysiwyg draft-js
- Menus: npm i @szhsin/react-menu (if MUI is not satisfactory, use this one)
- Tutorials: npm i reactour (needs Styled Components)
- Complex Animations: npm i react-lottie (After Effects style)
- Chart Creation: npm i react-chartjs-2 chart.js

# Folder Structure inside Global and Pages:

## Rules

- Only folders, index files and aggregator files
- Folders must have category names or descriptive names
  - Descriptive folders are used if there is a need for more than one file in said category
- Aggregator files gather all descriptive name folder contents into one file

That means: inside any folder we can have any number of categories, depending of usage, recursively

## Categories:

- components: holds React components
- constants: holds data that does not change
- contexts: holds React contexts
- hooks: holds React hooks
- resources: holds media files (images, vectors, videos, subtitles, music, sfx, 3d, rigs)
- styles: holds stylization files
- tests: holds test files
- types: holds type files
- utilities: holds pure functions

## Examples of concepts that use various categories:

- animation: constants, styles, utilities, resources
- api: constants, utilities, hooks
- translation: constants

## Todo:

- Create branch with Router Dom
- Create branch with Axios
