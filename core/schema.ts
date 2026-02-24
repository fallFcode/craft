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
const gotDefault: string[] = [];
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

// console.log(getTemplateObjects(addSomeLabel,getAvailableTemplates(addSomeLabel)[0]))
// getAvailableTemplates(addSomeLabel)


type Section = { label: string; [key: string]: any };
type Rule = { id: number; value?: any; option?: any };
type TmplItem = { label: string; template: Rule[] };

// 1. List Template Available
export function getAvailableTemplates(config: Section[]): string[] {
  const section = config.find(s => s.label === "template");
  if (!section?.template) return [];
  return section.template.map((t: TmplItem) => t.label);
}

export function getTemplateObjects(config: any[], tmplName: string) {
  // Cari section template dulu
  const tmplSection = config.find((s: any) => s.label === "template");
  const tmpl = tmplSection?.template?.find((t: any) => t.label === tmplName);
  
  if (!tmpl) return [];

  return tmpl.template.map((rule: any) => {
    // Loop semua section buat cari ID yang cocok
    for (const section of config) {
      if (section.label === "template") continue; // Skip template section
      
      const list = section[section.label];
      if (Array.isArray(list)) {
        const obj = list.find((item: any) => item.id === rule.id);
        
        if (obj) {
          // Tentukan value baru dari template
          let newVal = rule.value !== undefined ? rule.value : obj.value;
          
          // Kalau pakai option index, ambil value dari options array
          if (rule.option !== undefined && obj.options) {
            newVal = obj.options[rule.option]?.value;
          }
          
          // Return object lengkap + value baru >///<
          return { ...obj, value: newVal };
        }
      }
    }
    return {};
  });
}


export const craftJson = addSomeLabel;

// const tes = getSearch(craftJson, [4, 21]);
