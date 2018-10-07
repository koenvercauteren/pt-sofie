const styles = theme => ({
  keysToSuccess: {
    maxWidth: '1040px',
    zIndex: 1,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      width: '100%',
      height: '1400px',
      webkitTransform: 'skewY(-8deg)',
      transform: 'skewY(-8deg)',
      background: '#fafafa',
      zIndex: -1,
    },
  },
  title: {
    textAlign: 'center',
    marginTop: '150px',
    marginBottom: '50px',
    color: 'rgba(0, 0, 0, 0.75)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
  },
  card: {
    zIndex: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    borderBottom: '3px solid #48B6BF',
  },
  gridItem: {
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingBottom: '16px',
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      height: '180px',
    },
    [theme.breakpoints.up('md')]: {
      height: '150px',
    },
    // [theme.breakpoints.up('lg')]: {
    //   height: '250px',
    // },
  },
});

export default styles;
