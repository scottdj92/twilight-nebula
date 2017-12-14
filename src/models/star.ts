import ICommitMetadata from "./ICommitMetadata";

class Star {
  public committer: string;
  public commit: ICommitMetadata;
  // tslint:disable-next-line:variable-name
  private _positionX: number;
  // tslint:disable-next-line:variable-name
  private _positionY: number;

  get positionX (): number {
    return this._positionX;
  }
  set positionX (positionX: number) {
    this._positionX = positionX;
  }

  get positionY (): number {
    return this._positionY;
  }
  set positionY (positionY: number) {
    this._positionY = positionY;
  }
}

export default Star;
