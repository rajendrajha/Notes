function up() {
    in3 = document.getElementById('in3').value;
    in2 = document.getElementById('in2').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonA = [];
        itemsJsonA.push([in3, in2])
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonA))
    }
    else {
        itemsJsonAStr = localStorage.getItem('itemsJson')
        itemsJsonA = JSON.parse(itemsJsonAStr)
        itemsJsonA.push([in2, in3])
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonA))
    }
    update();
}
function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonA = [];
    }
    else {
        itemsJsonAStr = localStorage.getItem('itemsJson')
        itemsJsonA = JSON.parse(itemsJsonAStr)
    }
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemsJsonA.forEach((element, index) => {
        str += `
                            <tr>
                            <th scope="row">${index + 1}</th>
                            <td>${element[0]}</td>
                            <td>${element[1]}</td> 
                <td><button class="btn-primary" onclick= "deleted(${index})">
                    Delete
                </button></td>
              </tr>`;

    });
    tableBody.innerHTML = str;
}
add = document.getElementById("btn");
add.addEventListener("click", up);
update();
function deleted(itemindex){
    itemsJsonAStr= localStorage.getItem('itemsJson')
    itemsJsonA= JSON.parse(itemsJsonAStr)
    itemsJsonA.splice(itemindex,1)
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonA))
    update();
}
