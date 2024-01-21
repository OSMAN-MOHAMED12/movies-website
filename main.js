const inputFieldE1 = document.getElementById("input");
const buttonE1 = document.getElementById("btn");
const search_resultsE1 = document.getElementById("container");

console.log(inputFieldE1.value)
async function searchMovies(movies){

    try {
        if (inputFieldE1.value !=="") {
            let apiURL = `https://www.omdbapi.com/?s=${movies}&apikey=89495f67`;
            const response = await fetch(apiURL).then(response =>response.json());
            
            
            const results = await response.Search; 
            clearScreen();
                
            results.map((result)=>{
                let imageWrapper = document.createElement("div");
                imageWrapper.classList.add("search-single");
            
                const image = document.createElement("img");
                image.src = result.Poster;
            
                const title = document.createElement("p");
                title.textContent = result.Title;
            
                const year = document.createElement("span");
                year.textContent = result.Year;
            
                const type = document.createElement("p");
                type.textContent = result.Type;
            
                imageWrapper.appendChild(image);
                imageWrapper.appendChild(title);
                imageWrapper.appendChild(year);
                imageWrapper.appendChild(type);
                search_resultsE1.appendChild(imageWrapper);
                })            
        } else {
            search_resultsE1.innerHTML = "Enter a Movie"
            
        }
        
        
    } catch (error) {
        search_resultsE1.innerHTML = "Not Found such movie"
    }

    }
   
buttonE1.addEventListener("click", function(){
    let inputValue = inputFieldE1.value;
    searchMovies(inputValue);
    clearInputField();
})

function clearInputField(){
    inputFieldE1.value = ""
}
function clearScreen(){
    search_resultsE1.innerHTML = ""
}