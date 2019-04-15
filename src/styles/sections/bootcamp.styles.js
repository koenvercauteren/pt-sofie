import bootcampImage from '../../assets/img/group-session-girls.jpg';

const styles = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    textAlign: 'right',
    paddingRight: '130px',
    webkitTransform: 'skewY(8deg)',
    transform: 'skewY(8deg)',
    [theme.breakpoints.down('xs')]: {
      paddingRight: '24px',
    },
  },
  container: {
    paddingTop: '16px',
    paddingLeft: '32px',
    width: '50%',
    color: '#fafafa',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  title: {
    fontWeight: 600,
    letterSpacing: 10,
    fontSize: '2rem',
  },
  pricing: {
    fontSize: 13,
    fontWeight: 500,
    textTransform: 'uppercase',
  },
  button: {
    background: '#48B6BF',
    transition: 'all .3s',
    '&:hover': {
      background: '#fff',
      color: '#48B6BF !important',
    },
  },
  bootcampContainer: {
    [theme.breakpoints.down('sm')]: {
      height: '600px',
    },
    [theme.breakpoints.up('md')]: {
      height: '500px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '450px',
    },
    position: 'relative',
    zIndex: 1,
    webkitTransform: 'skewY(-8deg)',
    transform: 'skewY(-8deg)',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      webkitTransformOrigin: '100% 0',
      transformOrigin: '100% 0',
      width: '100%',
      background: 'linear-gradient(90deg, #4880E2 50%, transparent)',
      [theme.breakpoints.down('xs')]: {
        background: '#4880E2',
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
  bootcampGridItem: {
    maxWidth: '1040px',
    display: 'flex',
    alignItems: 'center',
  },
  bootcampImage: {
    position: 'absolute',
    right: 0,
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
      transformOrigin: '100% 0%',
      background: `url('${bootcampImage}') no-repeat`,
      backgroundPosition: 'center top',
      backgroundSize: 'cover',
      zIndex: '-1',
    },
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

export default styles;
