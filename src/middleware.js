// @flow

import { CALL_NAVIGATION_METHOD } from './actionTypes'

import { NavigationService } from './service'

type Action = {
  type: string,
  payload: any,
}

export const navigationMiddleware = () => (next: Function) => (action: Action) => {
  if (action.type !== CALL_NAVIGATION_METHOD) {
    return next(action)
  }
  const {
    payload: { method, args },
  } = action

  NavigationService[method](...args)
}
