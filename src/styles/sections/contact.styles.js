const styles = theme => ({
  container: {
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: '150px',
    background: '#fafafa',
    zIndex: 1,
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
    letterSpacing: 10,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '30px',
    color: 'rgba(0, 0, 0, 0.75)',
    fontSize: '2rem',
  },
  body: {
    textAlign: 'center',
  },
  button: {
    width: '300px',
    height: 55,
    fontSize: '16px',
    padding: '0 50px',
  },
  callButton: {
    background: '#48B667',
    '&:hover': {
      background: '#48B667',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyCsontent: 'center',
    alignItems: 'center',
  },
  textField: {
    width: '300px',
  },
  lastTextfield: {
    marginBottom: 32,
  },
  card: {
    width: '400px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  content: {
    paddingTop: '50px !important',
    paddingBottom: '50px !important',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

export default styles;
