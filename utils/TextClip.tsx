const TextClip = (text: string) => {
  const textTransform = text.length > 15 ? text.substring(0, 15) + "..." : text;
  return textTransform;
};

export default TextClip;
