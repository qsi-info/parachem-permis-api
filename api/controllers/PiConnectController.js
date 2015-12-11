module.exports = {
  
  test: function (req, res) {
    PiConnect.find().then(function (p) {
      res.json(p);
    })
    .fail(function (err) {
      console.log(err);
      res.json(err);
    })
  }
}
