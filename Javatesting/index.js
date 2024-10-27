const inventory = [
    {
        category: "Informacinės technologijos",
        books: [
            {
                title: "Programavimas linksmai",
                ISBN: "IT-12345",
                publishing_year: 2024,
                pages: 250,
                quantity: 12,
                price: 25
            },
            {
                title: "Kompiuteriai ir as",
                ISBN: "IT-12346",
                publishing_year: 2020,
                pages: 100,
                quantity: 5,
                price: 5
            },
            {
                title: "Javascript nelinksmai",
                ISBN: "IT-12347",
                publishing_year: 2021,
                pages: 101,
                quantity: 10,
                price: 6
            },
            {
                title: "Html",
                ISBN: "IT-12348",
                publishing_year: 2023,
                pages: 96,
                quantity: 3,
                price: 5
            },
            {
                title: "Css",
                ISBN: "IT-12349",
                publishing_year: 2024,
                pages: 70,
                quantity: 8,
                price: 25
            }
        ]
    },
    {
        category: "Fantastika",
        books: [
            {
                title: "The Last Jedi",
                ISBN: "FAN-11111",
                publishing_year: 2024,
                pages: 900,
                quantity: 1,
                price: 50
            },
            {
                title: "Bullet train",
                ISBN: "FAN-22222",
                publishing_year: 2019,
                pages: 250,
                quantity: 3,
                price: 30
            },
            {
                title: "The Hobbit",
                ISBN: "FAN-33333",
                publishing_year: 1937,
                pages: 800,
                quantity: 15,
                price: 50
            },
            {
                title: "Iron man",
                ISBN: "FAN-44444",
                publishing_year: 2004,
                pages: 200,
                quantity: 5,
                price: 10
            },
            {
                title: "Not iron man",
                ISBN: "FAN-55555",
                publishing_year: 2005,
                pages: 300,
                quantity: 6,
                price: 90
            }
        ]
    },
    {
        category: "Historical Fiction",
        books: [
            {
                title: "Not world war 1",
                ISBN: "HF-11111",
                publishing_year: 2021,
                pages: 111,
                quantity: 7,
                price: 22
            },
            {
                title: "Not world war 2",
                ISBN: "HF-22222",
                publishing_year: 2023,
                pages: 50,
                quantity: 2,
                price: 40
            },
            {
                title: "Not world war 3",
                ISBN: "HF-33333",
                publishing_year: 2024,
                pages: 222,
                quantity: 9,
                price: 20
            },
            {
                title: "Ex soldiers",
                ISBN: "HF-44444",
                publishing_year: 2001,
                pages: 230,
                quantity: 5,
                price: 30
            },
            {
                title: "War and Peace",
                ISBN: "HF-55555",
                publishing_year: 2010,
                pages: 960,
                quantity: 3,
                price: 35
            }
        ]
    },
    {
        category: "Science Fiction",
        books: [
            {
                title: "Neuralyzer",
                ISBN: "SF-11111",
                publishing_year: 1984,
                pages: 90,
                quantity: 3,
                price: 25
            },
            {
                title: "Stabilizer",
                ISBN: "SF-22222",
                publishing_year: 2024,
                pages: 800,
                quantity: 9,
                price: 10
            },
            {
                title: "Snow space",
                ISBN: "SF-33333",
                publishing_year: 1999,
                pages: 300,
                quantity: 3,
                price: 9
            },
            {
                title: "Borderlands",
                ISBN: "SF-44444",
                publishing_year: 1988,
                pages: 88,
                quantity: 8,
                price: 88
            },
            {
                title: "Borderlands 2",
                ISBN: "SF-55555",
                publishing_year: 2021,
                pages: 210,
                quantity: 12,
                price: 15
            }
        ]
    },
    {
        category: "Mystery & Thriller",
        books: [
            {
                title: "Goodbye",
                ISBN: "MT-11111",
                publishing_year: 2012,
                pages: 500,
                quantity: 5,
                price: 6
            },
            {
                title: "Hello",
                ISBN: "MT-22222",
                publishing_year: 2013,
                pages: 501,
                quantity: 3,
                price: 41
            },
            {
                title: "Da Vinci dough",
                ISBN: "MT-33333",
                publishing_year: 1569,
                pages: 200,
                quantity: 8,
                price: 18
            },
            {
                title: "Where are you now?",
                ISBN: "MT-66666",
                publishing_year: 2006,
                pages: 666,
                quantity: 6,
                price: 66
            },
            {
                title: "Blind people",
                ISBN: "MT-44444",
                publishing_year: 2024,
                pages: 444,
                quantity: 10,
                price: 44
            }
        ]
    }
];

//knygu filtravimas

function filterBooks(){
    let filteredBooks = [];
    let bookCategories = document.getElementById('bookCategories');
    let titleSearch = document.getElementById('titleSearch').value.toLowerCase();
    let selectedCategory = document.getElementById('categoryFilter').value;
    minPages = parseInt(document.getElementById('minPages').value) || 0;
    maxPages = parseInt(document.getElementById('maxPages').value) || 0;
    bookCategories.innerText = ""
    inventory.forEach(Obj =>{
        if (selectedCategory === "all" || Obj.category === selectedCategory) {
            Obj.books.forEach(book =>{
                let titleMatches = book.title.toLowerCase().includes(titleSearch);
                let pageRange = book.pages >= minPages && book.pages <= maxPages;
                if (titleMatches && pageRange) {
                    filteredBooks.push(book);
                }
                if (book.publishing_year === 2024){
                    isNewBook = "NEW BOOK"
                }else{
                    isNewBook = ""
                }
        });
        }
    });
    filteredBooks.forEach(filter =>{
        let filtBook = document.createElement('li')
        filtBook.innerText = `Title: ${filter.title}, ISBN: ${filter.ISBN}, Publishing year: ${filter.publishing_year} ${isNewBook}, Pages: ${filter.pages}, Quantity: ${filter.quantity}, Price: ${filter.price}`;
        bookCategories.append(filtBook)
    })
    if (selectedCategory === "all" && minPages === 0 && maxPages === 0){
        displayBooks()
    }
}


