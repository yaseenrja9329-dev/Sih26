import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const routines = [
  { icon: "🌅", name: "Wake Up" },
  { icon: "🪥", name: "Brush Teeth" },
  { icon: "🥣", name: "Breakfast" },
  { icon: "💊", name: "Medicine" },
  { icon: "🚶", name: "Morning Walk" },
  { icon: "📖", name: "Read Newspaper" },
];

const questions = [
  {
    question: "What came after Breakfast?",
    options: ["Medicine", "Morning Walk", "Brush Teeth"],
    answer: "Medicine",
  },
  {
    question: "What came before Morning Walk?",
    options: ["Breakfast", "Medicine", "Read Newspaper"],
    answer: "Medicine",
  },
  {
    question: "What was the first activity?",
    options: ["Breakfast", "Wake Up", "Brush Teeth"],
    answer: "Wake Up",
  },
  {
    question: "What was the last activity?",
    options: ["Morning Walk", "Read Newspaper", "Medicine"],
    answer: "Read Newspaper",
  },
  {
    question: "What came after Medicine?",
    options: ["Breakfast", "Morning Walk", "Wake Up"],
    answer: "Morning Walk",
  },
];

export default function DailyRoutineGameScreen({ navigation }) {
  const [showRoutine, setShowRoutine] = useState(true);
  const [timeLeft, setTimeLeft] = useState(10);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [nextLevel, setNextLevel] = useState(2);

  useEffect(() => {
    if (!showRoutine) return;

    if (timeLeft === 0) {
      setShowRoutine(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, showRoutine]);

  const handleAnswer = (answer) => {
    if (selected !== null) return;

    setSelected(answer);

    if (answer === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
  const finalScore =
    answer === questions[currentQuestion].answer
      ? score + 1
      : score;

  if (finalScore >= 4) {
    setNextLevel(3);
  } else if (finalScore >= 2) {
    setNextLevel(2);
  } else {
    setNextLevel(1);
  }

  setGameFinished(true);
} else {
        setCurrentQuestion((prev) => prev + 1);
        setSelected(null);
      }
    }, 900);
  };

  const startGame = () => {
    setShowRoutine(false);
  };

  const resetGame = () => {
    setShowRoutine(true);
    setTimeLeft(10);
    setCurrentQuestion(0);
    setSelected(null);
    setScore(0);
    setGameFinished(false);
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Daily Routine
        </Text>

        <Text style={styles.level}>
          LEVEL 2
        </Text>
      </View>

      {showRoutine && (
        <View style={styles.content}>

          <Text style={styles.mainTitle}>
            🧠 Remember Carefully
          </Text>

          <Text style={styles.instruction}>
            You have only 10 seconds to remember the routine.
          </Text>

          <View style={styles.timerBox}>
            <Text style={styles.timerText}>
              ⏱ {timeLeft}s
            </Text>
          </View>

          <View style={styles.routineBox}>

            {routines.map((item, index) => (
              <View key={index} style={styles.routineItem}>

                <View style={styles.numberCircle}>
                  <Text style={styles.number}>
                    {index + 1}
                  </Text>
                </View>

                <Text style={styles.routineIcon}>
                  {item.icon}
                </Text>

                <Text style={styles.routineName}>
                  {item.name}
                </Text>

              </View>
            ))}

          </View>

          <TouchableOpacity
            style={styles.startButton}
            onPress={startGame}
          >
            <Text style={styles.startText}>
              I'm Ready ✓
            </Text>
          </TouchableOpacity>

        </View>
      )}

      {!showRoutine && !gameFinished && (
        <View style={styles.content}>

          <Text style={styles.progress}>
            Question {currentQuestion + 1} / {questions.length}
          </Text>

          <Text style={styles.mainTitle}>
            🤔 Remember?
          </Text>

          <Text style={styles.instruction}>
            {questions[currentQuestion].question}
          </Text>

          <View style={styles.answers}>

            {questions[currentQuestion].options.map(
              (option, index) => {

                const isSelected = selected === option;

                const isCorrect =
                  selected !== null &&
                  option === questions[currentQuestion].answer;

                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.answerCard,

                      isSelected &&
                        (option === questions[currentQuestion].answer
                          ? styles.correctCard
                          : styles.wrongCard),

                      isCorrect && styles.correctCard,
                    ]}
                    onPress={() => handleAnswer(option)}
                  >

                    <Text style={styles.optionNumber}>
                      {String.fromCharCode(65 + index)}
                    </Text>

                    <Text style={styles.answerText}>
                      {option}
                    </Text>

                  </TouchableOpacity>
                );
              }
            )}

          </View>

          <Text style={styles.scoreText}>
            ⭐ Score: {score}
          </Text>

        </View>
      )}

      {gameFinished && (
        <View style={styles.content}>

          <Text style={styles.resultEmoji}>
            {score >= 4 ? "🏆" : score >= 3 ? "🎉" : "👏"}
          </Text>

          <Text style={styles.resultTitle}>
            {score >= 4
              ? "Excellent Memory!"
              : score >= 3
              ? "Great Job!"
              : "Good Try!"}
          </Text>

          <Text style={styles.finalScore}>
            {score} / {questions.length}
          </Text>

          <Text style={styles.resultText}>
            {score >= 4
                ? "Excellent Memory! 🔥"
                : score >= 2
                ? "Good job! 👍"
                : "Let's practice a little more. 💪"}
          </Text>

          <Text style={styles.nextLevelText}>
            Next Challenge: Level {nextLevel}
          </Text>

          <TouchableOpacity
            style={styles.playAgain}
            onPress={resetGame}
          >
            <Text style={styles.playAgainText}>
              🔄 Play Again
            </Text>
          </TouchableOpacity>

        </View>
      )}

      <View style={styles.voiceArea}>
        <Text style={styles.voiceIcon}>
          🔊
        </Text>

        <Text style={styles.voiceText}>
          Remember your daily routine
        </Text>
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
    fontSize: 23,
    fontWeight: "bold",
    color: "#1E293B",
  },

  level: {
    fontSize: 13,
    color: "#4F46E5",
    fontWeight: "bold",
  },

  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },

  mainTitle: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#1E293B",
    textAlign: "center",
  },

  instruction: {
    fontSize: 18,
    color: "#64748B",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  timerBox: {
    backgroundColor: "#E0E7FF",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  timerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4F46E5",
  },

  routineBox: {
    backgroundColor: "white",
    borderRadius: 22,
    padding: 15,
    width: "100%",
    elevation: 4,
  },

  routineItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },

  numberCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E0E7FF",
    justifyContent: "center",
    alignItems: "center",
  },

  number: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4F46E5",
  },

  routineIcon: {
    fontSize: 30,
    marginLeft: 14,
  },

  routineName: {
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 14,
    color: "#1E293B",
  },

  startButton: {
    backgroundColor: "#4F46E5",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 40,
    marginTop: 22,
  },

  startText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  progress: {
    fontSize: 16,
    color: "#4F46E5",
    fontWeight: "bold",
    marginBottom: 15,
  },

  answers: {
    width: "100%",
    marginTop: 10,
  },

  answerCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 19,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    borderWidth: 2,
    borderColor: "transparent",
  },

  optionNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4F46E5",
    width: 35,
  },

  answerText: {
    fontSize: 19,
    fontWeight: "600",
    color: "#1E293B",
  },

  correctCard: {
    borderColor: "#22C55E",
  },

  wrongCard: {
    borderColor: "#EF4444",
  },

  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#334155",
    marginTop: 10,
  },

  resultEmoji: {
    fontSize: 65,
    marginTop: 40,
  },

  resultTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 15,
    textAlign: "center",
  },

  finalScore: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#4F46E5",
    marginTop: 20,
  },

  resultText: {
    fontSize: 18,
    color: "#64748B",
    marginTop: 10,
    textAlign: "center",
  },
  nextLevelText: {
  fontSize: 20,
  fontWeight: "bold",
  color: "#4F46E5",
  marginTop: 15,
  textAlign: "center",
  },

  playAgain: {
    backgroundColor: "#4F46E5",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 16,
    marginTop: 25,
  },

  playAgainText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  voiceArea: {
    alignItems: "center",
    marginBottom: 15,
  },

  voiceIcon: {
    fontSize: 27,
  },

  voiceText: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },
});