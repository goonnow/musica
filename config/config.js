var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'musica-simple'
    },
    port: 3000,
    db: 'mongodb://localhost/musica-simple-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'musica-simple'
    },
    port: 3000,
    db: 'mongodb://localhost/musica-simple-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'musica-simple'
    },
    port: 3000,
    db: 'mongodb://localhost/musica-simple-production'
  }
};

module.exports = config[env];
