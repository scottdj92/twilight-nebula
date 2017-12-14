import Author from "./Author";

interface ICommitMetadata {
  sha: string;
  url: string;
  author: Author;
  message: string;
}

export default ICommitMetadata;
