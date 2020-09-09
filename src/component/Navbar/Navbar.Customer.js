import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';

import React from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import menu_icon from '../../assets/img/menu.png';
import order_icon from '../../assets/img/order.png';
import user_icon from '../../assets/img/user.png';

export default class Navbar extends React.Component {
  tabs = [
    {
      key: 'all-menu',
      icon: menu_icon,
      label: 'Menu',
      barColor: '#AB84C8',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'last-order',
      icon: order_icon,
      label: 'Last Order',
      barColor: '#AB84C8',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'profile',
      icon: user_icon,
      label: 'Profile',
      barColor: '#AB84C8',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
  ];

  state = {
    activeTab: 'all-menu',
  };

  renderIcon = (icon) => ({isActive}) => (
    <Image
      style={{height: 24, width: 24, tintColor: 'white'}}
      color="white"
      source={icon}
    />
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
      <View style={{flex: 1, height: 10}}>
        <BottomNavigation
          activeTab={this.state.activeTab}
          onTabPress={(newTab) => this.setState({activeTab: newTab.key})}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    );
  }
}
