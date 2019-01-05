
Todo
------

- [ ]  Add reducer
- [ ]  Implement all navigation methods of react-navigation (Back, setParams, etc)
- [ ] Add demo example


Installation
-----------
Using [npm](https://www.npmjs.com/):

    $ npm install --save connected-react-navigation

Or [yarn](https://yarnpkg.com/):

    $ yarn add connected-react-navigation

Usage
-----
### Step 1

- Use `navigationMiddleware()`  for  dispatching navigations in actions (e.g. to change Screen with `navgiation('/path/to/screen')`.

```js
// configureStore.js
...
import { createStore, applyMiddleware } from 'redux'
import { navigationMiddleware } from 'connected-react-navigation'
import createRootReducer from './reducers'
...

const middlewares = [navigationMiddleware]
const store = createStore(createRootReducer, applyMiddleware(...middlewares))
```

### Step 2

- Use NavigationService on the top-level (root) navigator of your app

```js
import React from 'react'
import { Provider } from 'react-redux'
import { NavigationService } from 'connected-react-navigation'

...
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator ref={navigatorRef => { 
	      // use NavgiationService to set top level navgiator ref 
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}/>
      </Provider>
    )
  }
}
```
Now, it's ready to work!

```js
// usage in actions
import { navigate } from 'connected-react-navigation'

dispatch(navigate('ScreenName', {params}))
```

How this work
------

- This library implement usage from docs: [Navigating without the navigation prop](https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)


Inspired by 
------
- [connected-react-router](https://github.com/supasate/connected-react-router)

