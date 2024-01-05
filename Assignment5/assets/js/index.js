//Generate permutations and comnbinations of input number
function genNums(num) {
    const arr = Array.from(String(num), Number);
    const pnc = [];

    function gen(cur, rem) {
        const genNum = parseInt(cur.join(''), 10);
        if (!isNaN(genNum)) pnc.push(genNum);

        for (let i = 0; i < rem.length; i++) {
            const updCur = [...cur, rem[i]];
            const updRem = [...rem.slice(0, i), ...rem.slice(i + 1)];
            gen(updCur, updRem);
        }
    }

    gen([], arr);
    return pnc;
}

const generatedNums = genNums();
console.log("Generated numbers:", generatedNums);


//Find Prime
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

//Filter prime numbers from pnc array
const primeNum = generatedNums.filter(isPrime);
console.log(primeNum);

const maxElement = console.log(Math.max(...primeNum));


//Pascal's Triangle 
function generatePascals(stopElement, primeNumbers, matched_elements) {
    let row = [1];
    let found = false;

    const outputContainer = document.getElementById('pascaltriangle');
    outputContainer.innerHTML = '';
    outputContainer.innerHTML += `<span class="text-element" style="margin-right: 0px;">${row}</span><br><br>`;

    while (!found) {
        if (!found) {
            const nextRow = [1];
            outputContainer.innerHTML += `<span class="text-element">1</span> `;


            for (let i = 1; i < row.length; i++) {
                nextRow[i] = row[i - 1] + row[i];
                let x = nextRow[i];

                if (x >= stopElement) {
                    found = true;
                }

                if (primeNumbers.includes(x)) {
                    matched_elements.push(x);
                    outputContainer.innerHTML += `<span class="text-element prime">${x}</span> `;
                }
                else {
                    outputContainer.innerHTML += `<span class="text-element">${x}</span> `;
                }
            }

            nextRow.push(1);
            row = nextRow;
        }

        outputContainer.innerHTML += `<span style="margin-right: 0px;" class="text-element">1</span><p></p>`;
    }
}

function processInput() {
    let matched_elements = [];
    let missed_elements = [];

    let n = document.getElementById("number").value;
    let arr = genNums(n);
    arr = [... new Set(arr)];
    console.log("Generated numbers:", arr);


    const primeNumbers = arr.filter(isPrime);
    console.log("Prime numbers:", primeNumbers);

    const stopElement = Math.max(...primeNumbers);
    console.log("Largest prime number:", stopElement);
    generatePascals(stopElement, primeNumbers, matched_elements);


    matched_elements = [... new Set(matched_elements)];
    console.log("Matched elements:", matched_elements);


    for (let i of primeNumbers) {
        if (!matched_elements.includes(i)) {
            missed_elements.push(i);
        }
    }

    console.log("Missed elements:", missed_elements);
    console.log("Error ratio: ", ((missed_elements.length / primeNumbers.length) * 100).toFixed(3));


    const inform = document.getElementById('info');
    inform.innerHTML = '';
    inform.innerHTML += '<br><hr>';
    inform.innerHTML += `<p><b>PnC: </b> ${arr.join(', ')}</p><hr>`;
    inform.innerHTML += `<p><b>Prime numbers: </b> ${[...primeNumbers].sort((a, b) => a - b).join(', ')}</p><hr>`;
    inform.innerHTML += `<p><b>Matched numbers: </b> ${matched_elements.join(', ')}</p><hr>`;
    inform.innerHTML += `<p><b>Missed numbers: </b> ${missed_elements.join(', ')}</p><hr>`;
    inform.innerHTML += `<p><b>Error ratio: </b> ${((missed_elements.length / primeNumbers.length) * 100).toFixed(3)} %</p>`;
    inform.innerHTML += '<hr><br>';
}