# Node.js Project with Dummy JSON Data

## Project Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/poojatalele/nodejs-dummy-json.git
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
    - Filter data by name: `http://localhost:3000/api/data/filter/name/:name`
    - Filter data by language: `http://localhost:3000/api/data/filter/language/:language`
    - Filter data by version: `http://localhost:3000/api/data/filter/version/:version`
    - Sort data by name: `http://localhost:3000/api/data/sort/name/:order`
    - Sort data by language: `http://localhost:3000/api/data/sort/language/:order`
    - Sort data by version: `http://localhost:3000/api/data/sort/version/:order`
    - Sort data by id: `http://localhost:3000/api/data/sort/id/:order`

## API Endpoints

- **GET /api/data**: Returns all data.
- **GET /api/data/filter/name/:name**: Filters data by name.
- **GET /api/data/filter/language/:language**: Filters data by language.
- **GET /api/data/filter/version/:version**: Filters data by version.
- **GET /api/data/sort/name/:order**: Sorts data by name.
- **GET /api/data/sort/language/:order**: Sorts data by language.
- **GET /api/data/sort/version/:order**: Sorts data by version.
- **GET /api/data/sort/id/:order**: Sorts data by id.

## Example Requests

- Get all data:
    ```
    http://localhost:3000/api/data
    ```

- Filter data by name:
    ```
    http://localhost:3000/api/data/filter/name/Solangi
    ```

- Filter data by language:
    ```
    http://localhost:3000/api/data/filter/language/Sindhi
    ```

- Filter data by version:
    ```
    http://localhost:3000/api/data/filter/version/1.88
    ```
- Filter data by id:
    ```
    http://localhost:3000/api/data/filter/id/0B8IOVL2NSVJVV6T
    ```

- Sort data by name:
    ```
    http://localhost:3000/api/data/sort/name/asc
    ```

- Sort data by language:
    ```
    http://localhost:3000/api/data/sort/language/asc
    ```

- Sort data by version:
    ```
    http://localhost:3000/api/data/sort/version/asc
    ```
- Sort data by id:
    ```
    http://localhost:3000/api/data/sort/id/asc
    ```


## Postman Collection

You can use the provided Postman collection to test the API endpoints.

1. **Download the Postman collection**:
    [NodejsDummyJSONAPI.postman_collection.json](https://github.com/poojatalele/nodejs-dummy-json/blob/main/Node.js%20Dummy%20JSON%20API.postman_collection.json)

2. **Import the collection into Postman**:
    - Open Postman.
    - Click on the `Import` button.
    - Select the downloaded JSON file (`NodejsDummyJSONAPI.postman_collection.json`).
