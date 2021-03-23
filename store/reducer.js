import {
  LOAD_PHOTO,
  CLEAR_PHOTO,
  LOAD_PHOTOS,
  LOAD_PHOTOS_SUCCESS,
  LOAD_PHOTOS_ERR, LOAD_PHOTO_SUCCESS, LOAD_PHOTO_ERR
} from './actions'

const initialState = {
  photos:[],
  photo:{},
  error:[]
}


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHOTOS:
      return {
        ...state
      };
    case LOAD_PHOTOS_SUCCESS:
      return {
        ...state, photos: action.payload
      };
    case LOAD_PHOTOS_ERR:
      return {
        ...state, error: action.payload
      };
    case LOAD_PHOTO:
      return {
        ...state
      };
    case LOAD_PHOTO_SUCCESS:
      return {
        ...state, photo: action.payload
      };
    case LOAD_PHOTO_ERR:
      return {
        ...state, error: action.payload
      };
    case CLEAR_PHOTO:
      return {
        ...state, photo: {}
      };
    default:
      return state;
  }
}
