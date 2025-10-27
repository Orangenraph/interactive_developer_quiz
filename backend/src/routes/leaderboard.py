from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from io import BytesIO
from datetime import datetime
from ..models.leaderboard import LeaderboardEntry, LeaderboardResponse
from ..services.csv_handler import (
    read_leaderboard,
    add_entry,
    clear_all_entries,
    get_csv_content
)

router = APIRouter(prefix="/api/leaderboard", tags=["leaderboard"])


@router.get("", response_model=LeaderboardResponse)
async def get_leaderboard():
    """
    Gibt alle Leaderboard-Einträge sortiert zurück
    GET /api/leaderboard
    """
    entries = read_leaderboard()
    return LeaderboardResponse(
        entries=entries,
        count=len(entries)
    )


@router.post("", status_code=201)
async def add_leaderboard_entry(entry: LeaderboardEntry):
    """
    Fügt einen neuen Leaderboard-Eintrag hinzu
    POST /api/leaderboard
    """
    # Validierung der Daten
    if not entry.name.strip():
        raise HTTPException(status_code=400, detail="Name darf nicht leer sein")

    if entry.score < 0 or entry.score > 10:
        raise HTTPException(status_code=400, detail="Score muss zwischen 0 und 10 liegen")

    # Versuche, den Eintrag zu speichern
    success = add_entry(entry)

    if not success:
        raise HTTPException(status_code=500, detail="Fehler beim Speichern des Eintrags")

    return {
        "message": "Eintrag erfolgreich gespeichert",
        "entry": entry
    }


@router.delete("/clear", status_code=200)
async def clear_leaderboard():
    """
    Löscht alle Leaderboard-Einträge
    DELETE /api/leaderboard/clear
    """
    success = clear_all_entries()

    if not success:
        raise HTTPException(status_code=500, detail="Fehler beim Löschen der Einträge")

    return {
        "message": "Alle Einträge wurden gelöscht"
    }


@router.get("/download", status_code=200)
async def download_leaderboard():
    """
    Downloadet das Leaderboard als CSV-Datei
    GET /api/leaderboard/download
    """
    csv_content = get_csv_content()

    if not csv_content:
        raise HTTPException(status_code=500, detail="Fehler beim Vorbereiten des Downloads")

    # Erstelle eine In-Memory Datei
    csv_bytes = BytesIO(csv_content.encode('utf-8'))

    filename = f"quiz_results_{datetime.now().strftime('%Y-%m-%d')}.csv"

    return StreamingResponse(
        iter([csv_bytes.getvalue()]),
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename={filename}"}
    )