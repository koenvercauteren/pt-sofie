const styles = theme => ({
  offer: {
    maxWidth: '1040px',
    zIndex: 1,
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
    [theme.breakpoints.down('xs')]: {
      height: '215px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '315px',
    },
    [theme.breakpoints.up('md')]: {
      height: '280px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '220px',
    },
  },
});

export default styles;