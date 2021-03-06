const styles = theme => ({
  keysToSuccess: {
    maxWidth: '1040px',
    marginTop: '50px',
    [theme.breakpoints.up('lg')]: {
      marginTop: '100px',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '150px',
    },
    zIndex: 1,
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
  },
});

export default styles;
