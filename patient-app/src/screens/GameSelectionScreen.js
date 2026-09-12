import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function GameSelectionScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Choose a Game
          </Text>

          <View style={styles.emptySpace} />

        </View>

        <Text style={styles.intro}>
          🧠 Let's exercise your mind!
        </Text>


        {/* MEMORY MATCH */}
        <View style={styles.gameCard}>

          <Text style={styles.gameIcon}>
            🧩
          </Text>

          <Text style={styles.gameTitle}>
            MEMORY MATCH
          </Text>

          <Text style={styles.gameDescription}>
            Find matching pairs
          </Text>

          <TouchableOpacity
            style={styles.playButton}
            onPress={() => navigation.navigate("Game")}
          >
            <Text style={styles.playText}>
              ▶ PLAY
            </Text>
          </TouchableOpacity>

        </View>


        {/* DAILY ROUTINE RECALL */}
        <View style={styles.gameCard}>

          <Text style={styles.gameIcon}>
            📅
          </Text>

          <Text style={styles.gameTitle}>
            DAILY ROUTINE RECALL
          </Text>

          <Text style={styles.gameDescription}>
            Remember your daily tasks
          </Text>

          <TouchableOpacity
            style={styles.playButton}
            onPress={() => navigation.navigate("DailyRoutine")}
          >
            <Text style={styles.playText}>
              ▶ PLAY
            </Text>
          </TouchableOpacity>

        </View>


        {/* PATTERN RECOGNITION */}
        <View style={styles.gameCard}>

          <Text style={styles.gameIcon}>
            🔷
          </Text>

          <Text style={styles.gameTitle}>
            PATTERN RECOGNITION
          </Text>

          <Text style={styles.gameDescription}>
            Find what comes next
          </Text>

          <TouchableOpacity
            style={styles.playButton}
          >
            <Text style={styles.playText}>
              ▶ PLAY
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 20,
  },

  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  backText: {
    fontSize: 30,
    color: "#1E293B",
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1E293B",
  },

  emptySpace: {
    width: 50,
  },

  intro: {
    fontSize: 20,
    color: "#475569",
    marginBottom: 20,
    textAlign: "center",
  },

  gameCard: {
    backgroundColor: "white",
    borderRadius: 22,
    padding: 24,
    marginBottom: 18,
    alignItems: "center",
    elevation: 4,
  },

  gameIcon: {
    fontSize: 55,
    marginBottom: 12,
  },

  gameTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#1E293B",
    textAlign: "center",
  },

  gameDescription: {
    fontSize: 17,
    color: "#64748B",
    marginTop: 8,
    marginBottom: 18,
    textAlign: "center",
  },

  playButton: {
    backgroundColor: "#4F46E5",
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 35,
  },

  playText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

});