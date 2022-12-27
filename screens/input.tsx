import { useContext } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Clipboard from 'expo-clipboard';
import { MdContext } from '../components/Context';
import { MdContextType } from '../lib/types';

export default function InputScreen() {
  const mdContext: MdContextType = useContext(MdContext);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(mdContext.mdinput);
  };
  
  return (mdContext &&
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps='handled'
        scrollEnabled={true}
        style={styles.scrollView}
        >
        <TextInput
          mode='outlined'
          label='Markdown Text'
          placeholder='Please Ente Markdown Text'
          value={mdContext.mdinput} 
          onChangeText={text => mdContext.input(text)}
          multiline={true}
          numberOfLines={10}
        />
        <View style={styles.buttonItems}>
          <Button
            mode='contained'
            onPress={() => copyToClipboard()}
          >Copy Markdown</Button>
          <Button
            mode='contained'
            onPress={() => mdContext.clear()}
          >Clear Editor</Button>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingTop: 10,
    paddingHorizontal: 5
  },
  buttonItems: {
    paddingTop: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
});
