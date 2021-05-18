export const getTopAnimes = () => async (dispatch, getState) => {
  dispatch({
    type: 'GET_TOP_ANIMES'
  })

  try {
    const RESPONSE = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
    const DATA = await RESPONSE.json()
    return dispatch({
      type: 'GET_TOP_ANIMES_SUCCESS',
      payload: [ ...DATA.top.slice(0, 5) ]
    })
  } catch (error) {
    console.error(error.message)
    return dispatch({
      type: 'GET_TOP_ANIMES_ERROR',
      payload: error.message
    })
  }
}

export const getAnimeSearch = (query) => async (dispatch, getState) => {
  dispatch({
    type: 'GET_ANIME_SEARCH',
    payload: query
  })

  try {
    const RESPONSE = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
    const DATA = await RESPONSE.json()
    return dispatch({
      type: 'GET_ANIME_SEARCH_SUCCESS',
      payload: [ ...DATA.results ]
    })
  } catch (error) {
    console.error(error.message)
    return dispatch({
      type: 'GET_ANIME_SEARCH_ERROR',
      payload: error.message
    })
  }
}

export const getDetailsAnime = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'GET_DETAILS_ANIME',
  })

  try {
    const RESPONSE = await fetch(`https://api.jikan.moe/v3/anime/${id}`)
    const DATA = await RESPONSE.json()
    return dispatch({
      type: 'GET_DETAILS_ANIME_SUCCESS',
      payload: { ...DATA }
    })
  } catch (error) {
    console.error(error.message)
    return dispatch({
      type: 'GET_DETAILS_ANIME_ERROR',
      payload: error.message
    })
  }
}

export const resetStore = () => (dispatch, getState) => {
  return dispatch({
    type: 'RESET_STORE'
  })
}
