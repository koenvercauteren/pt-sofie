const styles = theme => ({
  titleContainer: {
    height: 590,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    background: 'linear-gradient(45deg, #48B6BF 30%, #4880E2 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 55,
    fontSize: '16px',
    padding: '0 50px',
    margin: '20px auto 0 auto',
  },
  title: {
    paddingTop: '100px',
    color: '#fff',
    textShadow: '1px 1px #525f7f',
    fontWeight: 300,
    fontSize: '40px',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
  },
  background: {
    minHeight: '1100px',
    width: '100% !important',
    height: 'auto !important',
    objectFit: 'cover',
  },
  parallax: {
    overflow: 'visible !important',
  },
});

export default styles;
