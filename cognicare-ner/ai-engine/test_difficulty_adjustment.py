import pytest

from difficulty_adjustment import get_next_difficulty


def test_three_high_performance_sessions_increase_difficulty():
    sessions = [
        {"accuracy": 0.90, "response_time": 3.0},
        {"accuracy": 0.88, "response_time": 3.5},
        {"accuracy": 0.92, "response_time": 3.2},
    ]

    result = get_next_difficulty(3, sessions)

    assert result == 4


def test_three_low_accuracy_sessions_decrease_difficulty():
    sessions = [
        {"accuracy": 0.50, "response_time": 6.0},
        {"accuracy": 0.55, "response_time": 7.0},
        {"accuracy": 0.58, "response_time": 6.5},
    ]

    result = get_next_difficulty(3, sessions)

    assert result == 2


def test_mixed_performance_keeps_difficulty():
    sessions = [
        {"accuracy": 0.90, "response_time": 3.0},
        {"accuracy": 0.50, "response_time": 6.0},
        {"accuracy": 0.92, "response_time": 3.0},
    ]

    result = get_next_difficulty(3, sessions)

    assert result == 3


def test_only_two_good_sessions_keep_difficulty():
    sessions = [
        {"accuracy": 0.90, "response_time": 3.0},
        {"accuracy": 0.90, "response_time": 3.0},
    ]

    result = get_next_difficulty(3, sessions)

    assert result == 3


def test_maximum_difficulty_is_not_exceeded():
    sessions = [
        {"accuracy": 0.90, "response_time": 3.0},
        {"accuracy": 0.90, "response_time": 3.0},
        {"accuracy": 0.90, "response_time": 3.0},
    ]

    result = get_next_difficulty(5, sessions)

    assert result == 5


def test_minimum_difficulty_is_not_exceeded():
    sessions = [
        {"accuracy": 0.50, "response_time": 6.0},
        {"accuracy": 0.50, "response_time": 6.0},
        {"accuracy": 0.50, "response_time": 6.0},
    ]

    result = get_next_difficulty(1, sessions)

    assert result == 1


def test_empty_history_keeps_difficulty():
    result = get_next_difficulty(3, [])

    assert result == 3


def test_invalid_current_difficulty():
    with pytest.raises(ValueError):
        get_next_difficulty(6, [])


def test_no_difficulty_change_for_normal_performance():
    sessions = [
        {"accuracy": 0.75, "response_time": 5.0},
        {"accuracy": 0.78, "response_time": 4.8},
        {"accuracy": 0.80, "response_time": 4.5},
    ]

    result = get_next_difficulty(3, sessions)

    assert result == 3