export const gryffindorColors = "linear-gradient(90deg, rgba(127,9,9,1) 27%, rgba(255,197,0,1) 61%)";
export const hufflepuffColors = "linear-gradient(90deg, rgba(238,225,23,1) 35%, rgba(0,0,0,1) 93%)";
export const slytherinColors = "linear-gradient(90deg, rgba(13,98,23,1) 32%, rgba(170,170,170,1) 69%)";
export const ravenclawColors = "linear-gradient(90deg, rgba(0,10,144,1) 32%, rgba(148,107,45,1) 69%)";

export const houseEmoji = `🏡`;
export const spellsEmoji = `💫`;
export const wandEmoji = `💫`;
export const patronusEmoji = `✨`;
export const deathEaterEmoji = `🐍`;
export const dumbledoresArmyEmoji = `⚔️`;
export const roleEmoji = `📖`;
export const bloodStatusEmoji = `🧙🏾‍♀️ 🤵🏾`;
export const orderOfThePheonixEmoji = `🦄`;
export const ministryOfMagicEmoji = `📜`;
export const boggartEmoji = `🕯`;
export const aliasEmoji = `👨🏼‍🎤`;
export const wizardEmoji = `🧙🏼‍♂️`;
export const gryffindorEmoji = `🦁`;
export const hufflepuffEmoji = `🦡`;
export const slytherinEmoji = `🐍`;
export const ravenclawEmoji = `🦅`;

export function checkNull(value) {
  return value !== null ? value : "unknown";
}
export function checkDeathEater(value) {
  if (value === false) {
    return "no";
  }
  return "undoubtedly";
}
export function checkDumbledoresArmy(value) {
  if (value === false) {
    return "no";
  }
  return `undoubtedly ${wizardEmoji}`;
}