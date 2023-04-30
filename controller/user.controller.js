const connection =require("../db/config");


module.exports={
    getAllUsers:(req,res)=>{
        connection.query("SELECT * FROM CollageAt",(err,rows)=>{
            if(err){
                console.log(err);
                res.status(500).send("error restricting users");
            }
            else{
                res.json(rows);
            }
        });
    },
    getUserById:(req,res)=>{
        connection.query(`SELECT * FROM CollageAt WHERE id=${req.params.id}`,(err,rows)=>{
            if(err){
                console.log(err);
                res.status(500).send("error restricting users");
            }
            else{
                res.json(rows);
            }
        });
    },
    deleteUser : (req, res) => {
        const id = req.params.id;
        connection.query("DELETE FROM CollageAt WHERE id= ?",[id], (err, rows) => {
          if (err) {
            console.log(err);
            res.status(500).send("error deleting user");
          } else {
            res.status(200).send("user deleted ");
          }
        });
    }
}