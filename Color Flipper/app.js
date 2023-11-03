const colors = ["red", "blue", "#1a4576", "rgba(216, 155, 20)" ];

const btn = document.getElementById("btn")

const color = document.getElementById("color")

function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}

btn.addEventListener('click', function(){
    const randomNumber  = getRandomColor()

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})