// Method return a random number from 0 to 255
const setBg = () => {
  const red = Math.floor((Math.random() * 256) / 2);
  const green = Math.floor((Math.random() * 256) / 2);
  const blue = Math.floor((Math.random() * 256) / 2);
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
};

export { setBg };
