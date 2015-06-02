/**
 * DailyPermisController
 *
 * @description :: Server-side logic for managing Dailypermis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	all: function (req, res) {
		DailyPermis.find().then(function (permis) {
			res.json(permis);
		});
	},


};

