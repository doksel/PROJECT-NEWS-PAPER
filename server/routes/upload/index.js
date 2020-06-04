import {Router} from "express";
import multer from "multer";

const router = Router();
const upload = multer({ dest: 'uploads/' });

const fileFilter = (req, file, cb) => {
  
    if(file.mimetype === "image/png" || 
    file.mimetype === "image/jpg"|| 
    file.mimetype === "image/jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}

router.post('/avatar', multer({ dest: 'uploads/', fileFilter }).single('avatar'), (req, res) => {
    let file = req.file;

    console.log("file",file);
    if(!file)
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