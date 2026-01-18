
const infoContainer = document.getElementById("infoContainer");
const getUsers      = document.getElementById("getUsers");
const getBooks      = document.getElementById("getBooks");
const booksAPI_URL  = "http://localhost:3000/books";
const usersAPI_URL  = "http://localhost:3000/users";



const fetchBooks = async () => {
    try {
        const response = await fetch(booksAPI_URL)
        const data     = await response.json()

        infoContainer.innerHTML = "";
        
        data.forEach(book => {
            const template = `
            <div class="card">
               <h2>${book.titulo}</h2>
               <img src="${book.imagen}" alt="${book.titulo}">
               <p>Autor: ${book.autor}</p>
               <p>Fecha de publicación: ${book.fechaPublicacion}
            </div>
            `
            infoContainer.innerHTML += template
        })

    } catch (error) {
        console.error(error)
    }
};

const fetchUsers = async () => {
    try {
        const response = await fetch(usersAPI_URL)
        const data     = await response.json()

        infoContainer.innerHTML = "";
        
        data.forEach(user => {
            const template = `
            <div class="card">
               <h2>${user.nombre} ${user.apellidos}</h2>
               <p>Email: ${user.correo}</p>

               <h3>Colección:</h3>
               <ul>
                  ${user.coleccion.map(libro => `<li>${libro}</li>`).join("")}
               </ul>
               <h3>Wishlist:</h3>
               <ul>
                  ${user.wishlist.map(libro => `<li>${libro}</li>`).join("")}
               </ul>
            </div>
            `
            infoContainer.innerHTML += template
        })

    } catch (error) {
        console.error(error)
    }
};

getBooks.addEventListener("click", fetchBooks);
getUsers.addEventListener("click", fetchUsers);