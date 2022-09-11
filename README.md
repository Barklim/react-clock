## ClockApp

This simple clock app is a test task.

First [semisircle task](https://codesandbox.io/s/staging-pond-7n7ijh?file=/src/styles.scss)

You can see how it work on [GithubPages](https://barklim.github.io/react-clock/)

This project have [CHANGELOG.md](https://github.com/Barklim/react-clock/blob/main/CHANGELOG.md)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Explanation

This application sends requests at a given interval to render the current exact time.

Organized project structure that is ready for assembly and installation of the component.
Thought out customization of the ui component, implemented a pattern of composite components to display subtext and for further customization.
The component uses the concept of controlled components - the user can change the default behavior and add their own logic. 
Use custom hook to provide state.
In order to optimize the operation of the component, it is wrapped in a HOC that monitors the activity of the tab in order to prevent sending unnecessary requests.
Component minimum test coverage.

It is planned to add a module to manage the query planner instance for optimization purposes. At the moment, each added component generates requests. It is supposed to allow the user to select the model by which the scheduler instance should be created. (Different time intervals - this is the speed of the second hand.)
1. Singleton model. All components will depend on one instance of the scheduler where the only source of truth will be this instance. Which is bad because it limits us in the possibilities with the manipulation of time intervals.
2. Model factory. We can create synchronized component instances and subscribe them to the created instance. Synchronization makes it possible not to create duplicate instances at the same interval.

## Todo

- interval scheduler modules
- storybook | lil-gui
- prettier
- i18n hoc 
- dockerfile

### Requirements 

The app build and run requires:

- Node
- Linux, Macos or Windows

### Tested Requirements versions 

 - Node.js version 14.17.0
 - MacOS Monterey 12.4

### Installation

    npm install

### Start

    npm run start

### Tests

    npm run test