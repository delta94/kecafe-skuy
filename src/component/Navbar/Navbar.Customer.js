import React from 'react';
import BottomNavigation, {FullTab} from 'react-native-material-bottom-navigation';
import {Text, View, Image} from 'react-native';
import menuIcon from '../../assets/img/menu.png';
import orderIcon from '../../assets/img/order.png';
import userIcon from '../../assets/img/user.png';

export default class Navbar extends React.Component {
  tabs = [
    {
      key: 'all-menu',
      icon: menuIcon,
      label: 'Menu',
      barColor: '#AB84C8',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'last-order',
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
    activeTab: 'all-menu',
  };

  renderIcon = (icon) => ({isActive}) => (
    <Image style={{height: 24, width: 24, tintColor: 'white'}} color="white" source={icon} />
  );

  renderTab = ({tab, isActive}) => (
    <FullTab
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
        style={{borderTopWidth: 0, elevation: 8}}
      />
    );
  }
}
