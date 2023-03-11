const {book_post,get_books,get_a_book,delete_a_book}=require('../controllers/bookController');
const Router=require('express').Router();
const multer=require('multer');
const path=require('path');

const storage=multer.diskStorage({
    destination:'./public/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({
    storage
})

// create a book
Router.post('/book',upload.single('image'),book_post);
//fetch all books
Router.get('/books',get_books)
//fetch a book
Router.get('/book/:id',get_a_book)
//delete a book
Router.delete('/book/:id',delete_a_book)


module.exports=Router;