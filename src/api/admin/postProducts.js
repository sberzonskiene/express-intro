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

    return res.status(201).json({
        status: 'success',
        msg: 'Sekmingai sukurtas naujas produktas',
    });
}

 
