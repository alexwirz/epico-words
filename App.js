import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

function chooseWord() {
  let words = ["agil", "adäquat", "adipös", "akkurat", "akribisch", "akzidentell", "ambivalent", "antizipieren", "arkadisch", "artifiziell", "autark", "autonom", "balladesk", "bilateral", "blamabel", "blümerant", "changieren", "cum laude", "d’ac­cord", "deplorabel", "designiert", "despektierlich", "devot", "diabolisch", "diametral", "effizient", "eloquent", "epistemisch", "evident", "exorbitant", "extrinsisch", "extrovertiert", "falsifizieren", "flanieren", "fakultativ", "idiomatisch", "immens", "implizieren", "imponieren", "intrigant", "irisieren", "jovial", "konkludent", "konsekutiv", "konspirativ", "konvertieren", "korrespondieren", "kreieren", "lakonisch", "lamentieren", "larmoyant", "makaber", "metaphorisch", "morbid(e)", "notorisch", "Nudist", "obligatorisch", "obsolet", "omnipräsent", "opportunistisch", "palavern", "per annum", "pittoresk", "populär", "prekär", "prokrastinieren", "prophylaktisch", "provisorisch", "redigieren", "reüssieren", "schwadronieren", "subtil", "sukzessiv", "supprimieren", "stalken", "tranchieren", "ubiquitär", "verifizieren", "vestibulär", "xenophob", "zappen"];
  return words[Math.floor(Math.random()*words.length)];
}

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [word, setWord] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setWord(chooseWord());
    wait(500).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        
        <Text style={styles.word}>What's up slappers!!!</Text>
        <Text style={styles.word}>Slap down for EPIC word reveal!!!</Text>
        <Text style={styles.word}>{word}</Text>
        <Text style={styles.reveal}>Secret word reveal at 5M downloads!!!</Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  word: {
    color: "#52E99E"
  },
  reveal: {
    color: "#fc0303"
  },
});
