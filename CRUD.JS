document.addEventListener('DOMContentLoaded',function(){
     axios.get("https://crudcrud.com/api/2a228bafa218469090ee5ef6c9171602/order-list")
     .then((res)=>{console.log(res.data)
    for(let i=0;i<res.data.length;i++){
        newUser(res.data[i]);
    }}).catch((err)=>{console.log(err);})
});
function addBill() {
    var form = document.getElementById("order-form");
    var price = form.price.value;
    var dish = form.dish.value;
    var table = form.table.value;
    
    var listItem = document.createElement("li");
    listItem.innerHTML = price + " - " + dish + " - "+ table;

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "btn btn-danger btn-sm ml-2";
    deleteButton.onclick = function() {
        listItem.remove();
    };
    listItem.appendChild(deleteButton);
    var my_obj  = {
        price: price,
        dish : dish,
        table : table,
    };
    var tableList;
    if (table === "table1") {
        tableList = document.getElementById("table1-list");
    } else if (table === "table2") {
        tableList = document.getElementById("table2-list");
    } else if (table === "table3") {
        tableList = document.getElementById("table3-list");
    }
    tableList.appendChild(listItem);
    axios.post("https://crudcrud.com/api/2a228bafa218469090ee5ef6c9171602/order-list",my_obj)
     .then((res)=>{console.log(res.data)
    for(let i=0;i<res.data.length;i++){
        newUser(res.data[i]);
    }}).catch((err)=>{console.log(err);})
}
function newUser(e){
    var form = document.getElementById("order-form");
    var price = e.price;
    var dish = e.dish;
    var table = e.table;
    
    var listItem = document.createElement("li");
    listItem.innerHTML = price + " - " + dish + " - "+ table;

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "btn btn-danger btn-sm ml-2";
    listItem.appendChild(deleteButton);
    deleteButton.onclick = function() {
        axios.delete(`https://crudcrud.com/api/2a228bafa218469090ee5ef6c9171602/order-list/${e._id}`)
        listItem.remove();
    };
 
    var tableList;
    if (table === "table1") {
        tableList = document.getElementById("table1-list");
    } else if (table === "table2") {
        tableList = document.getElementById("table2-list");
    } else if (table === "table3") {
        tableList = document.getElementById("table3-list");
    }
    tableList.appendChild(listItem);
}
