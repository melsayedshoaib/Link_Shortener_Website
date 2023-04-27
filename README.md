# Link Shortener App

URL Shorteners are tools we use to make links shorter than they actually are. With a URL Shortener, you can transform a long link (maybe for a registration form or article) into a shorter version.

Behind the scenes, the long and short versions of a given link have been stored in some database. Then when a user visits the short link in a browser, the URL Shortener will redirect the user to the long version of the link (where the actual content is found).

## pros

* They promote sharing: Adding shortened URLs on printed materials reduces the number of words readers have to type to copy it. They also make sharing easier in messaging technologies that limit the number of characters in a message.
* Creates a friendlier URL: Most URL shorteners can be used to generate custom links rather than random numbers in order to make URLs intuitive, more appealing, and easy to remember. These custom links act as an abstraction to a more lengthy URL which might include encodings and characters that may be confusing to the average reader.
* Provides analytics data: Most URL shorteners include features to track the performance of links, giving information on click-throughs and traffic sources. Businesses can then use this information to inform their content distribution strategies.

## Cons

* Dead links: If the server of the tool that was used to shorten the URLs is down, all links will stop working.
* Blocked URLs: Some platforms do not accept shortened URLs and a number of URL shorteners have been included on spam blacklists. Sites that have been blacklisted for sending spam tend to use URL shorteners to bypass the blacklist which has made many URL shorteners meet the same fate.
* Facilitates phishing attacks: Since URLs shorteners obscure the address of a site with random numbers, shortened URLs are used by scammers to drive users to URLs and websites that look legitimate but are specifically designed to collect sensitive information.

## API Information

I have used <https://shrtco.de/> for the implementation of this project, shrtcode requires no authentication.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
