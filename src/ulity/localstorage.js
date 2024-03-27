const getStoredReadBooks = () =>{
    const storedReadBooks = localStorage.getItem('read-books');
    if(storedReadBooks)
    {
        return JSON.parse(storedReadBooks);
    }
    else{
        return [];
    }
}

const getStoredWishlistBooks = () =>{
    const storedWishListBooks = localStorage.getItem('wishlist-books');
    if(storedWishListBooks)
    {
        return JSON.parse(storedWishListBooks);
    }
    else{
        return [];
    }
}
const saveReadBooks = id =>{
    const storedReadBooks = getStoredReadBooks();
    const exist = storedReadBooks.find(readId => readId == id);
    if(!exist){
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
    }
}

const saveWishListBooks = id =>{
    const storedWishListBooks = getStoredWishlistBooks();
    const exist = storedWishListBooks.find(readId => readId == id);
    if(!exist){
        storedWishListBooks.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(storedWishListBooks));
    }
}
export {saveReadBooks,getStoredReadBooks,getStoredWishlistBooks,saveWishListBooks}