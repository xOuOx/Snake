class Dungeon {
    constructor(width, height, gridSize, mapId) {
        this.width = width
        this.height = height
        this.gridSize = gridSize
        this.xMax = this.width / this.gridSize
        this.yMax = this.height / this.gridSize
        this.context = document.querySelector(mapId).getContext('2d')
    }

    clean() {
        this.context.clearRect(0, 0, this.width, this.height)
    }

    showSnake(snake) {
        // 蛇头
        this.context.fillStyle = "#18ca53"
        let [x, y] = snake.body[0]
        this.context.fillRect(
            x*this.gridSize,
            y*this.gridSize,
            this.gridSize,
            this.gridSize
        )
        // 蛇身
        this.context.fillStyle = "#12610f"
        for (let s of snake.body.slice(1)) {
            let [x, y] = s
            this.context.fillRect(
                x*this.gridSize,
                y*this.gridSize,
                this.gridSize,
                this.gridSize
            )
        }
    }

    showFruit(fruit) {
        let radius = this.gridSize / 2
        let x = fruit.x * this.gridSize + radius
        let y = fruit.y * this.gridSize + radius
        this.context.beginPath()
        this.context.arc(x, y, radius, 0, Math.PI*2)
        this.context.fillStyle = "#FFA500"
        this.context.fill()
    }
}
