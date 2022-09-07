module.exports = {
  settings: {
    cors: {
      enabled: true,
      // headers: '*',
      origin: [
        "http://localhost:1337",
        "https://tranquil-harbor-37373.herokuapp.com",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
    },
  },
};
