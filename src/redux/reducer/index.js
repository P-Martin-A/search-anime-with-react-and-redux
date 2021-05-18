const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_TOP_ANIMES':
      return {
        ...state,
        fetching: true
      }
    case 'GET_TOP_ANIMES_SUCCESS':
      return {
        ...state,
        fetching: false,
        top_animes: [ ...action.payload ]
      }
    case 'GET_TOP_ANIMES_ERROR':
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case 'GET_ANIME_SEARCH':
      return {
        ...state,
        fetching: true,
        search: action.payload
      }
    case 'GET_ANIME_SEARCH_SUCCESS':
      return {
        ...state,
        fetching: false,
        results_animes: [ ...action.payload ]
      }
    case 'GET_ANIME_SEARCH_ERROR':
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case 'GET_DETAILS_ANIME':
      return {
        ...state,
        fetching: true,
      }
    case 'GET_DETAILS_ANIME_SUCCESS':
      return {
        ...state,
        fetching: false,
        details_anime: { ...action.payload }
      }
    case 'GET_DETAILS_ANIME_ERROR':
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case 'RESET_STORE':
      return {
        ...state,
        search: '',
        results_animes: [],
        details_anime: {}
      }
    default:
      return { ...state }
  }
}

export default reducer
