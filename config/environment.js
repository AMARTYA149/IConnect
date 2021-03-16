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
};

module.exports = development;
