import approachImage from '../../assets/img/multiple-girls-stretching.jpeg';

const styles = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingLeft: '130px',
    webkitTransform: 'skewY(8deg)',
    transform: 'skewY(8deg)',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '24px',
      marginTop: '50px',
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
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
  },
  approachContainer: {
    [theme.breakpoints.down('sm')]: {
      height: '600px',
    },
    [theme.breakpoints.up('md')]: {
      height: '500px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '450px',
    },
    marginTop: '150px',
    position: 'relative',
    zIndex: 1,
    webkitTransform: 'skewY(-8deg)',
    transform: 'skewY(-8deg)',
    '&:before': {
      content: '""',
      position: 'absolute',
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
        height: '600px',
      },
      [theme.breakpoints.up('md')]: {
        height: '500px',
      },
      [theme.breakpoints.up('lg')]: {
        height: '450px',
      },
    },
  },
  approachGridItem: {
    maxWidth: '1040px',
  },
  approachImage: {
    position: 'absolute',
    left: 0,
    width: '50%',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      height: '600px',
    },
    [theme.breakpoints.up('md')]: {
      height: '500px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '450px',
    },
    '&:before': {
      width: '100%',
      minHeight: '700px',
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
