module.exports = {

    addProducts: (req,res) => {
        console.log("new product", req.body, req.params.id, req.params.bin)
        var {newName, newPrice, newPic}=req.body
        const db = req.app.get('db')
        db.create_product([ newName, newPrice, newPic, req.params.id, req.params.bin  ])
        .then(() => {
            console.log( "db worked" )
            res.sendStatus(200)
        })
        .catch(err=> {
            res.status(500).send(error)
        })
    },

    getBinData: (req, res) => {
        console.log("shelfid",req.query.shelfid)
        const db = req.app.get('db')
        db.get_bins([ req.query.shelfid.toUpperCase() ])
        .then(bindata => res.status(200).send(bindata)
    )
    },

    individualbindata: (req, res) => {
        console.log("bin data", req.params.id, req.params.bin)
        const db = req.app.get('db')
        db.pull_info([req.params.id, req.params.bin])
        .then(bininfo => res.status(200).send(bininfo)
    )
    },

    editProduct: (req, res) => {
        var {pname, pprice} = req.body
        console.log('product is', pname, pprice)
        const db = req.app.get('db')
        db.edittable([ pname, pprice, req.params.id, req.params.bin ])
        .then(()=> res.sendStatus(200))
    },

    deleteProduct: (req, res) =>{
        console.log(req)
        const db=req.app.get('db')
        db.removeProducts([ null, null, null, req.params.id, req.params.bin])
        .then(()=> res.sendStatus(200))
    }
}