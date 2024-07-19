const bookObj = {
  title: "Get shit Done!",
  author: "kunal",
  year: "2025",
  getBookDetails: function () {
    return `The book ${this.title} was written by author ${bookObj.author}`;
  },

  updateBookYear: function (newYear) {
    this.year = newYear;
  },
};

console.log(bookObj);
console.log({ title: bookObj.title });
console.log({ author: bookObj.author });
console.log({ bookDetails: bookObj.getBookDetails() });
bookObj.updateBookYear("2026");
console.log(bookObj);

const library = {
  name: "xyz",
  books: [
    bookObj,
    {
      title: "Live it now",
    },

    {
      title: "Can't hurt me",
    },
  ],
};

console.log({ library });
console.log({
  library: library.name,
  allBooks: library.books.map((b) => b.title),
});

for (const key in bookObj) {
  console.log({ key, val: bookObj[key] });
}

console.log({ keys: Object.keys(bookObj) });
console.log({ values: Object.values(bookObj) });
