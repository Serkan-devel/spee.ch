const { postToStats } = require('../controllers/statsController.js');

module.exports = app => {
  // route for the home page
  app.get('/', (req, res) => {
    res.status(200).render('index');
  });
  // a catch-all route if someone visits a page that does not exist
  app.use('*', ({ originalUrl, ip }, res) => {
    // post to stats
    postToStats('show', originalUrl, ip, null, null, 'Error: 404');
    // send response
    res.status(404).render('fourOhFour');
  });
};
