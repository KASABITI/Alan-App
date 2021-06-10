var alanBtnInstance = alanBtn({
    key: "b780a7e6d547ffe160dd7ed3be7c90842e956eca572e1d8b807a3e2338fdd0dc/stage",
    	// Handling the highlightItem command 
        onCommand: function(commandData) {
			if (commandData.command == "updateOrder") {
				changeOrder(commandData.item, commandData.quantity);
			} else if (commandData.command == "highlightItem") {
				highlight(commandData.item);
			} else if (commandData.command == "setAddress") {
				document.getElementById("address").innerHTML = "Address: " + commandData.address;
			} else if (commandData.command == "setTime") {
				document.getElementById("time").innerHTML = "Delivery time: " + commandData.time;
			} else if (commandData.command == "setComment") {
				document.getElementById("comment").innerHTML = "Comments: " + commandData.comment;
			}
		},
    rootEl: document.getElementById("alan-btn"),
  });

// Setting the order
let order = {};
   
// Showing the order on the page
function updateCart() {
    let html = "";
    for (let key in order) {
        html += `<tr><td>${key}</td><td>${order[key]}</td>`;
    }
    html = `<table border="0">${html}</table>`;
    document.getElementById("order").innerHTML = html;
}

// Changing the number of items in the order

function changeOrder(item, quantity) {
	let number = (order[item] ? order[item] : 0) + quantity;
	// Removing the item or updating the item quantity
	if (number <= 0) {
		delete order[item];
	} else {
		order[item] = number;
	}
	updateCart();
}

//highlight items
function highlight(item){
    const el = document.getElementById(item.replace(/\s+/g, '-'));
    if (el) {
        el.style.border = "1px solid #22CBFF";
        setTimeout(() => {
            el.style.border = "1px solid #C6C3C3";
        }, 1000);
    }
}



























// var alanBtnInstance = alanBtn({
//     key: "e2fecaef4cb07cbe7d43485dbc3cb44a2e956eca572e1d8b807a3e2338fdd0dc/stage",
//     // Handling the updateOrder command 
//     onCommand: function (commandData) {
//         if (commandData.command == "updateOrder") {
//             changeOrder(commandData.item, commandData.quantity);
//         }
//     },
//     rootEl: document.getElementById("alan-btn"),
// });

