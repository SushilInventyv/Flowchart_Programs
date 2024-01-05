function getProd() {

    fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((json) => console.log(json));
}


function postProd() {
    fetch("http://localhost:3000/products", {
        method: "POST",
        body: JSON.stringify({
            "id": 17,
            "title": "HP Pavilion 15-DK1056WM",
            "price": 1099,
            "brand": "HP Pavilion",
            "category": "laptops"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
        .then(json => console.log(json))
}

function deleteProd(deleteID) {
    fetch(`http://localhost:3000/products/${deleteID}`, {
        method: "DELETE",
    }).then(res => res.json())
        .then(json => console.log(json))
}

function putProd(updateID) {
    fetch(`http://localhost:3000/products/${updateID}`, {
        method: "PUT",
        body: JSON.stringify({
            "id": updateID,
            "title": "ASUS TUF A15 Gaming",
            "price": 2510,
            "brand": "Asus",
            "category": "laptops"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
        .then(json => console.log(json))
}

function patchProd(updateID) {
    fetch(`http://localhost:3000/${updateID}`, {
        method: "PATCH",
        body: JSON.stringify({
            "id": updateID,
            "title": "ASUS TUF A15 Gaming",
            "price": 2510,
            "brand": "Asus",
            "category": "laptops"
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
        .then(json => console.log(json))
}