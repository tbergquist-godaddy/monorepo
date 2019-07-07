// @flow strict

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from '@tbergq/rn-components';
import { loginMutation } from '@tbergq/trainingjournal-core';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onLoginPress = React.useCallback(() => {
    loginMutation({ username, password }, res => {
      // eslint-disable-next-line no-console
      console.warn(res);
    });
  }, [password, username]);
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
