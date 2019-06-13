const getTextArea = (textArea = 'ta') => document.getElementById(textArea);
const createImage = _ => document.createElement('img');
const getImageLetterDiv = (div = 'text') => document.getElementById(div);

const readText = _ => {
  const text = getTextArea().value;
  return writeText(text);
};

const writeText = (text = '') => {
  const image = text;
  getImageLetterDiv().innerHTML = '';

  return image.split('')
    .map(letter => letter.toUpperCase())
    .map(letter => {
      const imageLetter = createImage();
      imageLetter.src = `letters/${returnImageLetter(letter)}`;
      return imageLetter;
    })
    .map(imgLetter => getImageLetterDiv().appendChild(imgLetter));
};

const returnImageLetter = letter => {
  const letters = {
    A: 'uppercase/a.png',
    B: 'uppercase/b.png',
    C: 'uppercase/c.png',
    D: 'uppercase/d.png',
    E: 'uppercase/e.png',
    F: 'uppercase/f.png',
    G: 'uppercase/g.png',
    H: 'uppercase/h.png',
    I: 'uppercase/i.png',
    J: 'uppercase/j.png',
    K: 'uppercase/k.png',
    L: 'uppercase/l.png',
    M: 'uppercase/m.png',
    N: 'uppercase/n.png',
    O: 'uppercase/o.png',
    P: 'uppercase/p.png',
    Q: 'uppercase/q.png',
    R: 'uppercase/r.png',
    S: 'uppercase/s.png',
    T: 'uppercase/t.png',
    U: 'uppercase/u.png',
    V: 'uppercase/v.png',
    W: 'uppercase/w.png',
    X: 'uppercase/x.png',
    Y: 'uppercase/y.png',
    Z: 'uppercase/z.png',
    Á: 'uppercase/aa.png',
    É: 'uppercase/ee.png',
    Í: 'uppercase/ii.png',
    Ó: 'uppercase/oo.png',
    Ú: 'uppercase/uu.png',
    Ñ: 'uppercase/nt.png',
    Ü: 'uppercase/up.png',
    ' ': 'uppercase/sp.png',
    '.': 'uppercase/dot.png',
    ',': 'uppercase/com.png',
    '¡': 'uppercase/iexcl.png',
    '!': 'uppercase/excl.png',
    '?': 'uppercase/quot.png',
    '¿': 'uppercase/iquot.png',
  }
  return letters[letter];
};



document.addEventListener('DOMContentLoaded', _ => {
  document.addEventListener('keyup', readText);
});
