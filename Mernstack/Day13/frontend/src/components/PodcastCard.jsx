import { useNavigate } from "react-router-dom";

function PodcastCard({ podcast, setCurrentPodcast }) {

  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentPodcast(podcast);
    navigate(`/episode/${podcast._id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={podcast.thumbnail} alt="" />
      <h3>{podcast.title}</h3>
      <p>{podcast.host}</p>
    </div>
  );
}

export default PodcastCard;