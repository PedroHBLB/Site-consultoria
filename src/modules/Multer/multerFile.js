import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let nomeEmpresa = req.body.EMPRESA     

        let dir = path.resolve()+"\\static\\img\\Empresas\\"+nomeEmpresa
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

const uploadFile = multer({storage: storage});
export default uploadFile;