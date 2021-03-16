const development = {
  name: "development",
  asset_path: "./assets",
  session_cookie_key: "blahsomething",
  db: "iconnect_development",
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "shubhchintakyaar",
      pass: "Am@r1234",
    },
  },
  google_client_id:
    "179533141558-h1pbq83ml4u39ecru995089ph6nb2dkp.apps.googleusercontent.com",
  google_client_secret: "clUfbw3KauTtLJiV7aeIQjlL",
  google_callback_url: "http://localhost:8000/users/auth/google/callback",
  jwt_secret: "iConnect",
};

const production = {
  name: "production",
  asset_path: process.env.ICONNECT_ASSET_PATH,
  session_cookie_key: process.env.ICONNECT_SESSION_COOKIE_KEY,
  db: process.env.ICONNECT_DB,
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.ICONNECT_GMAIL_USERNAME,
      pass: process.env.ICONNECT_GMAIL_PASS,
    },
  },
  google_client_id: process.env.ICONNECT_GOOGLE_CLIENT_ID,
  google_client_secret: process.env.ICONNECT_GOOGLE_CLIENT_SECRET,
  google_callback_url: process.env.ICONNECT_GOOGLE_CLIENT_URL,
  jwt_secret: process.env.ICONNECT_JWT_SECRET,
};

module.exports =
  eval(process.env.ICONNECT_ENVIRONMENT) == undefined
    ? development
    : eval(process.env.ICONNECT_ENVIRONMENT);
