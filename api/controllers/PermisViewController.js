/**
 * PermisViewController
 *
 * @description :: Server-side logic for managing Permisviews
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */


module.exports = {

	count: function (req, res) {
		Permis.count().then(function (count) {
			res.json({ count: count });
		})
	},


	all: function (req, res) {
	  PermisAll.query("SELECT TOP 300 * FROM Permis ORDER BY id DESC", function (err, p) {
	    if (err) {
	      return res.json(err);
	    }
	    res.json(p);
	  })
	  /*
		PermisView.find().then(function (permis) {
			res.json(permis);
		});
		*/
	},

	
};
