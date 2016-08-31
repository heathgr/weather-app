import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { TimelineLite } from 'gsap';
import fecha from 'fecha';
import currentComponentHid from '../actions/currentComponentHid';
import weatherIconCharCodes from '../constants/weatherIconCharCodes';
import styles from '../constants/styles';

class Weather extends Component {

  componentWillEnter(callback) {
    const masterTimeline = new TimelineLite({ onComplete: callback });
    const verticalTimeline = new TimelineLite();
    const horizontalTimeline = new TimelineLite();
    const contentTimeline = new TimelineLite();
    const fadeInTime = 0.001;
    const colorTime = 0.2;
    const offset = '-=0.1';

    verticalTimeline
      .from('.vertical1', fadeInTime, { opacity: 0 })
      .from('.vertical1', colorTime, { stroke: '#fff' })
      .from('.vertical3', fadeInTime, { opacity: 0 }, offset)
      .from('.vertical3', colorTime, { stroke: '#fff' })
      .from('.vertical2', fadeInTime, { opacity: 0 }, offset)
      .from('.vertical2', colorTime, { stroke: '#fff' });

    horizontalTimeline
      .from('.horizontal1', fadeInTime, { opacity: 0 })
      .from('.horizontal1', colorTime, { stroke: '#fff' })
      .from('.horizontal4', fadeInTime, { opacity: 0 }, offset)
      .from('.horizontal4', colorTime, { stroke: '#fff' })
      .from('.horizontal2', fadeInTime, { opacity: 0 }, offset)
      .from('.horizontal2', colorTime, { stroke: '#fff' })
      .from('.horizontal3', fadeInTime, { opacity: 0 }, offset)
      .from('.horizontal3', colorTime, { stroke: '#fff' });

    contentTimeline
      .from('.geolocation', fadeInTime, { opacity: 0 }, offset)
      .from('.geolocation', colorTime, { fill: 'white' })
      .from('.timeStamp', fadeInTime, { opacity: 0 }, offset)
      .from('.timeStamp', colorTime, { fill: 'white' })
      .from('.weatherCondition', fadeInTime, { opacity: 0 }, offset)
      .from('.weatherCondition', colorTime, { fill: 'white' })
      .from('.tempurature', fadeInTime, { opacity: 0 }, offset)
      .from('.tempurature', colorTime, { fill: 'white' });

    masterTimeline
      .from('.grid', 1.5, { opacity: 0 }, offset)
      .add(horizontalTimeline, 0.1)
      .add(verticalTimeline, 0.1)
      .add(contentTimeline, 0.1);
  }

  componentWillLeave(callback) {
    const masterTimeline = new TimelineLite({
      onComplete: () => {
        this.props.dispatch(currentComponentHid());
        callback();
      },
    });
    const verticalTimeline = new TimelineLite();
    const horizontalTimeline = new TimelineLite();
    const contentTimeline = new TimelineLite();
    const fadeOutTime = 0.2;
    const offset = '-=0.1';

    verticalTimeline
      .to('.vertical1', fadeOutTime, { opacity: 0 })
      .to('.vertical3', fadeOutTime, { opacity: 0 }, offset)
      .to('.vertical2', fadeOutTime, { opacity: 0 }, offset);

    horizontalTimeline
      .to('.horizontal1', fadeOutTime, { opacity: 0 })
      .to('.horizontal4', fadeOutTime, { opacity: 0 }, offset)
      .to('.horizontal2', fadeOutTime, { opacity: 0 }, offset)
      .to('.horizontal3', fadeOutTime, { opacity: 0 }, offset);

    contentTimeline
      .to('.geolocation', fadeOutTime, { opacity: 0 }, offset)
      .to('.timeStamp', fadeOutTime, { opacity: 0 }, offset)
      .to('.weatherCondition', fadeOutTime, { opacity: 0 }, offset)
      .to('.tempurature', fadeOutTime, { opacity: 0 }, offset);

    masterTimeline
      .to('.grid', 0.2, { opacity: 0 })
      .add(horizontalTimeline, 0.1)
      .add(verticalTimeline, 0.1)
      .add(contentTimeline, 0.1);
  }

