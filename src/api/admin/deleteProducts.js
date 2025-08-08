import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";

export async function deleteProducts(req, res) {
    const [err, msg] = IsValid.fields(req.params, {
        url: 'nonEmptyString',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { url } = req.params;

    try {
        const sql = `DELETE FROM products WHERE url_slug = ?;`;
        const [response] = await connection.execute(sql, [url]);

         if (response.affectedRows === 0) {
            return res.status(400).json({
                status: 'error',
                msg: 'Toks produktas neegzistuoja',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    return res.status(200).json({
        status: 'success',
        msg: 'Sekmingai istrintas produktas',
    });
}

 
