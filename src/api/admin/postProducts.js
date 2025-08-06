import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";

export async function postProducts(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        title: 'nonEmptyString',
        url: 'nonEmptyString',
        description: 'nonEmptyString',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { title, url, description } = req.body;

    try {
        const sql = `SELECT * FROM products WHERE title = ? OR url_slug = ?;`;
        const [response] = await connection.execute(sql, [title, url]);

         if (response.length > 0) {
            return res.status(400).json({
                status: 'error',
                msg: 'Toks produktas jau egzistuoja',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    try {
        const sql = `
            INSERT INTO products (title, url_slug, description)
            VALUES (?, ?, ?);`;
        const [response] = await connection.execute(sql, [title, url, description]);

        if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    return res.status(201).json({
        status: 'success',
        msg: 'Sekmingai sukurtas naujas produktas',
    });
}

 
