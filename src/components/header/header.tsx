import * as React from 'react';
import './header.css';

export default class Header extends React.Component<HeaderProps, HeaderState> {
  private readonly dayOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  private readonly monthName: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  private intervalId: NodeJS.Timer;

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      pageNumber: props.pageNumber,
      date: '',
      time: ''
    };
    this.intervalId = setInterval(() => this.updateClock(), 1000);
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
      pageNumber: this.props.pageNumber,
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

interface HeaderState {
  date: string;
  time: string;
  pageNumber: string;
}

interface HeaderProps {
  pageNumber: string;
}