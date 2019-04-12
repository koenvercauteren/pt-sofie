const styles = theme => ({
  container: {
    paddingBottom: '150px',
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '1800px',
      webkitTransform: 'skewY(-8deg)',
      transform: 'skewY(-8deg)',
      background: '#fafafa',
    },
  },
  offer: {
    maxWidth: '1040px',
    zIndex: 1,
  },
  title: {
    fontWeight: 600,
    letterSpacing: 10,
    textAlign: 'center',
    marginTop: '150px',
    marginBottom: '50px',
    color: 'rgba(0, 0, 0, 0.75)',
    fontSize: '2rem',
  },
  button: {
    width: '100%',
    height: '45px',
  },
  card: {
    zIndex: 1,
  },
  cardHeadline: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardIcon: {
    color: 'rgba(0, 0, 0, 0.27)',
  },
  gridItem: {
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingBottom: '16px',
  },
  cardBulletList: {
    marginTop: '0.35em',
  },
  cardBulletItem: {
    display: 'flex',
  },
  cardBulletIcon: {
    fill: '#FFD042',
    marginRight: '0.35em',
  },
  pricing: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  normalPrice: {
    color: 'rgba(0, 0, 0, 0.60)',
    textDecoration: 'line-through',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '0.35em',
    [theme.breakpoints.up('sm')]: {
      height: '230px',
    },
    [theme.breakpoints.up('md')]: {
      height: '330px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '260px',
    },
  },
});

export default styles;
