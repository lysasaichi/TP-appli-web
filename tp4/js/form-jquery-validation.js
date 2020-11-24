window.onload = function () {
  document.querySelector("#nom").addEventListener("keyup", function (event) {
    document.getElementById("nomCounter").textContent = `${event.target.value.length} car.`;
  });
 
    document.querySelector("#prenom").addEventListener("keyup", function (event) {
      document.getElementById("prenomCounter").textContent = `${event.target.value.length} car.`;
    });
      document.querySelector("#date").addEventListener("keyup", function (event) {
        document.getElementById("dateCounter").textContent = `${event.target.value.length} car.`;
      });
        document.querySelector("#adresse").addEventListener("keyup", function (event) {
          document.getElementById("adresseCounter").textContent = `${event.target.value.length} car.`;
        });
          document.querySelector("#email").addEventListener("keyup", function (event) {
            document.getElementById("emailCounter").textContent = `${event.target.value.length} car.`;
 });

  document.querySelector("#gps").addEventListener("click", function (event) {
    event.preventDefault();
    getLocation();
  });

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    contactStore.add(
      document.querySelector("#nom").value,
      document.querySelector("#prenom").value,
      document.querySelector("#date").value,
      document.querySelector("#adresse").value,
      document.querySelector("#email").value
    );

    const contactList = contactStore.getList();

    document.querySelector("table tbody").innerHTML = "";

    for (var contact of contactList) {
      document.querySelector("table tbody").innerHTML += `
        <tr>
            <td> ${contact.nom}</td>
            <td> ${contact.prenom}</td>
            <td> ${contact.date}</td>
            <td> <a href="https://maps.google.com/?q=${contact.adresse}">${contact.adresse}</a></td>
            <td> <a href="mailto:${contact.email}">${contact.email}</a></td>
        <tr>`;
    }
  });
};