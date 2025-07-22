     const neonCircle = document.createElement("div");
      neonCircle.id = "red-circle";
      document.body.appendChild(neonCircle);

      document.addEventListener("mousemove", (event) => {
        neonCircle.style.left = `${event.pageX}px`;
        neonCircle.style.top = `${event.pageY}px`;
      });
      var loader = document.getElementById("preloader");
      window.addEventListener("load", function(){
        loader.style.display = "none";
      })
     let link = document.createElement('p.css');

    