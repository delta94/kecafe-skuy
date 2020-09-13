import React from 'react';
import BottomNavigation, {IconTab} from 'react-native-material-bottom-navigation';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import menuIcon from '../../assets/img/menu.png';
import orderIcon from '../../assets/img/order.png';
import userIcon from '../../assets/img/user.png';

export default class Navbar extends React.Component {
  tabs = [
    {
      key: 'all_menu',
      icon: menuIcon,
      label: 'Menu',
      barColor: '#AB84C8',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'last_order',
      icon: orderIcon,
      label: 'Last Order',
      barColor: '#AB84C8',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'profile',
      icon: userIcon,
      label: 'Profile',
      barColor: '#AB84C8',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
  ];

  state = {
    activeTab: 'all_menu',
  };

  renderIcon = (icon) => ({isActive}) => (
    <FastImage style={{height: 24, width: 24, tintColor: 'white'}} color="white" source={icon} />
  );

  renderTab = ({tab, isActive}) => (
    <IconTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  render() {
    return (
      <BottomNavigation
        activeTab={this.state.activeTab}
        onTabPress={(newTab) => this.setState({activeTab: newTab.key})}
        renderTab={this.renderTab}
        tabs={this.tabs}
        useLayoutAnimation={true}
      />
    );
  }
}
