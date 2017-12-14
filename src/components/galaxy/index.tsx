import * as React from "react";

class Galaxy extends React.Component {
  public componentDidMount () {
    const canvas = document.getElementById("galaxy") as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  public render () {
    return (
      <canvas id="galaxy" height={window.innerHeight} width={window.innerWidth}></canvas>
    );
  }
}

export default Galaxy;
