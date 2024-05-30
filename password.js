document.addEventListener("DOMContentLoaded", function () {
 const len = document.getElementById("len");
 const gen =   document.getElementById("gen");
  const prag =  document.getElementById("prag");

    gen.addEventListener("click", function(event){
        event.preventDefault();
        prag.textContent = "";
        let lenpass = parseInt(len.value);
        let includesmall = document.getElementById("sa").checked;
        let includelarge = document.getElementById("la").checked;
        let includenumber = document.getElementById("n").checked;
        let includesymbols = document.getElementById("s").checked;

        let pag = document.createElement("p");
        pag.classList.add("p");
        let pass = generator(lenpass, includesmall, includelarge, includenumber, includesymbols);
        pag.textContent = pass;
        prag.appendChild(pag);

    });

    function generator(lenpass, includesmall, includelarge, includenumber, includesymbols){
        const sa = "abcdefghijklmnopqrstuvwxyz";
        const la = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const n = "0123456789";
        const s = "!@#$%&*()-+/|{}:;";

        let allowedchar = "";
        let password = "";

        if (includesmall) {
            allowedchar += sa;
            
        }
        if (includelarge) {
            allowedchar += la;
            
        }
        if (includenumber) {
            allowedchar += n;
            
        }
        if (includesymbols) {
            allowedchar += s;
            
        }

        for (let i = 0; i < lenpass; i++) {
        
            const randomindex = Math.floor(Math.random() * allowedchar.length)

            password += allowedchar[randomindex];
            
        }
        return password
    }
    
});