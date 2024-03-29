import nasmImage from '../../assets/img/nasm-certified-logo.png';

const styles = theme => ({
  container: {
    position: 'relative',
    width: '100%',
    zIndex: 1,
    paddingBottom: '150px',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        webkitTransform: 'skewY(-8deg)',
        transform: 'skewY(-8deg)',
        background: '#fff',
        zIndex: -1,
      },
  },
  sofie: {
    maxWidth: '1040px',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 600,
    letterSpacing: 10,
    textAlign: 'center',
    marginTop: '150px',
    color: 'rgba(0, 0, 0, 0.75)',
    marginBottom: '50px',
    fontSize: '2rem',
  },
  body: {
    textAlign: 'center',
  },
  button: {
    height: 55,
    fontSize: '16px',
    padding: '0 50px',
    marginTop: '20px',
    marginBottom: '150px',
    background: '#fe7000',
    '&:hover': {
      background: '#fe7000',
    },
  },
  image: {
    borderRadius: '50%',
    border: '3px solid #48B6BF',
    // marginLeft: '16px',
    [theme.breakpoints.down('xs')]: {
      width: '175px',
      height: '175px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '300px',
      height: '300px',
    },
  },
  nasm: {
    position: 'absolute',
    width: '55px',
    height: '55px',
    border: '3px solid #013E70',
    borderRadius: '50%',
    background: `url('${nasmImage}') center center no-repeat`,
    backgroundColor: '#fff',
    [theme.breakpoints.down('xs')]: {
      bottom: 0,
      right: 0,
    },
    [theme.breakpoints.up('sm')]: {
      bottom: '15px',
      right: '15px',
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right',
  },
  imageContainer: {
    position: 'relative',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

export default styles;
