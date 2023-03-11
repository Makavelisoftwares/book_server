const {books}=require('../models');

// create a book
const book_post=async(req,res)=>{
    try {
        const {author,description,summary}=req.body;
        const image=req.file.path;

        const book=await books.create({author,description,summary,image});
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json(error)
    }
}



// get books
const get_books=async(req,res)=>{
    try {
        const book=await books.findAndCountAll({order:[['createdAt','DESC']]});
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json(error)
    }
}



//get a book
const get_a_book=async(req,res)=>{
    try {
        const id=req.params.id;
        const book=await books.findOne({where:{id}});
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json(error)
    }
}



// delete a book
const delete_a_book=async(req,res)=>{
    try {
        const id=req.params.id;
        const book=await books.destroy({where:{id}});
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json(error)
    }
}




//update a book



module.exports={
    book_post,
    get_books,
    get_a_book,
    delete_a_book
}