exports.store = (req, res) => {
    // res.json({
    //     'name':req.body.name,
    //     'phone':req.body.phone,
    //     'message':req.body.message
    // });

    req.flash('form', req.body.name.split(' ')[0] + ', you are true hero!');
    res.redirect('/');
};