// contacts =[];

exports.getAddcontact = (req, res, next) => {
    res.render('add-contact', {
      pageTitle: 'Add Contaact',
      path: '/add-contact',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  exports.postAddcontact = (req, res, next) => {
    contacts.push({ name: req.body.name });
    res.redirect('/');
  };