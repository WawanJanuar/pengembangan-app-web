const db = require("./database")

const getAll = (req, res) => {
    const query = "SELECT * FROM `program_studi`"
    db.query(query, [], (err, result) => {
        if (err) {
            res.status(400).json({
                massage: "prodi gagal get",
                serverMassage: err
            })
        } else {
            res.status(200).json({
                massage: "prodi berhasil get",
                ProgramStudi: result
            })
        }
    })
}

const getOne = (req, res) => {
    const id = req.params.id
    const query = "SELECT * FROM `program_studi` WHERE id = ?;"
    db.query(query, [id], (err, result) => {
        if (err) {
            res.status(400).json({
                massage: "salah satu get prodi gagal",
                serverMassage: err
            })
        } else {
            res.status(200).json({
                massage: "salah satu get prodi berhasil",
                ProgramStudi: result[0]
            })
        }
    })
}

const insert = (req, res) => {
    const prodi = req.body
    const query = "INSERT INTO program_studi SET ?"
    db.query(query, prodi, (err, result) => {
        if (err) {
            res.status(400).json({
                massage: "insert prodi gagal",
                servisMassage: err
            })
        } else {
            res.status(200).json({
                massage: "insert prodi berhasil",
            })
        }
    })
}

const update = (req, res) => {
    const id = req.params.id
    const prodi = req.body
    const query = `UPDATE mahasiswa SET ? WHERE id = ${id}`
    db.query(query, prodi, (err, result) => {
        if(err) {
            res.status(400).json({
                massage: "update prodi gagal",
                serverMassage: err
            })
        } else {
            res.status(200).json({
                massage: "update prodi berhasil",
                ProgramStudi: prodi
            })
        }
    })
}

const remove = (req, res) => {
    const id = req.params.id
    const query = "DELETE FROM mahasiswa WHERE id =?"
    db.query(query, [id], (err, result) => {
        if(err) {
            res.status(400).json({
                massage: "delete gagal",
                serverMassage: err
            })
        } else {
            res.status(200).json({
                massage: "delete berhasil"
            })
        }
    })
}

module.exports = {getAll, insert, update, remove, getOne}