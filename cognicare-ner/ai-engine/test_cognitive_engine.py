from cognitive_engine import analyze_patient_game


def test_cognitive_engine_increases_difficulty():
    sessions = [
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.90,
            "response_time": 3.0,
        },
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.88,
            "response_time": 3.5,
        },
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.92,
            "response_time": 3.2,
        },
    ]

    result = analyze_patient_game(
        patient_id="P001",
        game_id="memory_match",
        current_difficulty=3,
        session_history=sessions,
        window_size=5,
    )

    assert result["rolling_accuracy"] == 0.90
    assert result["rolling_response_time"] == 3.2333
    assert result["next_difficulty"] == 4
    assert result["sessions_used"] == 3


def test_cognitive_engine_decreases_difficulty():
    sessions = [
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.50,
            "response_time": 6.0,
        },
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.55,
            "response_time": 7.0,
        },
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.58,
            "response_time": 6.5,
        },
    ]

    result = analyze_patient_game(
        patient_id="P001",
        game_id="memory_match",
        current_difficulty=3,
        session_history=sessions,
    )

    assert result["next_difficulty"] == 2


def test_cognitive_engine_keeps_difficulty_for_stable_performance():
    sessions = [
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.75,
            "response_time": 5.0,
        },
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.78,
            "response_time": 4.8,
        },
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.80,
            "response_time": 4.5,
        },
    ]

    result = analyze_patient_game(
        patient_id="P001",
        game_id="memory_match",
        current_difficulty=3,
        session_history=sessions,
    )

    assert result["next_difficulty"] == 3


def test_cognitive_engine_ignores_other_patient_and_game():
    sessions = [
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.90,
            "response_time": 3.0,
        },
        {
            "patient_id": "P002",
            "game_id": "memory_match",
            "accuracy": 0.30,
            "response_time": 9.0,
        },
        {
            "patient_id": "P001",
            "game_id": "pattern_game",
            "accuracy": 0.30,
            "response_time": 9.0,
        },
    ]

    result = analyze_patient_game(
        patient_id="P001",
        game_id="memory_match",
        current_difficulty=3,
        session_history=sessions,
    )

    assert result["sessions_used"] == 1
    assert result["rolling_accuracy"] == 0.90
    assert result["rolling_response_time"] == 3.0
    assert result["next_difficulty"] == 3