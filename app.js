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

Array.from(books).forEach(function(book) {
  console.log(book);
});

const banner = document.querySelector("#page-banner");
console.log("#page-banner node type is".banner.nodeType);
console.log("#page-banner node type is".banner.nodeType);
onsole.log("#page-banner has child".banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

const bookList = document.querySelector("#book-list");
//padres nodes
console.log("the parent node is", bookList.parentNode);
console.log("the parent node is", bookList.parentElement.parentElement);

console.log(bookList.childNodes);
console.log(bookList.children);
//sibling nodes : same level

const bookList = document.querySelector("#book-list");
console.log("book-list next sibling is", bookList.nextSibling);
console.log("book-list next element sibling is", bookList.nextElementSibling);

console.log("book-list previous sibling is", bookList.previousSibling);
console.log("book-list previous sibling is", bookList.previousElementSibling);

bookList.previousElementSibling.querySelector("p").innerHTML +=
  "<br /> too cool for anyone else!";
