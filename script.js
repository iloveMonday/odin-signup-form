function check(){
    let message = document.getElementById('message');
    let submit = document.getElementById("submit");
    if(document.getElementById("password").value === document.getElementById("conpassword").value){
            message.style.color = 'green';
            message.innerHTML = '☑ you got it dude';
            submit.disabled = false;
          } else {
            message.style.color = 'red';
            message.innerHTML = '☒ not a match, try again!'; 
            submit.disabled = true;
          }
  };