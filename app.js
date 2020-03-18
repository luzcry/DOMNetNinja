/*let tittles = document.getElementsByClassName("title");
//console.log(Array.isArray(tittles));
//console.log(Array.isArray(Array.from(titles)));
Array.from(tittles).forEach(function (item) {
    console.log(item);
})*/

//second child con pseudo class
const wmf = document.querySelector("#book-list li:nth-child(2).name");
//console.log(Wrap);

//grab all elements

let books = document.querySelectorAll("#book-list li.name");
//console.log(books);

Array.from(books).forEach(function (book) {
    console.log(book);
})

const banner = document.querySelector("#page-banner");