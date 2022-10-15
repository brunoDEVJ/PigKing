window.addEventListener('keydown', ({key, repeat}) => {
    switch (key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            if (player.velocity.y === 0 && repeat === false)
                player.velocity.y = -20
            break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
            keys.a.pressed = true
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            keys.d.pressed = true
            break;
        case 'ArrowDown':
        case 's':
        case 'S':
            player.velocity.y = 0
            break;
    }
})
window.addEventListener('keyup', ({key}) => {
    switch (key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
            keys.a.pressed = false
            break;
        case 'ArrowRight':
        case 'd':
        case 'D':
            keys.d.pressed = false
            break;
    }
})