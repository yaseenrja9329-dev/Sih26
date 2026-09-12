from typing import List, Dict, Any

from performance_tracker import get_rolling_performance
from difficulty_adjustment import get_next_difficulty


def analyze_patient_game(
    patient_id: str,
    game_id: str,
    current_difficulty: int,
    session_history: List[Dict[str, Any]],
    window_size: int = 5,
) -> Dict[str, Any]:
    """
    Run the complete cognitive performance pipeline.

    Pipeline:
        Session history
            ↓
        Rolling performance
            ↓
        Difficulty recommendation

    This is a performance adaptation system.
    It does not diagnose dementia, Alzheimer's,
    or any other medical condition.
    """

    # Calculate rolling accuracy and response time.
    performance = get_rolling_performance(
        patient_id=patient_id,
        game_id=game_id,
        session_history=session_history,
        window_size=window_size,
    )

    # If there are no sessions, keep the current difficulty.
    if performance["sessions_used"] == 0:
        return {
            "patient_id": patient_id,
            "game_id": game_id,
            "current_difficulty": current_difficulty,
            "next_difficulty": current_difficulty,
            "rolling_accuracy": None,
            "rolling_response_time": None,
            "sessions_used": 0,
        }

    # Get only the sessions belonging to this patient and game.
    relevant_sessions = [
        session
        for session in session_history
        if session.get("patient_id") == patient_id
        and session.get("game_id") == game_id
    ]

    # Use the same recent window for the difficulty engine.
    recent_sessions = relevant_sessions[-3:]

    next_difficulty = get_next_difficulty(
        current_difficulty=current_difficulty,
        session_history=recent_sessions,
    )

    return {
        "patient_id": patient_id,
        "game_id": game_id,
        "current_difficulty": current_difficulty,
        "next_difficulty": next_difficulty,
        "rolling_accuracy": performance["rolling_accuracy"],
        "rolling_response_time": performance["rolling_response_time"],
        "sessions_used": performance["sessions_used"],
    }