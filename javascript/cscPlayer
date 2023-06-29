const urlList = {
  "https://www.cscplus.work/embed/ytb?video=": "https://www.youtube.com/embed/",
  "https://www.cscplus.work/embed/ink?video=": "https://short.ink/",
  "https://www.cscplus.work/embed/ok?video=": "https://ok.ru/videoembed/"
};
const selectElement = document.getElementById("csc-lesson-select");
selectElement.selectedIndex = 0;

const videoIframe = document.getElementById("csc-video-iframe");
let videoUrl = videoIframe.src;

const replaceUrl = (url) => {
  if (!url.includes("https://www.cscplus.work/")) {
    return url;
  }

  for (const oldUrl in urlList) {
    if (url.includes(oldUrl)) {
      return url.replace(oldUrl, urlList[oldUrl]);
    }
  }

  return url;
};

videoIframe.src = replaceUrl(videoUrl);

function changeVideo(event) {
    const videoUrl = event.target.value;

    videoIframe.src = replaceUrl(videoUrl);
}
