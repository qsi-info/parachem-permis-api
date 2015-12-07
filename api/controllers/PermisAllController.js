/**
 * PermisAllController
 *
 * @description :: Server-side logic for managing Permisalls
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	all: function (req, res) {
	  console.log(req.params);
	  if (req.params['WOR_NO']) {
	    PermisView.query("SELECT * FROM Permis WHERE WOR_NO=" + req.params['WOR_NO'], function (err, p) {
	      if (err) { return res.json(err) }
	      res.json(p);
	    })
	  } else {
	   	PermisView.query("SELECT TOP 300 * FROM Permis ORDER BY id DESC", function (err, p) {
  	    if (err) {
  	      return res.json(err);
  	    }
  	    res.json(p);
  	  }) 
	  }

	  /*
		PermisAll.find().limit(300).then(function (permis) {
			res.json(permis);
		});
		*/
	},

};

