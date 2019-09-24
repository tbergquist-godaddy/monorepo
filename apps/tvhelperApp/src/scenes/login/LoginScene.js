// @flow strict

import * as React from 'react';
import { View, StyleSheet, Alert, Keyboard, ActivityIndicator } from 'react-native';
import { TextInput, Text, Button } from '@tbergq/rn-components';
import { LoginMutation } from '@tbergq/tvhelper-xplat';
import { useQueryRendererAction } from '@tbergq/relay';

type Props = {|
  +onLogin: string => void | Promise<void>,
|};

export default function LoginScene(props: Props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { setToken } = useQueryRendererAction();

  const onCompleted = (mutationResponse: $FlowFixMe, error: ?$ReadOnlyArray<Error>) => {
    setIsLoading(false);

    if (error || !mutationResponse.tvHelperLogin?.success) {
      Alert.alert('Wrong username or password');
    } else if (mutationResponse.tvHelperLogin?.success) {
      const token = mutationResponse.tvHelperLogin?.token ?? '';
      setToken(token);
      props.onLogin(token);
    }
  };

  const loginMutation = () => {
    setIsLoading(true);
    LoginMutation(
      {
        username,
        password,
      },
      onCompleted,
    );
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
      />
      <View style={styles.row}>
        <View style={styles.buttonItem} />
        <Button text="Login" onPress={loginMutation} />
      </View>
      {isLoading && <ActivityIndicator />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  input: {
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
  buttonItem: {
    flex: 1,
  },
});
