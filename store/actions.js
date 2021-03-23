import axios from 'axios'

export const LOAD_PHOTOS = "LOAD_PHOTOS"
export const LOAD_PHOTOS_SUCCESS = "LOAD_PHOTOS_SUCCESS"
export const LOAD_PHOTOS_ERR = "LOAD_PHOTOS_ERR"
export const LOAD_PHOTO = "LOAD_PHOTO"
export const LOAD_PHOTO_SUCCESS = "LOAD_PHOTO_SUCCESS"
export const LOAD_PHOTO_ERR = "LOAD_PHOTO_ERR"
export const CLEAR_PHOTO = "CLEAR_PHOTO"

export const getPhotos = () => {
  return dispatch => {
    dispatch(loadPhotos());
    axios
      .get(`https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`,)
      .then(res => {
        dispatch(loadPhotosSuccess(res.data));
      })
      .catch(err => {
        dispatch(loadPhotosError(err.message))
      });
  };
};

export const getPhoto = (id) => {
  return dispatch => {
    dispatch(loadPhoto)
    axios
      .get(`https://api.unsplash.com/photos/${id}/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`,)
      .then(res => {
        dispatch(clearPhoto)
        dispatch(loadPhotoSuccess(res.data));
      })
      .catch(err => {
        dispatch(loadPhotoError(err.message))
      });
  };
};


export const loadPhotos = () => ({
  type: LOAD_PHOTOS,
})
export const loadPhotosSuccess = (res) => ({
  type: LOAD_PHOTOS_SUCCESS,
  payload: res
})
export const loadPhotosError = (err) => ({
  type: LOAD_PHOTOS_ERR,
  payload: err
})
export const loadPhoto = () => ({
  type: LOAD_PHOTO,
})

export const loadPhotoSuccess = (res) => ({
  type: LOAD_PHOTO_SUCCESS,
  payload: res
})
export const loadPhotoError = (err) => ({
  type: LOAD_PHOTO_ERR,
  payload: err
})

export const clearPhoto = () => ({
  type: CLEAR_PHOTO,
})

