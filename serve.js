import express from 'express';
import { fileURLToPath } from 'url';
import path from "path"
import fs from 'fs'

const app = express();
const __dirname = fileURLToPath(import.meta.url);

function serve_static(req, res, next) {
    const filePath = path.join(__dirname, '../dist', req.path);
    console.log(filePath)
    console.log(fs.existsSync(filePath))

    try {
        if (fs.existsSync(filePath)) {
            res.sendFile(filePath);
            return;
        }
    } catch (err) {
        console.error(err);
    }
    next();
}

app.use(serve_static);

// app.use(express.static('dist'));

app.get('*', function(req, res) {
    console.log(process.cwd())
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(3000, () => {
    console.log("server running at port: ", 3000)
});

