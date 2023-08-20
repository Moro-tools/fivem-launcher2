const button = document.getElementById("whitelist");
let whitelisted = false;

button.addEventListener("click", async function () {
  try {
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();
    
    const p = document.getElementById("message");
    const container = document.querySelector(".container-whitelisted");
    const connect = document.getElementById("connect");

    let ip = data.ip;
    let p1Text = "Your IP " + ip +" is successfully <span>Whitelisted</span>";
    
    p.innerHTML = p1Text;
    connect.href = "fivem://connect/16.ip.gl.ply.gg:9998";
    whitelisted = true;
    button.innerHTML = '<a href="fivem://connect/16.ip.gl.ply.gg:9998" id="connect"><img src="fivem.png" height="20px">Connect To Server</a>';
    button.removeAttribute("href");
  } catch (error) {
    console.error('Error fetching IP:', error);
  }
});

let menuOpen = false;

const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
  if (!menuOpen) {
    nav.classList.add("active");
    menuOpen = true;
  } else {
    nav.classList.remove("active");
    menuOpen = false;
  }
});

const connect1 = document.getElementById("connect1");
const p = document.getElementById("message");

connect1.addEventListener("click", function() {
  if (!whitelisted) {
    connect1.href = "#"; 
    p.innerHTML = `Your IP isn't <span class="not-whitelisted">Whitelisted</span>. Please click the button below.`;
}});
const connect = document.getElementById("connect");

connect.addEventListener("click", function(){
  if (!whitelisted){
    connect.href = "#";
    p.innerHTML = `Your IP isn't <span class="not-whitelisted">Whitelisted</span>. Please click the button below.`;
  }
});


menuIcon.addEventListener("click", function(){
  const hide = document.getElementById("hide");
  hide.id = "responsive-nav";
  menuIcon.style.display = "none";
  const menuX = document.getElementById("menu-icon-x");
  menuX.style.display = "flex";
  menuX.addEventListener("click",function(){
    const elem = document.getElementById("responsive-nav");
    elem.id = "hide";
    menuX.style.display = "none";
    menuIcon.style.display = "flex";
  });
});
