/**
 * PermisAllController
 *
 * @description :: Server-side logic for managing Permisalls
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	all: function (req, res) {
		PermisAll.find().then(function (permis) {
			res.json(permis);
		});
	},

};

