/* eslint-disable */
// Generated by gulp svg-icon - do not modify manually

import Radium from 'radium';
import Component from '../PureRenderComponent.react';
import React from 'react';
import RPT from 'prop-types';

const iconList = [
  'arrow',
  'chevron-left',
  'chevron-right',
  'close',
  'code',
  'colorpicker',
  'copy',
  'error',
  'eye',
  'eye-hidden',
  'menu',
  'overview',
  'search',
  'settings',
]


class Icon extends Component {

  static propTypes = {
    color: RPT.string,
    height: RPT.number,
    kind: RPT.oneOf([
      'arrow',
      'chevron-left',
      'chevron-right',
      'close',
      'code',
      'colorpicker',
      'copy',
      'error',
      'eye',
      'eye-hidden',
      'menu',
      'overview',
      'search',
      'settings',
    ]).isRequired,
    onClick: RPT.func,
    preview: RPT.bool,
    size: RPT.number,
    style: RPT.oneOfType([
      RPT.array,
      RPT.object
    ]),
    width: RPT.number,
    wrapperStyle: RPT.oneOfType([
      RPT.array,
      RPT.object
    ])
  };

  static defaultProps = {
    color: '#000',
    size: 32
  }

  render() {
    const {kind, preview} = this.props

    return preview ?
      this.renderPreview() :
      this.renderIcon(kind)
  }

  renderPreview() {
    return (
      <div>
        {iconList.map(kind => this.renderPreviewKind(kind))}
      </div>
    )
  }

  renderIcon(kind) {
    const {wrapperStyle} = this.props;

    if (wrapperStyle)
      return <div style={wrapperStyle}>{this.getIcon(kind)}</div>

    return this.getIcon(kind)
  }

  renderPreviewKind(kind) {
    return (
      <div key={kind}>
        <h3>&lt;Icon kind="{kind}" /&gt;</h3>
        {this.renderIcon(kind)}
      </div>
    )
  }

