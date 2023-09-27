function getBooks(...books){
    const bookswithU = [];
    const withBooks = [];
    
for (const book of books){
    if(book.includes('у')){
        bookswithU.push(book);
    }else if(book.includes('У')){
            bookswithU.push(book);
         }else
        withBooks.push(book);
   
}
console.log(bookswithU);
console.log(withBooks);
}
getBooks('Три богатыря','Приключения Тома Сойера', 'Гарри  Поттер','Чудовище и красавица',' Цвет пурпурный','Унесенные ветром')