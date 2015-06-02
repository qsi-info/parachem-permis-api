/**
 * PermisController
 *
 * @description :: Server-side logic for managing permis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	count: function (req, res) {
		Permis.count().then(function (count) {
			res.json({ count: count });
		})
	},


	
};

