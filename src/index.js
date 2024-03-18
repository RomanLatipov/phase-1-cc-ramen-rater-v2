// index.js

function iPrintThings(thing) {
	console.log(thing);
}

// Callbacks
const handleClick = (ramen) => {
  
};

const addSubmitListener = () => {
  // Add code
}

const displayRamens = () => {
  // const menu = document.querySelector("#ramen-menu");
  fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(menu => {
      menu.forEach(e => {
        const image = document.createElement("img");
        image.src = e.image;
        image.setAttribute("id", e.id);
        image.setAttribute("onclick", `test(this.id)`);
        document.querySelector("#ramen-menu").append(image);
      })
    })
}

const main = () => {
  //displayRamens();
  //addSubmitListener();

  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
