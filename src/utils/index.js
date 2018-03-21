import convert from 'color-convert';
import cssColorKeywords from 'css-color-keywords';

const validate = (color, type) => {
  switch (type) {
    case 'hex':
      return /^#([0-9a-f]{3}){1,2}$/i.test(color);
    case 'rgb':
      return color.split(',').length == 3
        ? color.split(',').every(n => n.trim() >= 0 && n.trim() < 256)
        : false;
    case 'keyword':
      return !!cssColorKeywords[color];
  }
};

const convertToHex = (color, type) =>
  type === 'hex' ? color : `#${convert[type].hex(color)}`;

export { validate, convertToHex };
