/**
 * PermisAllController
 *
 * @description :: Server-side logic for managing Permisalls
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	all: function (req, res) {
		PermisAll.find().limit(300).then(function (permis) {
			res.json(permis);
		});
	},

};

