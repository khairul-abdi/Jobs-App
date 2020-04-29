module.exports = (app, router) => {
  const forms = require('../controllers/form.controller.js');
  // const path = __basedir + '/views/'
  
  app.post('/api/form/init', forms.init);
  app.get('/api/form/all', forms.findAll);

  app.use('/', router)
}