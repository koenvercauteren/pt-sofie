import approachImage from '../assets/img/multiple-girls-stretching.jpeg';

const styles = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '150px',
    paddingLeft: '130px',
    webkitTransform: 'skewY(8deg)',
    transform: 'skewY(8deg)',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '24px',
      marginTop: '195px',
    },
  },
  footer: {
    fontWeight: '500',
  },
  container: {
    paddingTop: '16px',
    paddingRight: '32px',
    width: '50%',
    color: '#fafafa',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  approachContainer: {
    position: 'relative',
    zIndex: 1,
    webkitTransform: 'skewY(-8deg)',
    transform: 'skewY(-8deg)',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '150px',
      right: 0,
      webkitTransformOrigin: '100% 0',
      transformOrigin: '100% 0',
      width: '50%',
      background: '#4880E2',
      zIndex: '-1',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        height: '450px',
      },
      [theme.breakpoints.up('md')]: {
        height: '400px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '350px',
      },
    },
  },
  approachGridItem: {
    maxWidth: '1040px',
  },
  approachImage: {
    position: 'absolute',
    top: '150px',
    left: 0,
    width: '50%',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      height: '450px',
    },
    [theme.breakpoints.up('md')]: {
      height: '400px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '350px',
    },
    '&:before': {
      width: '100%',
      minHeight: '600px',
      content: '""',
      position: 'absolute',
      webkitTransform: 'skewY(8deg)',
      transform: 'skewY(8deg)',
      webkitTransformOrigin: '100% 0',
      transformOrigin: '100% 0',
      background: `url('${approachImage}') no-repeat`,
      backgroundSize: 'cover',
    },
  },
});

export default styles;
