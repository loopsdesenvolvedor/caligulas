module.exports = function isAutenthicate(req, res, next) {
  if (req.session.user) {
    return next();
  } else {
    res.redirect("/admin/login");
  }
};
