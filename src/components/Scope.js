// Scope examples
function test() {
    var x = 1; // Function scoped
    console.log(x);
}
test();

if (true) {
    let y = 2; // Block scoped
    const z = 3; // Block scoped
    console.log(y, z);
}

export default function Scope() {
    return `
        <div>
            <h2 class="mb20">Scope Example</h2>
            <p>
             var x = 1; // Function scope
            </p>
            <p>const z = 3; // Block scope</p>
            <p>let y = 2; // Block scope</p>
        </div>
    `;
}