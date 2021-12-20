// function addingEventListener() {
//     const input = document.getElementById('input');
//     function clickAlert() {
//         alert('I was clicked!');
// };
//     input.addEventListener('click', clickAlert);
// };

// addingEventListener();

function addingEventListener() {
    const input = document.querySelector('#input');
    function alertMe() {
        return alert("I was clicked!")
    }
    input.addEventListener('click', alertMe)
}
addingEventListener();