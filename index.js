const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const image = document.getElementById("source");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Hero {
  constructor() {
    this.velocity = {
      x: 0,
      y: 0,
    };

    const image = new Image();

    image.src = "./images/fs.png";
    image.onload = () => {
      const scale = 0.5;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height,
      };
    };
  }

  draw() {
    // c.fillStyle = "red";
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);

    if (this.image) {
      c.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
  }
}

const player = new Hero();
player.draw();

function animate() {
  //this creates an animation loop
  requestAnimationFrame(animate);
  player.draw();
}

animate();