//Displayint knygas

function displayBooks(){
    inventory.forEach(Obj =>{
        let bookCont = document.querySelector('#bookCategories')
        let categories = document.createElement('div')
        let categoryName = document.createElement('h3')
        let listBooks = document.createElement('ul')
        categoryName.innerText = Obj.category
        Obj.books.forEach(book =>{
            if (book.publishing_year === 2024){
                isNewBook = "NEW BOOK"
            }else{
                isNewBook = ""
            }
            let bookList = document.createElement('li')
            bookList.innerText = `Title: ${book.title}, ISBN: ${book.ISBN}, Publishing year: ${book.publishing_year} ${isNewBook}, Pages: ${book.pages}, Quantity: ${book.quantity}, Price: ${book.price}`;
            listBooks.append(bookList)
        })
        categories.append(categoryName, listBooks)
        bookCont.append(categories)

    })
}

//Uzkrauna kategorijas i select elementa

function loadCategories(){
    const categoryFilter = document.getElementById('categoryFilter');
    inventory.forEach(Obj => {
        const option = document.createElement('option');
        option.value = Obj.category;
        option.innerText = Obj.category;
        categoryFilter.append(option)
    })
}


//Suranda brangiausia knyga

function findMostExpBook(){
    maxBook = document.getElementById('minMaxBook')
    let mostExpBook = null;
    inventory.forEach(Obj => {
        Obj.books.forEach(book =>{
            if (mostExpBook === null){
                mostExpBook = book;
            }
            else if (book.price > mostExpBook.price){
                mostExpBook = book;
            }
        })
    })
    let expensiveBook = `Title: ${mostExpBook.title}, ISBN: ${mostExpBook.ISBN}, Publishing year: ${mostExpBook.publishing_year}, Pages: ${mostExpBook.pages}, Quantity: ${mostExpBook.quantity}, Price: ${mostExpBook.price}`;
    maxBook.innerText = expensiveBook;
}

//Suranda pigiausia knyga

function findLeastExpBook(){
    minBook = document.getElementById('minMaxBook')
    let leastExpBook = null;
    inventory.forEach(Obj => {
        Obj.books.forEach(book =>{
            if (leastExpBook === null){
                leastExpBook = book;
            }
            if (book.price < leastExpBook.price){
                leastExpBook = book;
            }
        })
    })
    let cheapestBook = `Title: ${leastExpBook.title}, ISBN: ${leastExpBook.ISBN}, Publishing year: ${leastExpBook.publishing_year}, Pages: ${leastExpBook.pages}, Quantity: ${leastExpBook.quantity}, Price: ${leastExpBook.price}`;
    minBook.innerText = cheapestBook;
}

//Sortint knygas

document.getElementById('sortCriteria').addEventListener('change', (e) =>{
    e.preventDefault();
    const sort = e.target.value
    switch(sort){
        case 'name-asc':
            sortBooksAscending();
            break;
        case 'name-desc':
            sortBooksDescending();
            break;
        case 'price-asc':
            sortBooksPriceAsc();
            break;
        case 'price-desc':
            sortBooksPriceDesc();
            break;
    }
    let bookCat = document.getElementById('#bookCategories')
    bookCat.innerHTML = ""
    displayBooks();
})
function sortBooksAscending(){
    inventory.forEach(category =>{
        category.books.sort((a,b) => a.title.localeCompare(b.title))
    })
}
function sortBooksDescending(){
    inventory.forEach(category =>{
        category.books.sort((a,b) => b.title.localeCompare(a.title))
    })
}
function sortBooksPriceDesc(){
    inventory.forEach(category =>{
        category.books.sort((a,b) => b.price - a.price)
    })
}
function sortBooksPriceAsc(){
    inventory.forEach(category =>{
        category.books.sort((a,b) => a.price - b.price)
    })
}


//Apskaiciuoja inventory value

function calculateInventoryValue(){
    let totalInventoryValue = 0;
    let inventoryValue = document.getElementById('inventoryValue');
    inventoryValue.innerHTML = ""


    inventory.forEach(category =>{
        let totalCategoryValue = 0;

        category.books.forEach(book =>{
            let bookValue = book.price * book.quantity
            totalCategoryValue += bookValue
        });
        totalInventoryValue += totalCategoryValue;
        let categoryRow = document.createElement('tr')
        let categoryNameCell = document.createElement('td');
        categoryNameCell.textContent = category.category
        let categoryValueCell = document.createElement('td');
        categoryValueCell.textContent = totalCategoryValue.toFixed(2);
        categoryRow.append(categoryNameCell);
        categoryRow.append(categoryValueCell);
        inventoryValue.append(categoryRow);
    });

    let totalRow = document.createElement('tr');
    let totalNameCell = document.createElement('td');
    totalNameCell.textContent = "Total Inventory Value";
    let totalValueCell = document.createElement('td');
    totalValueCell.textContent = totalInventoryValue.toFixed(2);
    totalRow.append(totalNameCell);
    totalRow.append(totalValueCell)

    inventoryValue.append(totalRow);
} 

//Atidarant langa paleidzia sitas funkcijas

window.onload = ()=>{
    loadCategories()
    displayBooks()
}