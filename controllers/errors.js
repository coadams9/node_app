exports.errorPage = (req, res, next) => {
    res.render('error-page', { pageTitle: 'Page Not Found', path: '' })
}