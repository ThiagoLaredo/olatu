export default class ConsoleTextEffect {
  constructor(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    this.visible = true;
    this.con = document.getElementById('console');
    this.letterCount = 1;
    this.x = 1;
    this.waiting = false;
    this.target = document.getElementById(id);
    this.colors = colors;
    this.words = words;

    this.target.setAttribute('style', 'color:' + this.colors[0]);

    window.setInterval(() => {
      this.updateText();
    }, 120);

    window.setInterval(() => {
      this.toggleUnderscore();
    }, 400);
  }

  updateText() {
    if (this.letterCount === 0 && !this.waiting) {
      this.waiting = true;
      this.target.innerHTML = this.words[0].substring(0, this.letterCount);

      window.setTimeout(() => {
        const usedColor = this.colors.shift();
        this.colors.push(usedColor);
        const usedWord = this.words.shift();
        this.words.push(usedWord);
        this.x = 1;
        this.target.setAttribute('style', 'color:' + this.colors[0]);
        this.letterCount += this.x;
        this.waiting = false;
      }, 1000);
    } else if (this.letterCount === this.words[0].length + 1 && !this.waiting) {
      this.waiting = true;

      window.setTimeout(() => {
        this.x = -1;
        this.letterCount += this.x;
        this.waiting = false;
      }, 1000);
    } else if (!this.waiting) {
      this.target.innerHTML = this.words[0].substring(0, this.letterCount);
      this.letterCount += this.x;
    }
  }

  toggleUnderscore() {
    if (this.visible === true) {
      this.con.className = 'console-underscore hidden';
      this.visible = false;
    } else {
      this.con.className = 'console-underscore';
      this.visible = true;
    }
  }
}


