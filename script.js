

let guess = Math.floor(Math.random()*10)+1;

function submit(){


    let userInput = Number(document.getElementById('guessInput').value);

    if (userInput >10 || userInput < 1) { 

        Swal.fire({
          icon: "error",
          title: "Choose from 1 to 10",
          text: "invalid number",
          width: 600,
          confirmButtonColor: "#9E7654",
          padding: "3em",
          color: "#f08919",
          background: "#B8B5AE",
          backdrop: `rgba(95,91,99,0.4)`
        });
    
      }else if (userInput !== guess) {
       
         Swal.fire({
          icon: "error",
          title: "oops.. TRY AGAIN.",
          text: "You guessed wrong",
          width: 600,
          confirmButtonColor: "#9E7654",
          padding: "3em",
          color: "#f08919",
          background: "#B8B5AE",
          backdrop: `rgba(95,91,99,0.4)`
        });

    } else {

       Swal.fire({
          icon: "success",
          title: "🎉 YOU WIN",
          text: "Correct Guess!",
          confirmButtonColor: "#9E7654",
          width: 600,
          padding: "3em",
          color: "#f08919",
          background: "#B8B5AE",
          backdrop: `rgba(95,91,99,0.4)`
          
        });

        guess = Math.floor(Math.random() * 10) + 1;
    }


}

function reset(){
        document.getElementById('guessInput').value = "";
}




