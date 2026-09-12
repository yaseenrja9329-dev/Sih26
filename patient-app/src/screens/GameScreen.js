import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

// 6 different pairs
const cardPairs = [
  "🍎",
  "🌸",
  "⭐",
  "🍌",
  "🏠",
  "🐱",
];

// Shuffle cards
function createShuffledCards() {
  let shuffled;

  do {
    shuffled = [...cardPairs, ...cardPairs];

    // Fisher-Yates Shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [
        shuffled[j],
        shuffled[i],
      ];
    }

  // Same objects ko starting mein side-by-side nahi aane dena
  } while (
    shuffled.some(
      (card, index) =>
        index > 0 && card === shuffled[index - 1]
    )
  );

  return shuffled;
}

export default function GameScreen({ navigation }) {

  const [cards, setCards] = useState(
    createShuffledCards()
  );

  const [opened, setOpened] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(60);

  // Timer
  useEffect(() => {

    if (
      time <= 0 ||
      matched.length === cards.length
    ) {
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [time, matched.length, cards.length]);


  // Card click
  const handleCardPress = (index) => {

    if (
      opened.includes(index) ||
      matched.includes(index) ||
      opened.length === 2 ||
      time <= 0
    ) {
      return;
    }

    const newOpened = [...opened, index];

    setOpened(newOpened);

    // Two cards selected
    if (newOpened.length === 2) {

      setMoves((prev) => prev + 1);

      const first = newOpened[0];
      const second = newOpened[1];

      // Matching pair
      if (cards[first] === cards[second]) {

        setTimeout(() => {

          setMatched((prev) => [
            ...prev,
            first,
            second,
          ]);

          setOpened([]);

        }, 300);

      }

      // Wrong pair
      else {

        setTimeout(() => {
          setOpened([]);
        }, 900);

      }
    }
  };


  // New game
  const resetGame = () => {

    setCards(createShuffledCards());

    setOpened([]);

    setMatched([]);

    setMoves(0);

    setTime(60);
  };


  const gameComplete =
    matched.length === cards.length;

  const gameOver =
    time === 0 && !gameComplete;


  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>
            ←
          </Text>
        </TouchableOpacity>


        <Text style={styles.headerTitle}>
          Memory Match
        </Text>


        <View style={styles.stats}>

          <Text style={styles.statsText}>
            ⏱️ {time}s
          </Text>

          <Text style={styles.statsText}>
            Moves: {moves}
          </Text>

        </View>

      </View>


      {/* INSTRUCTION */}

      <Text style={styles.instruction}>
        Find all matching pairs
      </Text>


      <Text style={styles.difficulty}>
        🧠 Level 2 • 6 Pairs
      </Text>


      {/* PROGRESS */}

      <View style={styles.progressBox}>

        <Text style={styles.progressText}>
          Pairs found: {matched.length / 2} / 6
        </Text>

      </View>


      {/* CARD GRID */}

      <View style={styles.grid}>

        {cards.map((card, index) => {

          const visible =
            opened.includes(index) ||
            matched.includes(index);

          return (

            <TouchableOpacity
              key={index}
              style={[
                styles.card,

                matched.includes(index) &&
                  styles.matchedCard,
              ]}
              onPress={() =>
                handleCardPress(index)
              }
              activeOpacity={0.7}
            >

              <Text style={styles.cardText}>
                {visible ? card : "❓"}
              </Text>

            </TouchableOpacity>

          );

        })}

      </View>


      {/* SUCCESS */}

      {gameComplete && (

        <View style={styles.resultBox}>

          <Text style={styles.resultTitle}>
            🎉 Excellent!
          </Text>

          <Text style={styles.resultText}>
            You found all 6 pairs!
          </Text>

          <Text style={styles.resultStats}>
            Moves: {moves} • Time left: {time}s
          </Text>

          <TouchableOpacity
            style={styles.playAgain}
            onPress={resetGame}
          >

            <Text style={styles.playAgainText}>
              Play Again
            </Text>

          </TouchableOpacity>

        </View>

      )}


      {/* TIME OVER */}

      {gameOver && (

        <View style={styles.resultBox}>

          <Text style={styles.resultTitle}>
            ⏰ Time's Up!
          </Text>

          <Text style={styles.resultText}>
            You found {matched.length / 2} of 6 pairs.
          </Text>

          <TouchableOpacity
            style={styles.playAgain}
            onPress={resetGame}
          >

            <Text style={styles.playAgainText}>
              Try Again
            </Text>

          </TouchableOpacity>

        </View>

      )}


      {/* VOICE GUIDANCE */}

      <TouchableOpacity
        style={styles.voiceButton}
      >

        <Text style={styles.voiceIcon}>
          🔊
        </Text>

        <Text style={styles.voiceText}>
          Find the same pictures
        </Text>

      </TouchableOpacity>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingHorizontal: 18,
  },


  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },


  backButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },


  backText: {
    fontSize: 28,
  },


  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E293B",
  },


  stats: {
    alignItems: "flex-end",
  },


  statsText: {
    fontSize: 13,
    color: "#475569",
    marginVertical: 2,
  },


  instruction: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 25,
    fontWeight: "600",
    color: "#1E293B",
  },


  difficulty: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 8,
    color: "#4F46E5",
    fontWeight: "bold",
  },


  progressBox: {
    alignSelf: "center",
    backgroundColor: "white",
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 15,
    marginTop: 12,
    elevation: 2,
  },


  progressText: {
    fontSize: 15,
    color: "#475569",
    fontWeight: "600",
  },


  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 22,
  },


  card: {
    width: 105,
    height: 105,
    backgroundColor: "white",
    borderRadius: 18,
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },


  matchedCard: {
    opacity: 0.55,
  },


  cardText: {
    fontSize: 42,
  },


  resultBox: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 18,
    alignItems: "center",
    marginTop: 15,
    elevation: 4,
  },


  resultTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E293B",
  },


  resultText: {
    fontSize: 17,
    color: "#475569",
    marginTop: 5,
  },


  resultStats: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 6,
  },


  playAgain: {
    backgroundColor: "#4F46E5",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 14,
    marginTop: 12,
  },


  playAgainText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },


  voiceButton: {
    alignItems: "center",
    marginTop: 12,
  },


  voiceIcon: {
    fontSize: 25,
  },


  voiceText: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 3,
  },

});