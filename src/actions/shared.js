import { getInitialData } from '../utils/api'
import { receivePolls } from '../actions/polls'
import { receiveUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialDate () {
  return (dispatch) => {
    return getInitialData()
      .then(({users, polls}) =>{
        dispatch(receiveUsers(users))
        dispatch(receivePolls(polls))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
