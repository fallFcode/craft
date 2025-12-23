import { ffmpegGlobal } from "./part/global";
import { inputOption } from "./part/inputOption";
import { video } from "./part/video";

const ffmpegRules = {
  global: {
    ...ffmpegGlobal,
  },
  inputOption: {
    ...inputOption,
  },
  // stream: {
  //   mapV: "0:v:0",
  //   mapA: "0:a:0?",
  //   mapMetadata: 0,
  //   mapChapter: 0,
  // },
  video: {
    ...video,
  },
  // audio: {
  // ca: "aac",
  // ba: "128k",
  // ar: 48000,
  // ac: 2,
  // af: "volume=1.0",
  // },
  // subtitle: {
  //   cs: "copy",
  // },
  // metadata: {
  //   metadataTitle: "output",
  //   metadataASV: "language=eng",
  //   metadataASA: "language=eng",
  // },
  output: {
    // movFlags: "+faststart",
    // f: "mp4",
    output: {
      label: "Output Video",
      input: "Output.mp4",
      mode: "input",
      isImportant: true,
    },
  },
  default: {
    label: "Preliminary",
    flag: "ffmpeg",
    isImportant: true,
  },
};

function getName(array) {
  for (const key in array) {
    if (typeof array[key] === "object") {
      getName(array[key]);
    } else {
      console.log(key);
    }
  }
}
getName(ffmpegRules);

// ffmpegRules
