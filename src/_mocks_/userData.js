import {
  userActivity,
  userAverageSessions,
  userData,
  userPerformance,
} from './store'

export async function getUserData(id) {
  return userData
}
export async function getUserActivity(id) {
  return userActivity
}
export async function getUserPerformance(id) {
  return userPerformance
}
export async function getUserAverageSessions(id) {
  return userAverageSessions
}
