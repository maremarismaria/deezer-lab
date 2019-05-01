export const USER_ID = process.env.REACT_APP_USER_ID || ``;
export const USERNAME = process.env.REACT_APP_USERNAME || ``;
export const DEEZER_APP_ID = process.env.REACT_APP_APP_ID || `1`;

export const DEEZER_URL = `https://www.deezer.com/plugins/player`;
export const DEEZER_URL_OPTIONS = `?format=classic&autoplay=false&playlist=true&width=700&height=350&color=ff3600&layout=dark&size=medium`;
export const DEEZER_URL_RADIO = `&type=radio&id=radio-37635&app_id=${DEEZER_APP_ID}`;
export const DEEZER_URL_FAVORITES = `&type=favorites&id=user_${USER_ID}&title=${USERNAME}&app_id=${DEEZER_APP_ID}`;
