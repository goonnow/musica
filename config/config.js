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
    db: 'mongodb://localhost/musica-simple-development',
    search: {
        key: 'key',
        cx: 'cse-key'
    }
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
    db: 'mongodb://localhost/musica-simple-production',
    search: {
        key: 'key',
        cx: 'cse-key'
    }
  }
};

module.exports = config[env];
