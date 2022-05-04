/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './Home';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}

                <View style={styles.body}>

                        <View style={[styles.sectionHeading, {flex: 2}]}>
                        
                                <Text style={styles.sectionTitle}>POSSIBLE PC</Text>
                                <Text style={styles.sectionTitle}>FAULTS AND SOLUTIONS</Text>

                                <Text style={styles.sectionButton}>DISCLAIMER</Text>
                        </View>

                        <View style={[styles.sectionContainer, {flex: 3}]}>
                        
                                <Home />
                               
                        </View>

                </View>
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    height: 700,
  },
  sectionHeading: {
    justifyContent: "center",
    alignItems: "center",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
        fontSize: 28,
        fontWeight: '900',
        color: "blue",
        letterSpacing: 3,
  },
  sectionButton: {
        backgroundColor: '#0000FF',
        fontSize: 28,
        fontWeight: '300',
        color: '#0000FF',
        marginTop: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
