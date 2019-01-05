// @flow

import { NavigationActions } from 'react-navigation'

let _navigator

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef
}

function navigate(routeName: string, params: {}) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  )
}

export const NavigationService = {
  navigate,
  setTopLevelNavigator,
}
