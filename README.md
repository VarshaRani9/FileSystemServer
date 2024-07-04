This is a simple Express application that serves files from a directory called "files".

## Getting Started

### Clone the repository:
   - git clone https://github.com/VarshaRani9/File_System_Server.git
   - cd File_System_Server

### Install dependencies:
npm install

### Run the server:
node index.js

The server runs on port as per its specification in index.js file (3001 here)

## Endpoints
- List Files
  - Endpoint: /
  - Method: GET
  - Description: Retrieves a list of files from the "files" directory.
  - Response: JSON object with an array of file names.

- Read File Contents
  - Endpoint: /files/:name
  - Method: GET
  - Description: Reads the contents of a specific file from the "files" directory.
  - Parameters: name - Name of the file to read.
  - Response: JSON object with the contents of the file.

## Technologies Used
- Node.js
- Express.js
- fs (File System module)
- path (Path module)
