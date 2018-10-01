const styles = theme => ({
  container: {
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      right: 0,
      top: '75px',
      backgroundColor: '#fff',
      width: '100%',
      height: '600px',
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
    textAlign: 'center',
    marginTop: '150px',
    marginBottom: '50px',
    color: 'rgba(0, 0, 0, 0.75)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
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
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

export default styles;
