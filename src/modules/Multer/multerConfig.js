import multer from 'multer';
import path from 'path';

const fileFilter =  (req, file, cb) => {
    /*if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/png' && file.mimetype !== 'video/mp4' && file.mimetype !== 'application/pdf' ){
        return cb(new multer.MulterError('Arquivo selecionado não pode ser enviado'));
    }*/
    return cb(null, true);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let dir = path.resolve()+"\\static\\img\\fotosPD"
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth()+1
        let year = date.getFullYear()
        let today = day+""+month+""+year
        let hour = date.getHours()
        let minute = date.getMinutes()
        let second = date.getSeconds()
        let time = hour+""+minute+""+second
        

        cb(null, `${today}_${time}_${file.originalname}`);
    },
})

const upload = multer({storage: storage, fileFilter: fileFilter});
export default upload;