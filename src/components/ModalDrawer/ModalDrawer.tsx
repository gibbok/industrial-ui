import { Divider } from '../Divider';
import { Scrim } from '../Scrim';
import { theme } from '../../theme';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import Transition from 'react-transition-group/Transition';
import { compose, setDisplayName } from 'recompose';
import { Header } from './Header';
import { List, ListItem } from './List';

type CompProps = Readonly<{
  open: boolean;
  headerMain: React.ReactNode;
  headerIcon?: React.ReactNode;
  listMain: ReadonlyArray<ListItem>;
  listSub: ReadonlyArray<ListItem>;
  handleClose: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const ANIMATION_DURATION = 150;
const DRAWER_WIDTH = 500;

const defaultStyle = {
  transition: `transform ${ANIMATION_DURATION}ms`,
  transform: `translateX(-${DRAWER_WIDTH}px)`
};

const transitionStyles = {
  entering: {
    transform: `translateX(-${DRAWER_WIDTH}px)`
  },
  entered: {
    transform: 'none'
  }
};

const ModalDrawerComp = ({
  classes,
  open,
  listMain,
  listSub,
  headerMain,
  headerIcon,
  handleClose
}: Props) => (
  <div
    className={classes.root}
    style={{
      pointerEvents: !open ? 'none' : 'auto'
    }}
  >
    <Scrim open={open} onClose={handleClose} />
    <Transition in={open} timeout={ANIMATION_DURATION}>
      {state => (
        <div
          className={classes.drawer}
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          <Header main={headerMain} icon={headerIcon} />
          <List items={listMain} handleClose={handleClose} />
          <div className={classes.listSub}>
            <Divider />
            <List items={listSub} handleClose={handleClose} />
          </div>
        </div>
      )}
    </Transition>
  </div>
);

type ClassKey = 'root' | 'drawer' | 'listSub';

const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: theme.zIndex.modalDrawer
  },
  drawer: {
    position: 'absolute',
    width: DRAWER_WIDTH,
    height: '100%',
    overflow: 'auto',
    backgroundColor: theme.palette.common.white
  },
  listSub: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
};

export const ModalDrawer = compose<Props, CompProps>(
  setDisplayName('ModalDrawer'),
  injectSheet(styles)
)(ModalDrawerComp);