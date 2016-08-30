const primaryColor = '#dfdfe5';
const accentColor = '#f29038';

const styles: Object = {
  centeredElement: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  centeredText: {
    textAnchor: 'middle',
    dominantBaseline: 'middle',
  },
  temperatureText: {
    fill: primaryColor,
    fontFamily: 'Roboto',
    fontSize: 120,
  },
  conditionText: {
    fill: primaryColor,
    fontFamily: 'weathericons',
    fontSize: 100,
  },
  headerFooterText: {
    fill: accentColor,
    fontFamily: 'Roboto',
    fontSize: 36,
    fontWeight: 300,
  },
  headerFooterTextLight: {
    fill: accentColor,
    fontFamily: 'Roboto',
    fontSize: 36,
    fontWeight: 100,
  },
  detailsText: {
    fill: primaryColor,
    fontFamily: 'Roboto',
    fontSize: 20,
  },
  detailsTextLight: {
    fill: primaryColor,
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 100,
  },
  separatorText: {
    fill: accentColor,
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 100,
  },
  horizontalLine: {
    stroke: accentColor,
    strokeWidth: 2,
    vectorEffect: 'non-scaling-stroke',
  },
  verticalLine: {
    stroke: accentColor,
    strokeWidth: 1,
    vectorEffect: 'non-scaling-stroke',
    opacity: 0.6,
  },
  gridLine: {
    stroke: accentColor,
    strokeWidth: 1,
    vectorEffect: 'non-scaling-stroke',
    opacity: 0.15,
  },
  gridContainer: {
    fill: 'url("#gridFill")',
  },
  svgContainer: {
    width: '75%',
    height: '75%',
    maxWidth: 500,
  },
};

export default styles;
