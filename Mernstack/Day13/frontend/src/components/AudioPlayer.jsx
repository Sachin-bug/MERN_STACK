function AudioPlayer({ podcast }) {

  if (!podcast) return null;

  return (
    <div className="player">
      <img src={podcast.thumbnail} alt="" />
      <div>
        <h4>{podcast.title}</h4>
        <p>{podcast.host}</p>
      </div>

      <audio controls autoPlay src={podcast.audioUrl}></audio>
    </div>
  );
}

export default AudioPlayer;