  render() {
    const iconCharacter = String.fromCharCode(weatherIconCharCodes[this.props.weatherData.icon]);
    const dateString = fecha.format(
      this.props.weatherData.timestamp * 1000,
      'ddd MMM D, YYYY hh:mm A'
    );
    const splitDate = dateString.split(/(([0-9]\w:[0-9]\w (AM|PM)))/g);

    return (
      <g>
        <rect className="grid" style={styles.gridContainer} x={0} y={0} width={800} height={500} />
        <line
          className="horizontal1"
          style={styles.horizontalLine}
          x1={0}
          y1={1}
          x2={800}
          y2={1}
        />
        <line
          className="horizontal2"
          style={styles.horizontalLine}
          x1={0}
          y1={100}
          x2={800}
          y2={100}
        />
        <line
          className="horizontal3"
          style={styles.horizontalLine}
          x1={0}
          y1={400}
          x2={800}
          y2={400}
        />
        <line
          className="horizontal4"
          style={styles.horizontalLine}
          x1={0}
          y1={499}
          x2={800}
          y2={499}
        />
        <line
          className="vertical1"
          style={styles.verticalLine}
          x1={1}
          y1={20}
          x2={1}
          y2={80}
        />
        <line
          className="vertical1"
          style={styles.verticalLine}
          x1={1}
          y1={120}
          x2={1}
          y2={380}
        />
        <line
          className="vertical1"
          style={styles.verticalLine}
          x1={1}
          y1={420}
          x2={1}
          y2={480}
        />
        <line
          className="vertical2"
          style={styles.verticalLine}
          x1={400}
          y1={120}
          x2={400}
          y2={380}
        />
        <line
          className="vertical3"
          style={styles.verticalLine}
          x1={799}
          y1={20}
          x2={799}
          y2={80}
        />
        <line
          className="vertical3"
          style={styles.verticalLine}
          x1={799}
          y1={120}
          x2={799}
          y2={380}
        />
        <line
          className="vertical3"
          style={styles.verticalLine}
          x1={799}
          y1={420}
          x2={799}
          y2={480}
        />
        <text x={400} y={50}>
          <tspan className="geolocation" style={[styles.centeredText, styles.headerFooterText]}>
            {`${this.props.locationData.city}, `}
          </tspan>
          <tspan
            className="geolocation"
            style={[styles.centeredText, styles.headerFooterTextLight]}
          >
            {this.props.locationData.region}
          </tspan>
        </text>
        <text
          className="tempurature"
          style={[styles.centeredText, styles.temperatureText]}
          x={600}
          y={250}
        >
          {`${Math.round(this.props.weatherData.currentTemp)}ºF`}
        </text>
        <text
          className="weatherCondition"
          style={[styles.centeredText, styles.conditionText]}
          x={200}
          y={240}
        >
          {`${iconCharacter}`}
        </text>
        <text
          className="weatherCondition"
          style={[styles.centeredText, styles.detailsTextLight]}
          x={200}
          y={300}
        >
          {`${this.props.weatherData.condition}`}
        </text>
        <text style={styles.centeredText} x={400} y={450}>
          <tspan className="timeStamp" style={[styles.centeredText, styles.headerFooterTextLight]}>
            {splitDate[0]}
          </tspan>
          <tspan className="timeStamp" style={[styles.centeredText, styles.headerFooterText]}>
            {splitDate[1]}
          </tspan>
        </text>
      </g>
    );
  }
}

Weather.propTypes = {
  dispatch: PropTypes.func.isRequired,
  weatherData: PropTypes.object.isRequired,
  locationData: PropTypes.object.isRequired,
};

export default Radium(Weather);
