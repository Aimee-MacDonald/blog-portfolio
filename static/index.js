checkHash();

function checkHash(){
  if(!location.hash){
    // Show the Home Page
    console.log("Home");
  } else {
    // Check for "Blog" or "Portfolio"
    switch(location.hash[1]){
      case "0":
        console.log("Blog");
        break;

      case "1":
        console.log("Portfolio");
        break

      default:
        console.log("Nope");
    }
  }
}

window.addEventListener("hashchange", () => {
  checkHash();
});
