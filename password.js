document.addEventListener("DOMContentLoaded", function () {
 const len = document.getElementById("len");
 const gen =   document.getElementById("gen");
  const prag =  document.getElementById("prag");
  const mess =  document.getElementById("mess");




    gen.addEventListener("click", function(event){
        event.preventDefault();
        prag.textContent = "";
        let lenpass;
        let errormess;
        if (len.value > 16) {
            alert("Max length 16")
            
        }else if (len.value == "" || len.value == 0) {
           alert("Enter atleast 1 number");
        }else{
            lenpass = parseInt(len.value);
        }
        
        let includesmall = document.getElementById("sa").checked;
        let includelarge = document.getElementById("la").checked;
        let includenumber = document.getElementById("n").checked;
        let includesymbols = document.getElementById("s").checked;

        let pag = document.createElement("p");
        pag.classList.add("p");
        let pass;

        if (!includesmall && !includelarge && !includenumber && !includesymbols) {
           alert("Aleast select 1 checkbox");
        }else{
          pass  = generator(lenpass, includesmall, includelarge, includenumber, includesymbols);
        }


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
