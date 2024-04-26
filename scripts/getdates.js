const year = document.querySelector("#currentyear");


const today = new Date();

year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;

let nLastModif = Date.parse(document.lastModified);
