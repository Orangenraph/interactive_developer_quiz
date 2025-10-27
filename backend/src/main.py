from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes.leaderboard import router as leaderboard_router
from .services.csv_handler import ensure_csv_exists

# FastAPI App initialisieren
app = FastAPI(
    title="Developer Quiz API",
    description="API für das RSG DevCon Developer Quiz",
    version="1.0.0"
)

# CORS konfigurieren (damit das Frontend vom anderen Port zugreifen kann)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "*"],  # Passe an wenn nötig
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# CSV-Datei beim Start sicherstellen
@app.on_event("startup")
async def startup_event():
    ensure_csv_exists()
    print("✅ CSV-Datei initialisiert")

# Routes einbinden
app.include_router(leaderboard_router)

# Health Check Endpoint
@app.get("/health")
async def health_check():
    return {
        "status": "ok",
        "message": "Developer Quiz API läuft"
    }

# Root Endpoint
@app.get("/")
async def root():
    return {
        "message": "Developer Quiz API",
        "docs": "/docs",
        "health": "/health"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)