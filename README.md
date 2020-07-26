# Travel Memories
Finally your own Travel Diary! Sign up for this application and plot where you've travelled to on a map. Write a few notes about that destination you've been to and forever keep it in your memories.

# Architecture

Travel Memories is a serverless Javascript app using Google Firebase to handle data storage and handle user creation/authentication. This app also uses Google Maps API to allow users to search for Locations/Landmarks from Google Map's large database.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Built with

- HTML and CSS
- ReactJs (to handle state change)
- Google Maps API (to search Locations and Landmarks from around the world)
- Google Firebase  (managed user creation/authentication and data storage)
- LeafletJS (Map API that renders a map to display all your Travel Memories

# Usage

1. **Sign-up** with an account by providing and e-mail address
    * *If* you don't want to register an account, you can access the application **anonymously** 
    * When you **Sign-in** ***anonymously***, all travel memories that are created will be lost after you log-out or when you exit your session
2. **Sign-in** to the application
3. **Create a Travel Memory** by supplying a *Date*, a *Destination*, and write down a *Favorite Moment* from that destination. 
4. Select **Post Me!**
5. **View** all your listed memories and see them displayed on a map

# Demo
Click [here](https://thatjenster.github.io/projectFiveSoloReact/) try it out!

# Authors

Made with 💌 and ☕ by **[Jenny Dinh](https://github.com/thatjenster)** 

# How to run

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

