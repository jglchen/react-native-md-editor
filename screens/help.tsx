import { WebView } from 'react-native-webview';
import { StyleSheet, SafeAreaView } from 'react-native';

export default function HelpScreen() {
  return (
    <SafeAreaView style={styles.container}>  
      <WebView 
        source={{ uri: 'https://www.markdownguide.org/basic-syntax/' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 3
  },
});
