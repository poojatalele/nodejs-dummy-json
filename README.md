# Node.js Project with Dummy JSON Data

## Project Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/nodejs-dummy-json.git
    cd nodejs-dummy-json
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Run the project**
    ```bash
    node src/app.js
    ```

4. **Access the API**
    - Get all data: `http://localhost:3000/api/data`
    - Filter data by name: `http://localhost:3000/api/data/filter/:name`
    - Sort data by name: `http://localhost:3000/api/data/sort/name`

## API Endpoints

- **GET /api/data**: Returns all data.
- **GET /api/data/filter/:name**: Filters data by name.
- **GET /api/data/sort/name**: Sorts data by name.

## Example Requests

- Get all data:
    ```
    http://localhost:3000/api/data
    ```

- Filter data by name:
    ```
    http://localhost:3000/api/data/filter/Solangi
    ```

- Sort data by name:
    ```
    http://localhost:3000/api/data/sort/name
    ```
