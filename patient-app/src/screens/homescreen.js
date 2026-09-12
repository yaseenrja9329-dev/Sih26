import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning 👋</Text>
          <Text style={styles.name}>Ramesh</Text>
        </View>

        <TouchableOpacity style={styles.voiceButton}>
          <Text style={styles.voiceIcon}>🔊</Text>
        </TouchableOpacity>
      </View>

      {/* Main Game Button */}
      <TouchableOpacity
        style={styles.gameButton}
        onPress={() => navigation.navigate("GameSelection")}
      >
        <Text style={styles.gameIcon}>🧠</Text>

        <View>
          <Text style={styles.gameTitle}>PLAY A GAME</Text>
          <Text style={styles.gameSubtitle}>
            Exercise your memory
          </Text>
        </View>
      </TouchableOpacity>

      {/* Two Small Buttons */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.smallCard}>
          <Text style={styles.cardIcon}>💊</Text>
          <Text style={styles.cardTitle}>Reminders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallCard}>
          <Text style={styles.cardIcon}>🔔</Text>
          <Text style={styles.cardTitle}>Alerts</Text>
        </TouchableOpacity>
      </View>

      {/* Today's Activity */}
      <Text style={styles.sectionTitle}>Today's Activity</Text>

      <View style={styles.activityCard}>
        <View>
          <Text style={styles.activityTitle}>🧠 Memory Game</Text>
          <Text style={styles.activitySubtitle}>Memory exercise</Text>
        </View>

        <Text style={styles.done}>✓ Done</Text>
      </View>

      <View style={styles.activityCard}>
        <View>
          <Text style={styles.activityTitle}>🔷 Pattern Game</Text>
          <Text style={styles.activitySubtitle}>Find the pattern</Text>
        </View>

        <Text style={styles.start}>Start</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("GameSelection")}
        >
            <Text style={styles.navIcon}>🎮</Text>
            <Text style={styles.navText}>Games</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },

  greeting: {
    fontSize: 20,
    color: "#555",
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 4,
  },

  voiceButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#E0E7FF",
    justifyContent: "center",
    alignItems: "center",
  },

  voiceIcon: {
    fontSize: 28,
  },

  gameButton: {
    backgroundColor: "#4F46E5",
    borderRadius: 22,
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  gameIcon: {
    fontSize: 45,
    marginRight: 18,
  },

  gameTitle: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
  },

  gameSubtitle: {
    color: "white",
    fontSize: 16,
    marginTop: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  smallCard: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    elevation: 3,
  },

  cardIcon: {
    fontSize: 35,
    marginBottom: 8,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E293B",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 28,
    marginBottom: 12,
  },

  activityCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 18,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },

  activityTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1E293B",
  },

  activitySubtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },

  done: {
    fontSize: 16,
    fontWeight: "bold",
  },

  start: {
    fontSize: 16,
    fontWeight: "bold",
  },

  bottomNav: {
    position: "absolute",
    bottom: 15,
    left: 20,
    right: 20,
    height: 75,
    backgroundColor: "white",
    borderRadius: 22,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 5,
  },

  navItem: {
    alignItems: "center",
  },

  navIcon: {
    fontSize: 25,
  },

  navText: {
    fontSize: 13,
    marginTop: 3,
    color: "#475569",
  },
});