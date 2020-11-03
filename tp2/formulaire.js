function validation(){
    var Nom = document.getElementById("Nom").value;

    // ou faire une validation de tous les champs en une seule fois
    document.getElementById("error").innerHTML = "";
    
  for(let item of document.querySelectorAll('.inputAW')){
    if(item.value.length < 5){
      // recuperation du label
      var label =   document.querySelector("label[for="+item.id+"]").textContent;
      // ajout du message d'erreur
      document.getElementById("error").innerHTML += `Minimum 5 caractères pour : ${label} <br/>`;
      
      // ajout de la classe CSS "display"
      document.getElementById("error").classList.add("display");
        document.getElementById("resultat").classList.remove("display")
  
    }
      
  }
  if(document.getElementById("error").innerHTML == ""){
      var Nom = document.querySelector("#Nom").value;
      document.getElementById("error").innerHTML =`La saisie du nom est obligatoire`;
      document.getElementById("resultat").innerHTML = `Bienvenue ${Nom}`;
      document.getElementById("error").classList.remove("display")
      document.getElementById("resultat").classList.add("display")
    
    }

}