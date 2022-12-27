import { useState, useEffect, useContext } from 'react';
import { useWindowDimensions, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import RenderHtml from 'react-native-render-html';
import { remark } from 'remark';
import html from 'remark-html';
import { MdContext } from '../components/Context';
import { MdContextType } from '../lib/types';

export default function DisplayScreen() {
  const mdContext: MdContextType = useContext(MdContext);
  const [htmlStr, setHtmlStr] = useState('');

  useEffect(() => {
    async function convertMDtoHTML(md: string) {
      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
        .use(html)
        .process(md);
      
        setHtmlStr(processedContent.toString());
    }
    if (mdContext){
      convertMDtoHTML(mdContext.mdinput);
    }
  },[mdContext]);
  
  const { width } = useWindowDimensions();
  return (mdContext &&
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <RenderHtml
          contentWidth={width}
          source={{html: htmlStr}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingTop: 5,
    paddingHorizontal: 5
  },
});
