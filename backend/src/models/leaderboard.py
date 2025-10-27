from pydantic import BaseModel, Field
from typing import Optional


class LeaderboardEntry(BaseModel):
    """Modell für einen Leaderboard-Eintrag"""
    name: str = Field(..., min_length=1, max_length=100)
    score: int = Field(..., ge=0, le=10)
    timeTaken: str  # Format: "MM:SS"
    date: str  # Format: "YYYY-MM-DD"
    completed: Optional[bool] = True

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Max Mustermann",
                "score": 10,
                "timeTaken": "5:23",
                "date": "2025-10-27",
                "completed": True
            }
        }


class LeaderboardResponse(BaseModel):
    """Modell für die API-Response"""
    entries: list[LeaderboardEntry]
    count: int

    class Config:
        json_schema_extra = {
            "example": {
                "entries": [
                    {
                        "name": "Alice",
                        "score": 10,
                        "timeTaken": "5:23",
                        "date": "2025-10-27",
                        "completed": True
                    }
                ],
                "count": 1
            }
        }