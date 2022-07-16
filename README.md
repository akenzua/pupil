# Pupil Challenge

An app that calls a NASA planetry API based on selected planet url. Its has 2 component which are rendered in the 2 panels of the app. On first load, only the component (Planet) that list the planets is rendered, then when users click on any of the planets listed, it checks the local storage to see if the call has been made before and stored in the local storage, if not, the API will be called and rendered on the page with second component (Planet Details).

State is managed with useState hooks (in memory) and local storage, this is because the data from the API call seem to be a static data the does changed or at least not frequently, so for performance, the users do not need to necessarily call for the same data over and over.

React nested routet was used to render the Planet Detail component, so that the app can support the panel based design (rendering components side by side) when a planet is clicked on.

## Run

### `https://github.com/akenzua/pupil.git`

### `cd pupil`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Todo

- Test: Given more time, I would mock the API call and local storage, to test the how the data is being rendering given different behaviours

- Styling: Would prefer to modularised styles so that each components will have there own styles
