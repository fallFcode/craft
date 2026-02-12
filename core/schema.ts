import { ffmpegGlobal } from "./part/global";
import { inputOption } from "./part/inputOption";
import { video } from "./part/video";

import mainSchema from "./main-how.json";

const ffmpegRules = mainSchema;

const findOnlyImportantIds = (obj): number[] => {
  let results = [];

  for (const key in obj) {
    if (obj[key] && typeof obj[key] === "object") {
      // Cek apakah punya isImportant true DAN punya properti id
      if (obj[key].isImportant === true && obj[key].id !== undefined) {
        results.push(obj[key].id);
      }
      // Telusuri lebih dalam ke anak objeknya
      results = results.concat(findOnlyImportantIds(obj[key]));
    }
  }

  return results;
};

const getImportantId = findOnlyImportantIds(ffmpegRules);

let id = 0;
const gotDefault = [];
function getName(obj, setLabel = true) {
  const result = [];
  for (const key in obj) {
    if (typeof obj[key] === "object" && setLabel) {
      result.push({
        label: key,
        [key]: Object.values(obj[key]),
      });
    }

    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      getName(obj[key], false);
      if (obj[key]["label"] !== undefined) {
        if (obj[key]["isImportant"] !== true) {
          incrementId();
        } else {
          // console.log(result)
          gotDefault.push(obj[key]);
        }

        function incrementId() {
          if (getImportantId.includes(id)) {
            id++;
            incrementId();
          } else {
            obj[key]["id"] = id;
            id++;
          }
        }
      }
    }
  }

  // console.log(gotDefault)

  return result;
}
// const getImporatant = getImportantPaths(ffmpegRules)

const addSomeLabel = getName(ffmpegRules);
addSomeLabel[addSomeLabel.length - 1].default.push(...gotDefault);
export const craftJson = addSomeLabel;
// console.log(craftJson[8]);

// function getImportantPaths(obj, currentPath = "") {
//   let paths = [];

//   for (const key in obj) {
//     const newPath = currentPath ? `${currentPath}.${key}` : key;

//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       if (obj[key].isImportant === true) {
//         paths.push(newPath);
//       }
//       paths = paths.concat(getImportantPaths(obj[key], newPath));
//     }
//   }

//   return paths;
// }

// Cara pakainya gampang banget:

// console.log(path)
// console.log(pathImportant);

// const result = [];
// function searchIsImportant(obj) {}

// console.log(craftJson[0]);
// console.log(result);

// ffmpegRules
