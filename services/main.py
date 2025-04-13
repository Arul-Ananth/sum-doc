from fastapi import FastAPI, File, UploadFile
import mysql.connector
import shutil
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

UPLOAD_DIR = "uploads"

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="admin",
        database="ananth"
    )

# Ensure the "uploads" directory exists
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

app.add_middleware(
    CORSMiddleware,
    #allow_origins=["http://localhost:3001"],
    allow_origins=["*"],  # Allow all origins (Change this in production)
    allow_credentials=True,
    allow_methods=["GET", "POST"],  # Allow all methods (GET, POST, PUT, DELETE)
    allow_headers=["*"],  # Allow all headers
)
users = {"admin": "password123"}

class LoginRequest(BaseModel):
    username: str
    password: str

class SignupRequest(BaseModel):
    username: str
    email: str
    password: str


# Login Route (No Password Hashing)
@app.post("/login")
def login(user: LoginRequest):
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)

    cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", 
                   (user.username, user.password))
    result = cursor.fetchone()
    print ( result)
    
    db.close()

    if not result:
        raise HTTPException(status_code=401, detail="Invalid username or password")

    return {"message": "Login successful", "user": result}


@DeprecationWarning
@app.post("/api/login")
def login(user: LoginRequest):
    if user.username in users and users[user.username] == user.password:
        return {"username": user.username, "message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

# Connect to MySQL
conn = mysql.connector.connect(
  host="localhost",
  user="root",
  password="admin",
  port="3306",
  database = "ananth"

)

def save_to_database(filename , file_path):
    """Save filename to MySQL."""
    
    cursor = conn.cursor()
    cursor.execute("INSERT INTO documents (filename, file_path) VALUES (%s, %s)", (filename,file_path))
    conn.commit()
    cursor.close()
    conn.close()


# Signup Route
@app.post("/signup")
def signup(user: SignupRequest):
    db = get_db_connection()
    cursor = db.cursor()

    try:
        cursor.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s)", 
                       (user.username, user.email, user.password))
        db.commit()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail="User already exists")

    db.close()
    return {"message": "User registered successfully"}   

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    #print(f"Saving file to: {file.filename}")
    file_path = r"C:\Dev\sum-doc\services\uploads\{}".format(file.filename)

    #file_path = f"uploads/"
    
    # Save file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Save filename to MySQL
    save_to_database(file.filename, file_path)

    return {"message": "File uploaded successfully", "filename": file.filename}


if __name__ == "__main__":
  uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=False)



