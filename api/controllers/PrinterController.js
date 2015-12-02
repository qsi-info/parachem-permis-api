/**
 * PrinterController
 *
 * @description :: Server-side logic for managing Printers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	all: function (req, res) {
		Printer.find().then(function (permis) {
			res.json(permis);
		});
	},

};

