import PodcastCard from "../components/PodcastCard";

function Home({ setCurrentPodcast }) {

  const examplePodcasts = [
    {
      _id: "1",
      title: "Midnight Cinema Stories",
      host: "Sachin",
      thumbnail: "https://images.unsplash.com/photo-1590608897129-79da98d15969",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      _id: "2",
      title: "Dark Studio Talks",
      host: "Podcastify",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      _id: "3",
      title: "After Hours Podcast",
      host: "Cinema World",
      thumbnail: "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
     {
      _id: "4",
      title: "kutty story",
      host: "Thalapathy",
      thumbnail: "https://images.unsplash.com/photo-1589903308904-1010c2294adc",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
     {
      _id: "5",
      title: "Untold Story",
      host: "MS DHONI",
      thumbnail: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
     {
      _id: "6",
      title: "GOD OF CRICKET",
      host: "Sachin Ramesh Tendulkar",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
     {
      _id: "7",
      title: "Pop GOD",
      host: "Michael Jackson",
      thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },
  ];

  return (
    <div>
      <h1 className="heading">🔥 Trending Episodes</h1>

      <div className="grid">
        {examplePodcasts.map(podcast => (
          <PodcastCard
            key={podcast._id}
            podcast={podcast}
            setCurrentPodcast={setCurrentPodcast}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;