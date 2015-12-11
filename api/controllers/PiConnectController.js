module.exports = {
  
  test: function (req, res) {
    console.log('yo');
    console.log(PiConnect);
    PiConnect.find().then(function (p) {
      res.json(p);
    })
    .fail(function (err) {
      console.log(err);
      res.json(err);
    })
  }
}
