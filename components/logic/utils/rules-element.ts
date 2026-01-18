export const rulesElement = {
  INPUT: (event) => {
    const getType = event.currentTarget.type;
    if (getType === "number") {
      console.log("Helloo");
    } else if (getType === "checkbox") {
      console.log(event.currentTarget.checked);
    }
  },
  BUTTON: (event, active) => {
    console.log(event);
  },
};
