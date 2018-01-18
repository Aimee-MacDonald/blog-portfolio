document.querySelector("#blog").href = "#0";
document.querySelector("#portfolio").href = "#1";

checkHash();

function checkHash(){
  if(!location.hash){
    // Show the Home Page
    document.querySelector("#blog").className = "homeNav";
    document.querySelector("#portfolio").className = "homeNav";
    console.log("Home");
  } else {
    // Check for "Blog" or "Portfolio"
    switch(location.hash[1]){
      case "0": // Blog
        document.querySelector("#blog").className = "homeNav selected";
        document.querySelector("#portfolio").className = "homeNav unselected";
        console.log("Blog");
        break;

      case "1": // Portfolio
        console.log("Portfolio");
        document.querySelector("#blog").className = "homeNav unselected";
        document.querySelector("#portfolio").className = "homeNav selected";
        break

      default: // No such URL
        console.log("Nope");
    }
  }
}

window.addEventListener("hashchange", () => {
  checkHash();
});
