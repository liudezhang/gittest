window.addEventListener('load', () => {
    document.querySelector('button').addEventListener('click', () => {
        alert(document.querySelector('h1').innerText);
    })
})