import {Router} from "express";
import multer from "multer";

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/avatar', upload.single('avatar'), (req, res) => {
    let filedata = req.file;
    console.log("filedata",filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});

router.post('/photos', upload.array('photos', 12), (req, res) => {
   
    let filedata = req.file;
    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});

export default router;