import mainSchema from "./main-how.json";

const ffmpegRules = mainSchema;

const findOnlyImportantOrders = (obj): number[] => {
  let results = [];

  for (const key in obj) {
    if (obj[key] && typeof obj[key] === "object") {
      if (obj[key].isImportant === true && obj[key].order !== undefined) {
        results.push(obj[key].order);
      }

      results = results.concat(findOnlyImportantOrders(obj[key]));
    }
  }

  return results;
};

const getImportantOrder = findOnlyImportantOrders(ffmpegRules);

let order = 0;
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
          incrementOrder();
        } else {
          // console.log(result)
          gotDefault.push(obj[key]);
        }

        function incrementOrder() {
          if (getImportantOrder.includes(order)) {
            order++;
            incrementOrder();
          } else {
            obj[key]["order"] = order;
            order++;
          }
        }
      }
    }
  }


  return result;
}

const addSomeLabel = getName(ffmpegRules);
addSomeLabel[addSomeLabel.length - 1].default.push(...gotDefault);
export const craftJson = addSomeLabel;

const tes = getSearch(craftJson, [4, 21]);
console.log(tes);

function getSearch(arr, targetOrders) {
  let results = [];

  for (const key in arr) {
    const item = arr[key];
    const dataArray = item[item.label];

    if (Array.isArray(dataArray)) {
      const match = dataArray.filter(
        (obj) => obj && targetOrders.includes(obj.order),
      );
      results = [...results, ...match];
    }
  }
  
  return results;
}
