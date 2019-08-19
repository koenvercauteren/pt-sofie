const styles = theme => ({
  container: {
    width: '100%',
    zIndex: 1,
    paddingBottom: '150px',
  },
  reviews: {
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
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      height: '435px',
    },
    [theme.breakpoints.up('lg')]: {
      height: 'auto',
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: '45px',
  },
  card: {
    zIndex: 1,
  },
  cardHeadline: {
    textAlign: 'right',
  },
  image: {
    width: '7rem',
    borderRadius: '50%',
    marginBottom: '25px',
  },
  quoteContainer: {
    width: '100%',
    position: 'relative',
  },
  quoteBefore: {
    transform: 'rotate(180deg)',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  quote: {
    paddingLeft: '26px',
    fontFamily: 'Rock Salt',
  },
  gridItem: {
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingBottom: '16px',
  },
});

export default styles;
