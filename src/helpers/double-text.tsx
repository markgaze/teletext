import * as React from 'react';

export default class DoubleTextGenerator {

  static CreateText(text: string, foreground: string = 'white', background: string = 'black', extraClasses: string = ''): JSX.Element {
    var lines: string[] = this.getLines(text);
    return (
      <div className={`doubleText ${extraClasses}`.trim()}>
        <span className={`${foreground} ${background}bg`}>
          {lines[0]}
        </span>
        <span className={`${foreground} ${background}bg`}>
          {lines[1]}
        </span>
      </div>);
  }

  static getLines(text: string): string[] {
    var lines: string[] = ['', ''];
    for (var i: number = 0; i < text.length; i++) {
      var val = text[i].charCodeAt(0);
      lines[0] += String.fromCharCode(val + 0xE000);
      lines[1] += String.fromCharCode(val + 0xE100);
    }
    return lines;
  }
}