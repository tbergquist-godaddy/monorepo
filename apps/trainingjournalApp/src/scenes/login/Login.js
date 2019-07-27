// @flow strict

import * as React from 'react';
import { View, StyleSheet, AsyncStorage, Alert } from 'react-native';
import { TextInput, Button } from '@tbergq/rn-components';
import { loginMutation, type LoginMutationResponse } from '@tbergq/trainingjournal-core';
import { withNavigation } from 'react-navigation';

type Props = {|
  +navigation: { +navigate: string => void, ... },
|};

function Login(props: Props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { navigate } = props.navigation;

  const onLoginPress = React.useCallback(() => {
    loginMutation({ username, password }, (res: ?LoginMutationResponse) => {
      const token = res?.trainingJournalLogin?.token;
      if (token != null) {
        AsyncStorage.setItem('@tj:token', token);
        navigate('LoggedInStack');
      } else {
        Alert.alert('Login failed');
      }
    });
  }, [navigate, password, username]);

  return (
    <View style={styles.container}>
      <TextInput value={username} onChangeText={setUsername} label="Username" />
      <TextInput
        value={password}
        onChangeText={setPassword}
        label="Password"
        secureTextEntry={true}
      />
      <Button text="Login" onPress={onLoginPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default withNavigation(Login);
