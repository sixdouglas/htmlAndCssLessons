var livraison = new Address("Monsieur SIX", "12 rue nationale", 59000, "LILLE", "FRANCE", true);
var facturation = new Address("ISEN LILLE", "41 boulevard Vauban", 59800, "LILLE", "FRANCE", false);

var client = new Client("Douglas", "SIX");
client.addAddress(livraison);
client.addAddress(facturation);

var clientDiv = document.getElementById("div-client");

var title = document.createElement("p");
title.appendChild(document.createTextNode(client.firstName + " - " + client.lastName));

clientDiv.appendChild(title);

var address = document.createElement("p");
address.appendChild(document.createTextNode(client.getFavoriteAddress()[0].line1));
address.appendChild(document.createElement("br"));
address.appendChild(document.createTextNode(client.getFavoriteAddress()[0].line2));
address.appendChild(document.createElement("br"));
address.appendChild(document.createTextNode(client.getFavoriteAddress()[0].postalCode + " - " + client.getFavoriteAddress()[0].town));
address.appendChild(document.createElement("br"));
address.appendChild(document.createTextNode(client.getFavoriteAddress()[0].country));

clientDiv.appendChild(address);
