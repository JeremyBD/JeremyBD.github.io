// Projects controller

var Projects = {
    index: function(req, res) {
        res.render('projects/index', { title: 'Projects' });
    }
};

module.exports = Projects;