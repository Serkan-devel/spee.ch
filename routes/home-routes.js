const logger = require('winston');

module.exports = app => {
  // route for the home page
  app.get('/', (req, res) => {
    logger.silly(`Get request on /`);
    res.status(200).render('index');
  });
  // a catch-all route if someone visits a page that does not exist
  app.use('*', (req, res) => {
    logger.error(`Get request on ${req.originalUrl} which was 404`);
    res.status(404).render('fourOhFour');
  });
};
