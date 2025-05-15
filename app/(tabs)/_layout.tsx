import { Header } from '@/components/header';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';


export function TabLayout() {
 

  return (
    <>
    <Header image={require("../../assets/images/Rick.jpg")}/>
    <Tabs>
      <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: () => (<Text>◀</Text>)}}></Tabs.Screen>
      <Tabs.Screen name='explore' options={{headerShown: false, tabBarIcon: () => (<Text>▶</Text>)}}></Tabs.Screen>
    </Tabs>
    </>
  );
}
