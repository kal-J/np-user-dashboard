import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {
  FaExchangeAlt,
  FaCreditCard,
  FaUsers,
  FaHandshake,
  FaRegArrowAltCircleRight,
  FaUserPlus,
  FaShoppingBag,
  FaRegMoneyBillAlt,
  FaRedo,
  FaFileInvoiceDollar,
  FaCog
} from 'react-icons/fa';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Navbar from './NavBar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <Divider />

      <List>
        <ListItem button>
          <ListItemIcon>
            <FaExchangeAlt />
          </ListItemIcon>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to='/transactions'>
            <ListItemText primary="Transactions" />
          </Link>
          
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FaUsers />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FaHandshake />
          </ListItemIcon>
          <ListItemText primary="Balance" />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button>
          <ListItemIcon>
            <FaRegArrowAltCircleRight />
          </ListItemIcon>
          <ListItemText primary="Transfers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FaUserPlus />
          </ListItemIcon>
          <ListItemText primary="Subaccounts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FaCreditCard />
          </ListItemIcon>
          <ListItemText primary="Cards" />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <FaShoppingBag />
          </ListItemIcon>
          <ListItemText primary="Store" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FaRegMoneyBillAlt />
          </ListItemIcon>
          <ListItemText primary="Payment Links" />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <FaRedo />
          </ListItemIcon>
          <ListItemText primary="Payment Plans" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FaFileInvoiceDollar />
          </ListItemIcon>
          <ListItemText primary="Invoices" />
        </ListItem>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <FaCog />
          </ListItemIcon>
          <ListItemText primary="settings" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Navbar />
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
