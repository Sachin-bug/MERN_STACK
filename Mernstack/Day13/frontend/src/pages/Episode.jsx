import { useParams } from "react-router-dom";

function Episode({ setCurrentPodcast }) {

  const { id } = useParams();

  return (
    <div>
      <h1>🎬 Episode ID: {id}</h1>
      <p>Click play below to start listening.</p>
    </div>
  );
}

export default Episode;