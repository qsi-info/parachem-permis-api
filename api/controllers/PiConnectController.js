module.exports = {
  
  last: function (req, res) {
    PiConnect.query("SELECT TOP 1 * FROM [dbo].[QSI_Values] ORDER BY CREATED_AT DESC ", function (err, results) {
      if (err) {
        return res.json(err);
      } else {
        if (results.length > 0) {
          res.json(results[0])
        } else {
           res.json(results); 
        }
      }
    })
  }
}
