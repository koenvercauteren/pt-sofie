const styles = theme => ({
  container: {
    position: 'relative',
    zIndex: 1,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      width: '100%',
      height: '750px',
      webkitTransform: 'skewY(-8deg)',
      transform: 'skewY(-8deg)',
      background: '#fafafa',
      zIndex: -1,
    },
  },
  contact: {
    marginTop: '150px',
    maxWidth: '1040px',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: 'rgba(0, 0, 0, 0.75)',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
  },
  body: {
    textAlign: 'center',
  },
  button: {
    width: '250px',
    height: 55,
    fontSize: '16px',
    padding: '0 50px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyCsontent: 'center',
    alignItems: 'center',
  },
  textField: {
    width: '250px',
  },
  card: {
    width: '500px',
  },
  content: {
    paddingTop: '100px !important',
    paddingBottom: '100px !important',
  },
});

export default styles;
