import { connection } from "../../db.js"
import { IsValid } from "../../lib/IsValid.js";
import { randomString } from "../../lib/randomString.js";
import { hash } from "../../lib/hash.js";

export async function postLogin(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        username: 'nonEmptyString',
        password: 'password',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { username, password } = req.body;
    let userObj = null;

    try {
        const sql = `SELECT * FROM users WHERE username = ?;`;
        const [response] = await connection.execute(sql, [username]);

        if (response.length === 0 ) {
            return res.status(400).json({
                status: 'error',
                msg: 'Username/password yra neteisingas',
            });
        }

        if (response.length > 1 ) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
            });
        }

        userObj = response[0];
    } catch (error) {   
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    const salt = randomString(10);
    const passwordHash = hash(password + salt);

    try {
        const sql = `INSERT INTO users (username, salt, password_hash) VALUES (?, ?, ?);`;
        const [response] = await connection.execute(sql, [username, salt, passwordHash]);

        if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
            });
        }
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
        return res.status(500).json({
            status: 'error',
            msg: 'Kartojasi irasas...',
        });
    }
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
 
