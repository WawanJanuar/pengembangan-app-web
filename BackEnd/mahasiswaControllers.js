const db = require("./database");

const getAll = (req, res) => {
    const query = "SELECT nim, email, kelas, jenis_kelamin, nama_prodi as program_studi, semester, created_at, updated_at FROM mahasiswa INNER JOIN program_studi ON id_program_studi = program_studi.id";
    db.query(query, [], (err, result) => {
        if(err) {
            res.status(400).json({
                message: "get mahasiswa gagal",
                serverMessage: err,
            });
        } else {
            res.status(200).json({
                message: "get mahasiswa berhasil",
                mahasiswa: result,
            });
        }
    });
};

const getOne = (req, res) => {
    const id = req.params.id;
    const query = "SELECT nim, nama, email, kelas, jenis_kelamin, nama_prodi as program_studi, semester, created_at, updated_at, updated_at FROM mahasiswa INNER JOIN program_studi ON id_program_studi = program_studi.id WHERE mahasiswa.id =?";
    db.query(query, [id], (err, result) => {
        if (err) {
            res.status(400).json({
                message: "get mahasiswa gagal",
                serverMessage: err,
            });
        } else {
            res.status(200).json({
                message: "get mahasiswa berhasil",
                mahasiswa: result[0],
            });
        }
    });
};

const insert = (req, res) => {
    const mahasiswa = req.body;
    const query = "INSERT INTO mahasiswa SET ?";

    db.query(query, mahasiswa, (err, result) => {
        if (err) {
            res.status(400).json({
                message: "insert mahasiswa gagal",
                serverMessage: err,
            });
        } else {
            res.status(201).json({
                message: "insert mahasiswa berhasil",
            });
        }
    });
};

const update = (req, res) => {
    const id = req.params.id;
    const mahasiswa = req.body;
    const query = `UPDATE mahasiswa SET ? WHERE id = ${id}`;

    db.query(query, mahasiswa, (err, result) => {
        if (err) {
            res.status(400).json({
                message: "upadte mahasiswa gagal",
                serverMessage: err,
        });
        } else {
            res.status(200).json({
                message: "update mahasiswa berhasil",
                mahasiswa: mahasiswa,
            });
        }
    });
};

const remove = (req, res) => {
    const id = req.params.id;
    const query = "DELETE FROM mahasiswa WHERE id = ?";

    db.query(query, [id], (err, result) => {
        if (err) {
            res.status(400).json({
                message: "delete mahasiswa gagal",
                serverMessage: err,
            });
        } else {
            res.status(200).json({
                message: "delete mahasiswa berhasil",
            });
        }
    });
};

const getKelas = (req, res) => {
    const kelas = req.params.kelas
    const query = "SELECT * FROM mahasiswa INNER JOIN program_studi ON id_program_studi = program_studi.id WHERE mahasiswa.kelas = ?"
    db.query(query, [kelas], (err, result) => {
        if (err) {
            res.status(400).json({
                message: "get kelas gagal",
                serverMessage: err,
            });
        } else {
            res.status(200).json({
                message: "get kelas berhasil",
                kelas: result[0]
            });
        }
    })
}

const getSemester = (req, res) => {
    const semester = "SELECT * FROM mahasiswa INNER JOIN program_studi ON id_program_studi = program_studi.id WHERE mahasiswa.semester = ?"
    db.query(query, [semester], (err, result) => {
        if (err) {
            res.status(400).json({
                message: "get semester gagal",
                serverMessage: err,
            });
        } else {
            res.status(200).json({
                message: "get semester berhasil",
                semester: result[0]
            });
        }
    })
}

const getProgram = (req, res) => {
    const program = req.params.id_program_studi
    const query = "SELECT * FROM mahasiswa INNER JOIN program_studi ON id_program_studi = program_studi.id WHERE mahasiswa.id_program_studi = ?"
db.query(query, [program], (err, result) => {
    if (err) {
        res.status(400).json({
            message: "get program studi gagal",
            serverMessage: err,
        });
    } else {
        res.status(200).json({
            message: "get program studi berhasil",
            program: result[0]
        });
    }
})
}

module.exports = {
    getAll,
    insert,
    update,
    remove,
    getOne,
    getKelas,
    getSemester,
    getProgram,
};