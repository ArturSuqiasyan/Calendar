const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },

  ];
  
  const searchInput = document.getElementById("search-input");
  const bookList = document.getElementById("book-list");
  const noBooksMessage = document.getElementById("no-books-message");
  
  function renderBookList(books) {
    bookList.innerHTML = ""; 
  
    books.forEach(book => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span class="title">${book.title}</span> by <span class="author">${book.author}</span>
      `;
      bookList.appendChild(listItem);
    });
  
    noBooksMessage.style.display = books.length === 0 ? "block" : "none";
  }
  
  function searchBooks(query) {
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );
  
    renderBookList(filteredBooks);
  }
  
  
  searchInput.addEventListener("input", event => {
    const query = event.target.value.trim();
    searchBooks(query);
  });
  
  renderBookList(books);
