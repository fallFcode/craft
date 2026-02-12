export const rulesElement = {
  INPUT: ({ event, active, setSelect, item }) => {
    const getType = event.currentTarget.type;
    const { getFlag, getId, getLabel } = getObject(item);

    const logicNumber = getType === "number" || getType === "text";

    const objectSchema = {
      id: getId,
      flag: getFlag,
      value: logicNumber ? event.currentTarget.value : "",
      label: getLabel,
    };

    if (getType === "text" || getType === "number") {
      const active = event.currentTarget.value !== "";

      const setPack = { active, setSelect, getLabel, objectSchema };
      console.log(item);
      setSelectInput(setPack);
    } else if (getType === "checkbox") {
      const active = event.currentTarget.checked;

      const setPack = { active, setSelect, getLabel, objectSchema };
      setSelectInput(setPack);
    }
  },
  BUTTON: ({ event, active, setSelect, item }) => {
    const getValue = event.currentTarget.value;

    const { getFlag, getId, getLabel } = getObject(item);

    console.log(active);

    if (active) {
      setSelect(getLabel, {
        id: getId,
        flag: getFlag,
        value: getValue,
        label: getLabel,
      });
      return;
    }

    setSelect(
      getLabel,
      {
        id: getId,
        flag: getFlag,
        value: getValue,
        label: getLabel,
      },
      true,
    );
  },
};

function getObject(item) {
  const getLabel = item.label;
  const getFlag = item.flag;
  const getId = item.id;

  return { getLabel, getFlag, getId };
}

function setSelectInput(setPack) {
  const { active, setSelect, getLabel, objectSchema } = setPack;
  if (active) {
    setSelect(getLabel, objectSchema);
  } else {
    setSelect(getLabel, objectSchema, true);
  }
  return;
}
