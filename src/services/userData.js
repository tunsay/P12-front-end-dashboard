import axios from 'axios'

/**
 * Get user data from API
 * @async
 * @param {string} id - user id
 * @returns {Promise<object>} A promise that contains an object with the user's data when resolved
 */
export async function getUserData(id) {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:3000/user/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}
