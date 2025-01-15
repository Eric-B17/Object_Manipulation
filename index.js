const book = {
    title: "The Adventures of Captain Underpants",
    author: "Dav Pilkey",
    year: 1997,
    getSummery: function(){
        return `${this.title} ${this.author} ${this.year};`
    }
};

book.genre = "Adventure";
delete book.year;
console.log(book)

