import '../css/main.css';
import '../css/input-elements.css';
import '../less/custom.less';

import {secretButton, secretParagraph, inputButton} from './dom-loader'

inputButton.addEventListener('click', check);


//checks input information
function check(){
  var user = document.getElementById("username").value;
  var pass=document.getElementById("pass").value;
  var userBoot=false;
  var passBool=false;

  if (user.length<8){
    alert("Username too short");
  }
  else{userBoot=true;}

  if (pass.length<8){
    alert("Passsword too short");
  }
  else{passBool=true;}
  if (passBool&&userBoot){
    alert( "Sorry, but we don't have a database");
  }
}
