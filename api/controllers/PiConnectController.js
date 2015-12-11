module.exports = {
  
  last: function (req, res) {
    PiConnect.query("SELECT TOP 1 * FROM [dbo].[QSI_Values] ORDER BY CREATED_AT DESC ", function (err, results) {
      if (err) {
        return res.json(err);
      } else {
        res.json(results);
      }
    })
  }
}
