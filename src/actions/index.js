import api from '../utils/api'

export const fetchPosts = async () => async dispatch => {
  const data = await api.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: data })
}
