----------------------------
Jai Shree Ram
1. install docker desktop 
2. wsl --install   in powershell
3. docker --version
4. docker run hello-world   ... 2 times
5. git clone repo .. go to repo ->cd 
6. docker build -t assdocker .
7. docker run assdocker
---------------------------------






ASSDOCKER - Basic Node.js App with Docker

This is a simple Node.js project that logs "hello world" to the console and is containerized using Docker.

------------------------------------------------------------
🚀 Prerequisites
------------------------------------------------------------

- Docker Desktop installed
- Windows Subsystem for Linux (WSL)
- Git installed

------------------------------------------------------------
🛠 Setup Instructions
------------------------------------------------------------

1. Install Docker Desktop
   Download and install Docker Desktop from the official website:
   https://www.docker.com/products/docker-desktop/

2. Enable WSL (for Windows)
   Open PowerShell as Administrator and run:
       wsl --install
   Restart your computer if prompted.

3. Verify Docker Installation
   Check if Docker is installed and running:
       docker --version

4. Test Docker Installation
   Run the Docker test image twice to confirm it's working:
       docker run hello-world
       docker run hello-world

5. Clone the Project Repository
   Use Git to clone the repo:
       git clone <repo-url>
       cd <repo-folder>
   Replace <repo-url> and <repo-folder> with your actual repo link and folder name.

6. Build the Docker Image
       docker build -t assdocker .

7. Run the Docker Container
       docker run assdocker
   Expected output:
       hello world

------------------------------------------------------------
📁 Project Structure
------------------------------------------------------------

assdocker/
├── Dockerfile
├── index.js
└── package.json

------------------------------------------------------------
📌 Notes
------------------------------------------------------------

- This project uses a basic Node.js script as a sample.
- You can expand it to build a full web server later.
- Make sure Docker Desktop is running while building/running containers.

------------------------------------------------------------
🧑‍💻 Author
------------------------------------------------------------

Created by [maniac_psycho13]. Replace this section with your own info if needed.
