import { connection } from "../../db.js"
import { IsValid } from "../../lib/IsValid.js";
export async function postRegister(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        username: 'username',
        email: 'email',
        password: 'password',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { username, email, password } = req.body;

    try {
        const sql = `INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?);`;
        const [response] = await connection.execute(sql, [username, email, password]);

        if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
            });
        }
        console.log(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
    });
}
    return res.status(201).json({
        status: 'success',
        msg: 'Registration successful',
    });
}