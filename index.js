const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 64 * 16
canvas.height = 64 * 9



const player = new Player()

function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    player.draw()
    player.update()
}

animate()

window.addEventListener('keydown', ({key}) => {
    console.log(key)
    switch (key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            if(player.velocity.y === 0)
            player.velocity.y = -20
            break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
            player.velocity.x = +10
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            player.velocity.x -= 1
            break;
        case 'ArrowDown':
        case 's':
        case 'S':
            player.velocity.x -= 1
            break;
    }
})