import pytest

from performance_tracker import get_rolling_performance


def test_rolling_performance():
    """Test calculation using the latest 3 sessions."""

    sessions = [
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.70,
            "response_time": 5.0,
        },
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.80,
            "response_time": 4.0,
        },
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.90,
            "response_time": 3.0,
        },
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.85,
            "response_time": 3.5,
        },
    ]

    result = get_rolling_performance(
        "P001",
        "memory_match",
        sessions,
        window_size=3,
    )

    assert result["sessions_used"] == 3
    assert result["rolling_accuracy"] == 0.85
    assert result["rolling_response_time"] == 3.5


def test_fewer_sessions_than_window():
    """Test when there are fewer sessions than the requested window."""

    sessions = [
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.80,
            "response_time": 4.0,
        },
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.90,
            "response_time": 3.0,
        },
    ]

    result = get_rolling_performance(
        "P001",
        "memory_match",
        sessions,
        window_size=5,
    )

    assert result["sessions_used"] == 2
    assert result["rolling_accuracy"] == 0.85
    assert result["rolling_response_time"] == 3.5


def test_patient_sessions_are_separated():
    """Sessions from different patients must not be mixed."""

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
            "accuracy": 0.40,
            "response_time": 8.0,
        },
    ]

    result = get_rolling_performance(
        "P001",
        "memory_match",
        sessions,
        window_size=5,
    )

    assert result["sessions_used"] == 1
    assert result["rolling_accuracy"] == 0.90
    assert result["rolling_response_time"] == 3.0


def test_game_sessions_are_separated():
    """Different games must not be mixed."""

    sessions = [
        {
            "patient_id": "P001",
            "game_id": "memory_match",
            "accuracy": 0.90,
            "response_time": 3.0,
        },
        {
            "patient_id": "P001",
            "game_id": "pattern_game",
            "accuracy": 0.50,
            "response_time": 7.0,
        },
    ]

    result = get_rolling_performance(
        "P001",
        "memory_match",
        sessions,
        window_size=5,
    )

    assert result["sessions_used"] == 1
    assert result["rolling_accuracy"] == 0.90
    assert result["rolling_response_time"] == 3.0


def test_empty_history():
    """Test when there are no sessions."""

    result = get_rolling_performance(
        "P001",
        "memory_match",
        [],
        window_size=5,
    )

    assert result["sessions_used"] == 0
    assert result["rolling_accuracy"] is None
    assert result["rolling_response_time"] is None


def test_invalid_window_size():
    """Window size must be greater than zero."""

    with pytest.raises(ValueError):
        get_rolling_performance(
            "P001",
            "memory_match",
            [],
            window_size=0,
        )


def test_missing_patient_id():
    """Patient ID is required."""

    with pytest.raises(ValueError):
        get_rolling_performance(
            "",
            "memory_match",
            [],
            window_size=5,
        )


def test_missing_game_id():
    """Game ID is required."""

    with pytest.raises(ValueError):
        get_rolling_performance(
            "P001",
            "",
            [],
            window_size=5,
        )