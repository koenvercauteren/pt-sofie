import gplaypattern from '../../assets/img/gplaypattern.png';

const styles = () => ({
  container: {
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      right: 0,
      backgroundImage: `url(${gplaypattern})`,
      backgroundRepeat: 'repeat',
      width: '100%',
      height: '800px',
      zIndex: 1,
    },
  },
  location: {
    maxWidth: '1040px',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    letterSpacing: 10,
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '150px',
    marginBottom: '50px',
    color: 'rgba(0, 0, 0, 0.75)',
    fontSize: '2rem',
  },
  bodyContainer: {
    display: 'flex',
    marginBottom: '150px',
  },
  body: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
    '&:first-child': {
        textAlign: 'right',
        marginRight: 15
    }
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
});

export default styles;
