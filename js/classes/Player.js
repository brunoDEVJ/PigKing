class Player extends Sprite{
    constructor({collisionBlocks = [], imageSrc, frameRate}) {
        super({ imageSrc, frameRate });
        this.position = {
            x: 200,
            y: 200
        }

        this.velocity = {
            x: 0,
            y: 0
        }


        
        this.sides = {
            bottom: this.position.y + this.height,
        }

        this.gravity = 1

        this.collisionBlocks = collisionBlocks
    }

    update() {
        // c.fillStyle = 'rgba(0,0,255,0.4)'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        this.position.x += this.velocity.x

        this.updateHitBox()
        this.checkForHorizontalCollisions()
        this.applyGravity()
        this.updateHitBox()
     
       

        this.checkForVerticalCollisions()

        // checar a colisão vertical
        // não passar do chão do canvas
        // if (this.sides.bottom +this.velocity.y < canvas.height)
        // {
        // this.velocity.y += this.gravity
        // }
        // else this.velocity.y = 0
    }

    updateHitBox() {
        this.hitbox = {
            position: {
                x: this.position.x + 58,
                y: this.position.y + 34,
            },
            width: 50,
            height: 53,
        }

    }

    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

            // se houve a colisão
            if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width
                && this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x
                && this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y
                && this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
                // verificando colisão no eixo x para a esquerda
                if (this.velocity.x < 0) {
                    const offset = this.hitbox.position.x - this.position.x
                    this.position.x = collisionBlock.position.x + collisionBlock.width -offset + 0.01
                    break
                }
                if (this.velocity.x > 0) {
                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
                    this.position.x = collisionBlock.position.x - offset - 0.01
                    break
                }
            }
        }
    }

    applyGravity() {
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height
    }

    checkForVerticalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

            // se houve a colisão
            if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width
                && this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x
                && this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y
                && this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
                // verificando colisão no eixo y para a esquerda
                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y - this.position.y
                    this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01
                    break
                }
                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
                    this.position.y = collisionBlock.position.y - offset - 0.01
                    break
                }
            }
        }
    }
}