(() => {
    let array = [1, 2, 3, 4, 5];
    let [first, ...rest] = array;
    array = rest;
    two(first, rest);
})();

function two(first, rest) {
    let sum = 0;
    array = [first, 6, 7, 8, 9, ...rest];

    for (a of array) {
        sum += a;
    }

    const customPromise = new Promise((resolve, reject) => {
        let img = [];
        if (sum > 30) {
            fetch(
                `https://api.unsplash.com/photos/?per_page=${sum}&client_id=eC4dJIRYJmbcfW48Buc6DdxV5X0RugLEA35iMsx9byg`)
                .then((result) => result.json())
                .then((images) => {
                    for (a of images) {
                        img.push(a.urls.raw);
                    }
                    resolve(img)
                });
        } else {
            reject("Sum is Less than 30");
        }
    });
    customPromise.then((img) => { console.table(img); }).catch(err => console.log(err));
}

