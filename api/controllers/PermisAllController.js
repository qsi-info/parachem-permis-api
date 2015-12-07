/**
 * PermisAllController
 *
 * @description :: Server-side logic for managing Permisalls
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	all: function (req, res) {

	   	PermisView.query("SELECT TOP 300 * FROM Permis ORDER BY id DESC", function (err, p) {
  	    if (err) {
  	      return res.json(err);
  	    }
  	    res.json(p);
  	  }) 
	  

	  /*
		PermisAll.find().limit(300).then(function (permis) {
			res.json(permis);
		});
		*/
		
	},

};

