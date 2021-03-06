var agenda = require('./data/agenda');

module.exports = function(handle) {
  handle('request', function(env, next) {
    env.response.statusCode = 200;
    env.response.body = { agenda: agenda };
    env.response.body.links = [
      { rel: 'self', href: env.helpers.uri('/conferences/' + env.config.location + env.request.url) },
      { rel: 'index', href: env.helpers.uri('/conferences/') + env.config.location }
    ];

    next(env);
  });
};
