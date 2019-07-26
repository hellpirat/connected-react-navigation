// @flow

import { CALL_NAVIGATION_METHOD } from './actionTypes'

const updateLocation = method => {
  return (...args: Array<mixed>) => ({
    type: CALL_NAVIGATION_METHOD,
    payload: {
      method,
      args,
    },
  })
}

export const navigate = updateLocation('navigate')

// TODO: implement this
export const back = updateLocation('back')
export const setParams = updateLocation('setParams')
