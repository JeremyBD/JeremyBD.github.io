// Experience controller

var Experience = {
    index: function(req, res) {
        res.render('experience/index', { title: 'Experience' });
    }
};

module.exports = Experience;