const button = document.getElementById("whitelist");
let whitelisted = false
button.addEventListener("click", async function () {
  try {
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();
    
    const p = document.getElementById("message");
    const container = document.querySelector(".container-whitelisted");
    
    let ip = data.ip;
    let p1Text = "Your IP " + ip +" is successfully <span>Whitelisted</span>";
    connect.href = "fivem://connect/localhost:30120";
    const p1 = p;
    p1.innerHTML = p1Text;
    whitelisted = true
    container.appendChild(p1);
    const button = document.getElementById("whitelist");
    let text = button.innerHTML = '<a href="fivem://connect/16.ip.gl.ply.gg:9998"  id="connect"><img src="fivem.png" height="20px">Connect To Server</a>'
    const btncon = document.getElementsByClassName("button-container");
    btncon.appendChild(text) 
  } catch (error) {
    console.error('Error fetching IP:', error);
  }
});
const connect = document.getElementById("connect");
connect.addEventListener("click", function(){
  if (!whitelisted){
    const connect = document.getElementById("connect");
    const p = document.getElementById("message");
    connect.href = "#";
    let text = p.innerHTML = `Your IP isn't <span class="not-whitelisted">Whitelisted</span> click the button below`
    text.appendChild(text);
  }
})
const menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", function(){
  const menuIcon = document.getElementById("menu-icon");
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
  })

  
})