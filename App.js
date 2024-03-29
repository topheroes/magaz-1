import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

//  Это наши компоненты. 
//  Ваш Кэп.
import Cart from "./components/Cart/main.js";
import ItemsListNav from "./components/ItemsList/main.js";
import OrderData from "./components/OrderData/main.js";
import Orders from "./components/Orders/main.js";



const Main = createStackNavigator(
    {
        ItemsListNav: {
            screen: ItemsListNav,
        },
    },
    {
        headerMode: "none",
    },
);
const CartNav = createStackNavigator(
    {
        Cart: {
            screen: Cart,
        },
        OrderData: {
            screen: OrderData,
        },
    },
    {
        headerMode: "none",
    },
);
const OrdersNav = createStackNavigator(
    {
        Orders: {
            screen: Orders,
        },
    },
    {
        headerMode: "none",
    },
);
const MainNavigator = createMaterialTopTabNavigator(
{
    ItemsListNav: {
        screen: Main,
        navigationOptions: {
            title: "Товары",
        },
    },
    Cart: {
        screen: CartNav,
        navigationOptions: {
            title: "Корзина",
        },
    },
    Orders: {
        screen: OrdersNav,
        navigationOptions: {
            title: "Заказы",
        },
    },
},
{
    initialRouteName: 'ItemsListNav',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
});
  
const App = createAppContainer(MainNavigator);
export default App;