

// ############################################## SITE SETTINGS ##############################################

export const SITE_TITLE = "All in One Converter";

export const USER = "User";
export const RIDER = "Rider";
export const ROLES = {
  USER,
  RIDER
};

// ################################ API ENDPOINTS ################################

export const API_ENDPOINT = process.env.NODE_ENV === 'production' ?
  process.env.REACT_APP_API_ENDPOINT : "http://localhost:8080";

export const API_IMAGE_TO_PDF = `${API_ENDPOINT}/convert/image-to-pdf`;
export const API_PDF_TO_IMAGE = `${API_ENDPOINT}/convert/pdf-to-image`;
export const API_PDF_RESIZE = `${API_ENDPOINT}/convert/pdf-resize`;
export const API_PNG_TO_JPG = `${API_ENDPOINT}/convert/png-to-jpg`;
export const API_JPG_TO_PNG = `${API_ENDPOINT}/convert/jpg-to-png`;


// ############################################## UI Constants ##############################################

export const DRAWER_WIDTH = 280;
export const APP_BAR_MOBILE = 64;
export const APP_BAR_DESKTOP = 92;

export const THEME = {
  LIGHT: "Light",
  DARK: "Dark",
};