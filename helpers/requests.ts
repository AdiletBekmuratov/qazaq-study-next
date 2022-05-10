import axios from 'axios'

export const getCurrentUser = async (accessToken = '') => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/me?fields=id,first_name,last_name,email,role,avatar`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    )
    const currentUser = res.data
    return currentUser?.data
  } catch (error) {
    console.log('ERROR CUR USER', error)
  }
}
