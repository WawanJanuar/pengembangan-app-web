const db = require('../src/Database');

// pembuatan opoerasi crud untuk tabel data_mahasiswa

// operasi create

const insert = (req, res) => {
    const query = 'INSERT INTO data_mahasiswa SET ?'
    const data_mahasiswa = req.body

    db.query(query, data_mahasiswa, (err, result) => {
        if(err){
            res.status(400).json({
                message: "gagal insert",
                serverMessage: err,
            });
        } else {
            res.status(200).json({
                message: "berhasil insert data",
                data_mahasiswa: result,
            });
        }
    });
}

// operasi read

const getAll = (req, res) => {
    const query = 'SELECT * FROM data_mahasiswa'
    db.query(query, [], (err, result) => {
        if(err){
            res.status(400).json({
                message:"gagal get",
                serverMessage: err,
            });
        } else {
            res.status(200).json({
                message: "berhasil get semua data",
                data_mahasiswa: result,
            });
        }
    });
}

const getOne = (req, res) => {
    const query = 'SELECT * FROM data_mahasiswa WHERE id = ?'
    const id = req.params.id

    db.query(query, [id], (err, result) => {
        if(err){
            res.status(400).json({
                message: "gagal get",
                serverMessage: err,
            })
        } else {
            res.status(200).json({
                message: "Berhasil get",
                data_mahasiswa: result,
            })
        }
    })
}

// operasi update

const update = (req, res) => {
    const id = req.params.id
    const data_mahasiswa = req.body
    const query = `UPDATE data_mahasiswa SET? WHERE id = ${id}`


    db.query(query, data_mahasiswa, (err, result) => {
        if(err){
            res.status(400).json({
                message: "update gagal",
                serverMessage: err,
            })
        } else {
            res.status(200).json({
                message: "update berhasil",
                data_mahasiswa: result,
            })
        }
    })
}

// operasi delete

const remove = (req, res) => {
    const query = 'DELETE FROM data_mahasiswa WHERE id = ?'
    const id = req.params.id

    db.query(query, [id], (err, result) => {
        if(err){
            res.status(400).json({
                message: "delete data gagal",
                serverMessage: err,
            })
        } else {
            res.status(200).json({
                message: "delete data berhasil",
                data_mahasiswa: result,
            })
        }
    })
}

module.exports = {
    insert,
    getAll,
    getOne,
    update,
    remove,
 
}