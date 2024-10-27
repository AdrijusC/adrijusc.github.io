//const article = document.getElementById("vip");
//const article = document.getElementsByName("article") blogas tipo lygtais
//const article = document.getElementsByClassName("other")
/* const article = document.querySelector("#vip");
const allArticle = document.querySelectorAll("article");
console.log(allArticle) */

/* article.addEventListener('click',()=>{
    article.style.backgroundColor = "#ddaa88"
})

document.querySelector("button").addEventListener('click',()=>{
    const articles = document.querySelectorAll("article"); 
    articles.forEach(article=>{
        article.style.backgroundColor = "green";
    });
})



document.querySelector("button").addEventListener('submit',(e=>{
    const lists = document.querySelectorAll("section"); 
    lists.forEach(list=>{
        list.style.backgroundColor = "black";
    });
})

document.querySelector('.showName button').addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.target);
    e.target.style.backgroundColor = red;
    const userName = document.querySelector('.showName input').value;
    console.log(userName);
    document.querySelector('.result').textContent = `Vartotojo vardas yra: ${userName}`;
}) */



/* //G
 document.querySelector('.showName button').addEventListener('click',(e)=>{
    e.preventDefault();
    //1.Sukurti elementa
    const li = document.createElement('li');
    //2.Priskirti elementui turini
    li.textContent = document.querySelector('.showName input').value;
    document.querySelector('.showName h3').textContent = "<div>tekstas</div>";
    //3. Padeti elementa i kita elementa (nurodyti vieta)
    document.querySelector('.result').appendChild(li)
}) */

    function createTable() {
        // Get user inputs
        const columns = document.getElementById('columns').value;
        const rows = document.getElementById('rows').value;
        
        // Create table element
        const table = document.createElement('table');
        table.style.border = '1px solid blue';

        // Loop to create rows and cells
        for (let i = 0; i < rows; i++) {
            const tr = document.createElement('tr');
            for (let j = 0; j < columns; j++) {
                const td = document.createElement('td');
                td.style.border = '1px solid black';
                td.style.padding = '8px';
                td.textContent = 'KITM';
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        // Clear any existing tables and append the new table
        const container = document.getElementById('tableContainer');
        container.innerHTML = '';
        container.appendChild(table);
    }