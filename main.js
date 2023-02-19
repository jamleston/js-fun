function alertFunc (a) {
    console.log(a)
}

alertFunc('hello');



const library = {
    books: [
        {name: 'aa', price: 10 },
        {name: 'bb', price: 100 },
        {name: 'cc', price: 15 },
        {name: 'dd', price: 40 },
    ],

    getBook (bookNameToTake) {
        for (i=0; i<=this.books.length; i+=1) {
            let bookName = this.books[i].name
            if (bookName === bookNameToTake) {
                
                console.log(this.books[i]);
            }
        }
    },

    addBook (newBook) {
        for (i=0; i<=this.books.length; i+=1) {
            if (newBook.name === books[i].name) {
                return 'error';
            }
            this.books.push(newBook);
            console.log(this.books);
            return;
        }
    },
}

library.getBook('aa');
library.addBook({name: 'ee', price: 55})

