function showSurprise() {
    document.getElementById("surpriseBox").style.display = "block";
  
    for (let i = 0; i < 30; i++) {
      let heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.top = Math.random() * window.innerHeight + "px";
      heart.style.fontSize = Math.random() * 30 + 20 + "px";
      document.body.appendChild(heart);
  
      setTimeout(() => heart.remove(), 4000);
    }
  }
  
