if (localStorage.getItem("showWelcomeAlert") === "true") {
    
    alert("Welcome to the Join Us page!");
    
    localStorage.removeItem("showWelcomeAlert");
}