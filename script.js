const sortPlaylist = (channelName) => {
  const videoList = document.querySelector("ytd-playlist-video-list-renderer")
    .children[2];
  const allVideos = videoList.children;
  const videos = [];

  for (let i = 0; i < allVideos.length; i++) {
    if (
      allVideos[i].children[1].children[0].children[1].children[1].children[0]
        .children[0] === undefined
    ) {
      return "Scroll to the bottom of the video list";
    }
    if (
      allVideos[i].children[1].children[0].children[1].children[1].children[0]
        .children[0].children[0].children[0].children[0].children[0].children[0]
        .text === channelName
    ) {
      videos.push(allVideos[i]);
    }
  }

  if (videos.length !== 0) {
    for (let i = 0; i < videos.length; i++) {
      videoList.prepend(videos[i]);
    }
    return "Videos sorted :)";
  } else {
    return "No videos uploaded by this channel. Perhaps you made a mistake in the name of the channel";
  }
};