  getIcon(kind) {
    const {color, height, onClick, size, style, width} = this.props;

    switch (kind) {
      default: return null;
      case ('arrow'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M610-109.8L362 165.8 114-109.8h496z"/></svg>);
      case ('chevron-left'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="0, 0, 9, 12"><path d="M7.9 1.4L6.5 0l-6 6 6 6 1.4-1.4L3.3 6l4.6-4.6z"/></svg>);
      case ('chevron-right'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="0, 0, 9, 12"><path d="M.5 10.6L1.9 12l6-6-6-6L.5 1.4 5.1 6 .5 10.6z"/></svg>);
      case ('close'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M426.9 28L600 201.1 535.1 266 362 92.9 188.9 266 124 201.1 297.1 28 124-145.1l64.9-64.9L362-36.9 535.1-210l64.9 64.9L426.9 28z"/></svg>);
      case ('code'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M268.5 134.6l-147.6-88V-2.1l147.5-87.4v57.3L165.6 21.7l102.9 56v56.9zm55.8 36.2h-30.7L391.5-115h30.9l-98.1 285.8zm131.2-36.2V77.7l102.7-55.6-102.7-55.2v-56.5L603-2.1v48.4l-147.5 88.3z"/></svg>);
      case ('colorpicker'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M574.8-184.8c-22.9-22.9-59.9-22.9-82.8 0l-69 69-19-19c-10-10-26.2-10-36.3 0-10 10-10 26.2 0 36.3l19 19-212.1 212.1c-10.4 10.4-16.1 23.8-17 37.4-.4 5.6-1.8 15.9-3.4 27-.3 1.8-1.1 3.6-2.5 5l-15.9 15.9c-5.1 5.1-5.1 13.3 0 18.4l17.9 17.9c5.1 5.1 13.3 5.1 18.4 0l15.9-15.9c1.4-1.4 3.2-2.2 5-2.5 11.2-1.7 21.5-3.1 27.1-3.4 13.6-.9 27-6.6 37.4-17L469.6 3.2l19 19c10 10 26.2 10 36.3 0 10-10 10-26.2 0-36.3l-63.2-63.2 49.6 38.7 63.6-63.6c22.8-22.7 22.8-59.8-.1-82.6zM438.9-9.1L334 95.9c-5.1 5.1-13.3 5.1-18.4 0l-16.7-16.7c-5.1-5.1-13.3-5.1-18.4 0l-3.1 3.1-75.3 75.3c-1.7 1.7-4.2 2-5.5.7-1.3-1.3-1-3.8.7-5.5L319.1 30.9 399-49c5.1-5.1 13.3-5.1 18.4 0l21.5 21.5c5.1 5.1 5.1 13.4 0 18.4z"/></svg>);
      case ('copy'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M581.4 181.5h-87.7V247l-109.6-98.5L493.7 50v65.8h87.7v65.7zM384 71.8H230.4c-12.2 0-21.9 9.9-21.9 21.9 0 12.2 9.9 21.9 21.9 21.9h122.7l-34.8 32.6 12 11.3h-100c-12.2 0-21.9 9.9-21.9 21.9 0 12.2 9.9 21.9 21.9 21.9H377l70.1 65.8H164.5c-12.2 0-21.9-10.1-21.9-22v-368.6c0-11.9 9.7-21.5 21.9-21.5h53.8v41.2c0 19.5 15.7 34.8 35.6 34.8H361c19.8 0 36.1-15.4 36.1-34.8V-143h53.2c12.2 0 21.5 9.6 21.5 21.5V4.6l-76 71.2c-3.5-2.3-7.4-4-11.8-4zm21.9-65.7c0-12.2-9.9-21.9-21.9-21.9H230.4c-12.2 0-21.9 9.9-21.9 21.9 0 12.2 9.9 21.9 21.9 21.9H384c12-.1 21.9-9.9 21.9-21.9zm-44.7-93.7h-107c-8.1 0-14.7-6.4-14.7-14.3v-60.2c0-7.9 6.5-14.3 14.7-14.3h15.5c.1-20.2 16.9-36.6 37.6-36.6s37.5 16.4 37.6 36.6H361c8.1 0 14.7 6.4 14.7 14.3v60.2c.1 7.7-6.4 14.3-14.5 14.3zm-53.7-105.2c-9.2 0-16.6 7.3-16.8 16.3h33.7c-.3-9-7.7-16.3-16.9-16.3z"/></svg>);
      case ('error'): return (<svg version="1" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.9 13.5l-1.4 1.4-3.5-3.5-3.5 3.5-1.4-1.4 3.5-3.5-3.5-3.5 1.4-1.4 3.5 3.5 3.5-3.5 1.4 1.4-3.5 3.5 3.5 3.5z"/></svg>);
      case ('eye'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="0 0 512 512"><path d="M256.598 401.331c-100.737 0-192.297-69.299-249.788-153.566 58.011-81.315 149.558-137.096 249.788-137.096 100.441 0 192.294 54.81 248.593 136.58-53.382 88.965-144.763 154.082-248.593 154.082M59.555 248.467c48.125 59.44 119.186 110.52 197.044 110.52 106.058 0 174.706-79.477 197.19-110.058-47.83-56.273-118.205-95.916-197.19-95.916-102.597-.001-172.52 67.528-197.044 95.454m199.239-76.379c-46.344 0-83.912 37.568-83.912 83.911 0 46.344 37.569 83.911 83.912 83.911 46.344 0 83.913-37.567 83.913-83.911 0-46.343-37.569-83.911-83.913-83.911m-.077 83.883c-11.845 11.844-31.047 11.844-42.892 0-11.845-11.845-11.845-31.049 0-42.893 11.845-11.845 31.047-11.845 42.892 0 11.846 11.845 11.846 31.049 0 42.893"/></svg>);
      case ('eye-hidden'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="0 0 512 512"><path d="M88.443 336.543l38.4-23.817c-25.379-18.308-48.149-40.619-67.288-64.259 24.524-27.926 94.447-95.454 197.044-95.454 33.79 0 66.001 7.26 95.548 19.969l42.392-26.293c-41.833-22.926-88.859-36.019-137.94-36.019-100.23 0-191.777 55.78-249.788 137.096 22.491 32.967 50.2 63.644 81.632 88.777z"/><path d="M258.717 213.079a30.174 30.174 0 0 1 7.705 13.072l50.065-31.052c-15.04-14.252-35.338-23.011-57.693-23.011-46.344 0-83.912 37.568-83.912 83.911a83.864 83.864 0 0 0 3.685 24.645l38.252-23.727c-.336-.308-.669-.62-.995-.945-11.845-11.845-11.845-31.049 0-42.893 11.846-11.845 31.048-11.845 42.893 0zM431.536 170.509l-39.02 24.202c23.014 15.057 43.671 33.509 61.272 54.218-22.484 30.581-91.133 110.058-197.19 110.058-32.112 0-63.066-8.695-91.733-23.076l-41.079 25.479c40.563 24.771 85.683 39.941 132.812 39.941 103.83 0 195.211-65.117 248.593-154.082-20.336-29.536-45.312-55.552-73.655-76.74z"/><path d="M258.794 339.91c46.344 0 83.913-37.567 83.913-83.911a83.735 83.735 0 0 0-4.64-27.516L198.932 314.78c15.226 15.504 36.416 25.13 59.862 25.13zM503.548 104.562l-1.884-3.038c-2.511-4.049-6.976-6.466-11.94-6.466-2.849 0-5.66.81-8.132 2.342L13.677 387.622c-3.395 2.105-5.803 5.338-6.782 9.102-.97 3.728-.417 7.532 1.557 10.712l1.884 3.039c2.512 4.05 6.977 6.468 11.943 6.468h.001c2.847 0 5.657-.81 8.127-2.342l467.917-290.224c6.974-4.327 9.317-13.216 5.224-19.815z"/></svg>);
      case ('menu'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="0, 0, 18, 12"><path d="M0 12h18v-2H0v2zm0-5h18V5H0v2zm0-7v2h18V0H0z"/></svg>);
      case ('overview'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M130-204h193.3v193.3H130V-204zm0 464h193.3V66.6H130V260zm270.7 0H594V66.6H400.7V260zm0-464v193.3H594V-204H400.7z"/></svg>);
      case ('search'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M585.6 200.6l-96.4-96.4C512.4 70.7 524 33.2 524-8.1c0-26.8-5.2-52.5-15.6-76.9-10.4-24.4-24.4-45.6-42.3-63.3-17.7-17.7-38.8-31.8-63.3-42.1-24.3-10.4-50-15.6-76.8-15.6-26.8 0-52.5 5.2-76.9 15.6-24.4 10.3-45.6 24.4-63.3 42.1s-31.7 38.8-42.1 63.3c-10.4 24.4-15.6 50.1-15.6 76.9s5.2 52.5 15.6 76.9c10.4 24.4 24.4 45.6 42.1 63.3s38.8 31.7 63.3 42.1c24.4 10.4 50.1 15.6 76.9 15.6 41.2 0 78.6-11.7 112.2-34.9l96.4 96.2c6.8 7.1 15.1 10.7 25.3 10.7 9.7 0 18.2-3.6 25.3-10.7 7.1-7.1 10.7-15.6 10.7-25.3.1-9.7-3.4-18.2-10.3-25.2zM415.1 81c-24.7 24.7-54.3 37-88.9 37s-64.4-12.4-88.9-37c-24.7-24.7-37-54.3-37-88.9s12.4-64.4 37-88.9c24.7-24.7 54.3-37 88.9-37s64.4 12.4 88.9 37c24.7 24.7 37 54.3 37 88.9-.2 34.6-12.5 64.3-37 88.9z"/></svg>);
      case ('settings'): return (<svg xmlns="http://www.w3.org/2000/svg" fill={color} height={height || size} width={width || size} onClick={onClick} style={style} viewBox="106 -228 512 512"><path d="M542.2-29.2l-2.3-.8-9.1-21.1 1-2.2c27.7-60.7 25.7-62.5 21.1-66.9L516-155c-1.5-1.5-4.1-2.4-6.4-2.4-2.1 0-8.4 0-62.7 23.8l-2.2 1-22.4-8.7-.8-2.2C395.8-205 393.2-205 386.8-205h-51.9c-6.3 0-9.2 0-32.9 61.5l-.8 2.3-22.3 8.9-2.2-.8c-36.8-15-58.2-22.7-63.8-22.7-2.3 0-5 1-6.4 2.4l-36.9 34.9c-4.6 4.5-6.6 6.3 22.4 65.8l1.1 2.2-9.2 21.1-2.2.8c-64.8 24.3-64.8 26.7-64.8 33v49.4c0 6.3 0 9 64.9 31.5l2.3.8 9.2 21-1 2.1c-27.5 60.7-25.8 62.4-21.1 66.9l36.8 34.8c1.6 1.5 4.2 2.4 6.4 2.4 2.1 0 8.4 0 62.7-23.8l2.2-1 22.4 8.9.8 2.2c25.6 61.4 28.1 61.4 34.6 61.4H389c6.6 0 9.2 0 32.9-61.5l1-2.3 22.3-8.7 2.1.8c36.8 15 58.2 22.7 63.8 22.7 2.3 0 5-1 6.4-2.4l36.9-34.9c4.6-4.5 6.6-6.3-22.6-65.6l-1.1-2.2 9.1-21 2.2-.8c65-24.5 65-26.9 65-33.2V2.5c.1-6.5.1-9.2-64.8-31.7zM362 108.1c-46.5 0-84.2-35.9-84.2-80.1s37.9-80.1 84.2-80.1 84.2 35.9 84.2 80.1-37.8 80.1-84.2 80.1z"/></svg>);
      }
  }
}


export default Radium(Icon)
