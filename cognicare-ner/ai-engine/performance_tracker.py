from typing import List, Dict, Any


def get_rolling_performance(
    patient_id: str,
    game_id: str,
    session_history: List[Dict[str, Any]],
    window_size: int = 5,
) -> Dict[str, Any]:
    """
    Calculate rolling accuracy and response time
    for one patient and one game.

    This is a performance-tracking function.
    It does not diagnose any medical condition.
    """

    if not patient_id:
        raise ValueError("patient_id is required")

    if not game_id:
        raise ValueError("game_id is required")

    if window_size <= 0:
        raise ValueError("window_size must be greater than 0")

    # Select sessions for this patient and game.
    relevant_sessions = [
        session
        for session in session_history
        if session.get("patient_id") == patient_id
        and session.get("game_id") == game_id
    ]

    # Keep only the most recent N sessions.
    relevant_sessions = relevant_sessions[-window_size:]

    # No matching sessions.
    if not relevant_sessions:
        return {
            "patient_id": patient_id,
            "game_id": game_id,
            "window_size": window_size,
            "sessions_used": 0,
            "rolling_accuracy": None,
            "rolling_response_time": None,
        }

    accuracies = [
        session["accuracy"]
        for session in relevant_sessions
    ]

    response_times = [
        session["response_time"]
        for session in relevant_sessions
    ]

    rolling_accuracy = sum(accuracies) / len(accuracies)
    rolling_response_time = sum(response_times) / len(response_times)

    return {
        "patient_id": patient_id,
        "game_id": game_id,
        "window_size": window_size,
        "sessions_used": len(relevant_sessions),
        "rolling_accuracy": round(rolling_accuracy, 4),
        "rolling_response_time": round(rolling_response_time, 4),
    }