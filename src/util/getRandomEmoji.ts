import { emojis } from "./types";
export function getRandomEmoji(): emojis {
  const emojis: string[] = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😜",
    "🤪",
    "😝",
    "🤑",
    "🤗",
    "🤭",
    "🤫",
    "🤔",
    "🤐",
    "🤨",
    "😐",
    "😑",
    "😶",
    "😏",
    "😒",
    "🙄",
    "😬",
    "😮",
    "😯",
    "😰",
    "😱",
    "😳",
    "🥺",
    "😖",
    "😞",
    "😟",
    "😠",
    "😡",
    "🤯",
    "😢",
    "😭",
    "😤",
    "😩",
    "😫",
    "😨",
    "😱",
    "😤",
    "😴",
    "💤",
    "😪",
    "🥴",
    "😵",
    "🤐",
    "🥳",
    "🥺",
    "🤬",
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤮",
    "🤧",
    "🤠",
    "🤡",
    "🥶",
    "🥵",
    "🥱",
    "🤫",
    "👿",
    "💀",
    "👻",
    "👽",
    "🤖",
    "💩",
    "🙊",
    "🙉",
    "🙈",
    "👶",
    "👮",
    "💂",
    "🍕",
    "🍔",
    "🌮",
    "🌯",
    "🍿",
    "🍩",
    "🍪",
    "🍫",
    "🍬",
    "🍭",
    "🍮",
    "🍦",
    "🥧",
    "🍣",
  ];

  const randomIndex: number = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex] as emojis;
}
