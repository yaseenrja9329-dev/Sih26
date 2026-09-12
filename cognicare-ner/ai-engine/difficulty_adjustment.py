from typing import List, Dict, Any


def get_next_difficulty(
    current_difficulty: int,
    session_history: List[Dict[str, Any]],
    high_accuracy_threshold: float = 0.85,
    low_accuracy_threshold: float = 0.60,
    fast_response_threshold: float = 4.0,
    min_difficulty: int = 1,
    max_difficulty: int = 5,
) -> int:
    """
    Recommend the next difficulty level based on recent game sessions.

    Rules:
    - 3 consecutive high-accuracy and fast sessions -> increase difficulty.
    - 3 consecutive low-accuracy sessions -> decrease difficulty.
    - Otherwise -> maintain current difficulty.

    This is a rule-based performance adaptation system.
    It does not diagnose any medical condition.
    """

    if not min_difficulty <= current_difficulty <= max_difficulty:
        raise ValueError(
            "current_difficulty must be between min_difficulty and max_difficulty"
        )

    if not session_history:
        return current_difficulty

    recent_sessions = session_history[-3:]

    # Increase difficulty only after 3 consecutive strong sessions.
    if len(recent_sessions) == 3:
        high_performance = all(
            session["accuracy"] >= high_accuracy_threshold
            and session["response_time"] <= fast_response_threshold
            for session in recent_sessions
        )

        if high_performance:
            return min(current_difficulty + 1, max_difficulty)

        # Decrease difficulty after 3 consecutive low-accuracy sessions.
        low_performance = all(
            session["accuracy"] <= low_accuracy_threshold
            for session in recent_sessions
        )

        if low_performance:
            return max(current_difficulty - 1, min_difficulty)

    # Stable or mixed performance -> maintain difficulty.
    return current_difficulty