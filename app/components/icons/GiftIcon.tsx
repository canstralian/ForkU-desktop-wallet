import * as React from 'react';

import { IconProps } from './IconProps';

function GiftIcon(props: IconProps): JSX.Element {
  const { color } = props;

  return (
    <svg viewBox="0 0 30 15" fill="none" {...props}>
      <path
        d="M26.932 0H6.251c-.973 0-1.859.534-2.312 1.394a.91.91 0 001.608.848.793.793 0 01.704-.424h1.022v2.884c-.41.145-.775.386-1.068.696a7.76 7.76 0 00-.756-.607c-.382-.27-1.706-1.155-2.721-1.155-.485 0-1.378.204-1.906 1.568-.23.593-.367 1.366-.367 2.069 0 .702.137 1.475.367 2.068.528 1.364 1.42 1.568 1.906 1.568 1.015 0 2.34-.884 2.72-1.155.249-.176.51-.38.757-.606.293.31.658.55 1.068.696v8.338H6.251a.796.796 0 01-.796-.796v-4.659a.91.91 0 00-1.818 0v4.66A2.617 2.617 0 006.25 20h20.681a2.617 2.617 0 002.614-2.614V2.614A2.617 2.617 0 0026.932 0zM4.27 8.36c-.727.492-1.328.711-1.52.73-.198-.15-.477-.95-.477-1.817 0-.868.279-1.667.477-1.817.192.018.793.237 1.52.73.72.488 1.07.905 1.167 1.087-.096.181-.447.598-1.167 1.086zm22.662-6.542c.439 0 .796.357.796.796v3.75H15.839a5.559 5.559 0 00-.296-1.16c-.528-1.364-1.42-1.568-1.906-1.568-1.016 0-2.34.884-2.721 1.155-.248.176-.51.38-.756.607a2.733 2.733 0 00-1.069-.696V1.818h17.841zm-12.84 5.455c0 .867-.28 1.666-.477 1.817-.193-.019-.793-.238-1.52-.73-.72-.489-1.071-.906-1.167-1.087.096-.182.447-.599 1.167-1.087.727-.493 1.328-.712 1.52-.73.198.15.476.95.476 1.817zm-5.91-.91a.91.91 0 010 1.819.91.91 0 010-1.818zm18.75 11.819H9.092V9.844c.41-.146.775-.387 1.068-.696.246.226.508.43.756.606.381.271 1.705 1.155 2.72 1.155.486 0 1.379-.204 1.907-1.568.133-.342.234-.745.296-1.16h11.889v9.205a.796.796 0 01-.796.796z"
        fill={color}
      />
    </svg>
  );
}

GiftIcon.defaultProps = {
  color: '#ADB0BB',
  height: 20,
  width: 30,
};

export default GiftIcon;