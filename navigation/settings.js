import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { navigationRef } from '../entry/frontScreen';
import profileStyles from '../styles/profileStyles';
import common from "../styles/commonStyles";

import useStore from '../store';

const { fonts } = common;

const Settings = () => {
  const { userSlice } = useStore();

  const logOut = userSlice.resetUser;

  return (
    <SafeAreaView style={profileStyles.logOutWrapper}>
      <Button
        onPress={() => {
          logOut();
          navigationRef.current?.reset({
            index: 0,
            routes: [{ name: 'FrontPage' }], // Provide the name of the initial screen
          });
        }}
        title="Log Out"
        style={profileStyles.logOutButton}
        titleStyle={{
          color: "white",
          fontSize: 20,
          fontFamily: fonts.semiBold,
        }}
        buttonStyle={{
          backgroundColor: "#708C80",
        }}
      />
    </SafeAreaView>
  );
};

export default Settings;
