import * as React from 'react';
import './header.css';
import HeaderState from './header-state';

export default class Header extends React.Component<{}, HeaderState> {
  dayOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthName: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  intervalId: NodeJS.Timer;

  constructor(props: {}) {
    super(props);
    this.state = {
      pageNumber: 303,
      date: '',
      time: ''
    };
  }

  render() {
    return (
      <div className="header">
          <span className="white">P{this.state.pageNumber}</span>
          <span className="white">CEEFAX 1</span>
          <span className="white">{this.state.pageNumber}</span>
          <span className="white">{this.state.date}</span>
          <span className="yellow">{this.state.time}</span>
      </div>
    );
  }

  componentDidMount() {
    this.updateClock();
    this.intervalId = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  addLeadingSpace(num: number) {
    return `${(num < 10 ? ' ' : '')}${num}`; 
  }

  addLeadingZero(num: number) {
    return `${(num < 10 ? '0' : '')}${num}`; 
  }

  updateClock() {
    var d = new Date();
    var state: HeaderState = {
      pageNumber: 303,
      date: this.GetDateString(d),
      time: this.GetTimeString(d)
    };
    this.setState(state);
  }

  private GetTimeString(d: Date): string {
    return `${this.addLeadingZero(d.getHours())}:${this.addLeadingZero(d.getMinutes())}/${this.addLeadingZero(d.getSeconds())}`;
  }

  private GetDateString(d: Date): string {
    return `${this.dayOfWeek[d.getDay()]} ${this.addLeadingSpace(d.getDate())} ${this.monthName[d.getMonth()]}`;
  }
}
