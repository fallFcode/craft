import { ffmpegGlobal } from "./part/global";
import { inputOption } from "./part/inputOption";
import { video } from "./part/video";

// const ffmpegRules = {
//   global: {
//     ...ffmpegGlobal,
//   },
//   inputOption: {
//     ...inputOption,
//   },
//   stream: {
//     mapV: "0:v:0",
//     mapA: "0:a:0?",
//     mapMetadata: 0,
//     mapChapter: 0,
//   },
//   video: {
//     ...video,
//   },
//   audio: {
//     ca: {
//       label: "Audio Codec",
//       flag: "-c:a",
//       options: [
//         { value: "aac", hw: "cpu" },
//         { value: "aac", hw: "nvidia" },
//         { value: "aac", hw: "intel" },
//         { value: "aac", hw: "amd" },
//         { value: "aac", hw: "linux" },
//       ],
//       mode: "list",
//       isImportant: false,
//     },
//     ba: {
//       label: "Audio Bitrate",
//       flag: "-b:a",
//       input: "128k",
//       mode: "input",
//       isImportant: false,
//     },
//     ar: 48000,
//     ac: 2,
//     af: "volume=1.0",
//   },
//   subtitle: {
//     cs: "copy",
//   },
//   metadata: {
//     metadataTitle: "output",
//     metadataASV: "language=eng",
//     metadataASA: "language=eng",
//   },
//   output: {
//     movFlags: "+faststart",
//     f: "mp4",
//     output: {
//       label: "Output Video",
//       input: "Output.mp4",
//       mode: "input",
//       isImportant: true,
//     },
//   },
//   default: {
//     label: "Preliminary",
//     flag: "ffmpeg",
//     isImportant: true,
//   },
// };

import mainSchema from "./main-how.json";

const ffmpegRules = mainSchema;

function getName(obj) {
  const result = [];
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      result.push({
        label: key,
        [key]: Object.values(obj[key]),
      });
    }
  }
  return result;
}

export const craftJson = getName(ffmpegRules);

// console.log(result);

// ffmpegRules
