function save() {
    if (localStorage.getItem("orders") === null) {
        orders = [];
    }
    else {
        orders = [];
        orders = JSON.parse(localStorage.getItem("orders"));
    }


    let buyer_name = document.getElementById("t9").value + " " + document.getElementById("t10").value;
    let address = document.getElementById("t5").value + "\n" + document.getElementById("t6").value + "\n" +
        document.getElementById("t7").value + "\n" + document.getElementById("t8").value + "\n" + document.getElementById("pin").value;
    let city = document.getElementById("t6").value;
    let cost = document.getElementById("t1").value + "." + document.getElementById("t2").value;
    let phone = document.getElementById("t11").value;

    console.log(buyer_name)
    console.log(address)
    console.log(city)
    console.log(cost)
    console.log(phone)

    let obj = {
        "bname": buyer_name,
        "shipaddr": address,
        "shipcity": city,
        "giftcost": cost,
        "mobile": phone
    }
    console.log(obj);
    orders.push(obj);
    localStorage.setItem("orders", JSON.stringify(orders));
}

function get() {
    var orders = [];
    orders = JSON.parse(localStorage.getItem("orders"));
    console.log(orders)
    var table = document.getElementById("mybody");
    for (let i = 0; i < orders.length; i++) {
        var row = '<tr> <td>' + orders[i].bname + '</td> <td>' + orders[i].shipaddr + ' </td><td>' + orders[i].shipcity + '</td><td>' + orders[i].giftcost + '</td><td>' + orders[i].mobile + ' </td></tr>';
        table.innerHTML += row;
    }

}