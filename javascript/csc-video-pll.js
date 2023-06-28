const selectElement = document.getElementById("csc-lesson-select");
selectElement.selectedIndex = 0;

const videoIframe = document.getElementById("csc-video-iframe");
let videoUrl = videoIframe.src;

const replaceUrl = (url) => {
    if (!url.includes("https://www.cscplus.work/")) {
        return url;
    }
    if (url.includes("https://www.cscplus.work/embed/ytb?video=")) {
        return url.replace("https://www.cscplus.work/embed/ytb?video=", "https://www.youtube.com/embed/");
    } else if (url.includes("https://www.cscplus.work/embed/ink?video=")) {
        return url.replace("https://www.cscplus.work/embed/ink?video=", "https://short.ink/");
    } else if (url.includes("https://www.cscplus.work/embed/ok?video=")) {
        return url.replace("https://www.cscplus.work/embed/ok?video=", "https://ok.ru/videoembed/");
    }
    return url;
};

videoIframe.src = replaceUrl(videoUrl);

function changeVideo(event) {
    const videoUrl = event.target.value;

    videoIframe.src = replaceUrl(videoUrl);
}
