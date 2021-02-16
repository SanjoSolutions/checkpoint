class Checkpoint {
  static WIDTH = 64
  static HEIGHT = 64

  constructor({x, y}) {
    this.x = x
    this.y = y
  }
}

const checkpoints = [
  new Checkpoint({ x: 0, y: 0 }),
  new Checkpoint({ x: Checkpoint.WIDTH + 16, y: 0 }),
  new Checkpoint({ x: 0, y: Checkpoint.HEIGHT + 16 }),
  new Checkpoint({ x: Checkpoint.WIDTH + 16, y: Checkpoint.HEIGHT + 16 }),
]

// selber

const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)
const context = canvas.getContext('2d')

function renderCheckpoints(checkpoints) {
  checkpoints.forEach(renderCheckpoint)
}

function renderCheckpoint(checkpoint) {
  const borderWidth = 1
  context.fillStyle = 'black'
  context.fillRect(
    checkpoint.x,
    checkpoint.y,
    Checkpoint.WIDTH,
    Checkpoint.HEIGHT
  )
  context.fillStyle = 'blue'
  context.fillRect(
    checkpoint.x + borderWidth,
    checkpoint.y + borderWidth,
    Checkpoint.WIDTH - 2 * borderWidth,
    Checkpoint.HEIGHT - 2 * borderWidth
  )
}

renderCheckpoints(checkpoints)
