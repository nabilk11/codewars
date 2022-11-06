// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript - 8 kyu

const areYouPlayingBanjo = (name) => {
  const lower = name.toLowerCase();
  return lower[0] === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
};
