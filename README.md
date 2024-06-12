# Askend-test-assignment

The Filters Application is a user-friendly tool designed to manage and apply filters to data sets effectively.
It provides users with the ability to create and edit filters based on various criteria.

## Key Features

- **Filter Creation Interface:** The homepage of the application features an intuitive "Add Filter" button.
- **Modal Dialog Functionality:** Allows users to add multiple filtering criteria dynamically with configurable modal/non-modal modes and resizable height.
- **Criterion Types:** Supports filtering based on Amount, Title, or Date criteria.
- **Representation of Saved Filters:** Displays saved filters in a user-friendly format for easy access and reference.
- **User Experience Enhancements:** Ensures each filter contains at least one criterion, implements scrolling in the modal dialog for overflow, and allows users to resize dialog height.

## Technical Specifications

- **Frontend:** Developed using modern frontend React library and CSS for enhanced interactivity.
- **Backend:** Utilizes backend technologies like Java 21 and Spring Boot for server-side logic and data management.
- **Database:** Stores filter data in a relational H2 database.

## Usage

To use the Filters Application:
### Setup the Frontend
1. Clone this repository.
    ```console
   git clone https://github.com/ArnoldLuich/Askend-test-assignment.git
    ```
2. Navigate to the project directory
3. In "Askend-test-assignment\filtersFrontend" directory run:
    ```console
    npm install 
    npm run dev 
    ```
4. Go to http://localhost:5173/

### Setup the Backend
1. Open the FiltersServiceApplication class "filtersService/src/main/java/com/FiltersService/FiltersService/FiltersServiceApplication.java". Ensure that you are using Java 21
2. Run the FiltersServiceApplication class. This can typically be done through your IDE (such as IntelliJ IDEA or Eclipse) by right-clicking on the class and selecting "Run".
   Alternatively, you can use the command line to run the application:
   ```console
   ./gradlew bootRun
   ```
   Ensure that your JAVA_HOME environment variable is set to the Java 21 JDK.
3. Refresh frontend to get test data.

## Endpoints

### Get All Filters

- **URL**: /api/filters
- **Method**: GET
- **Description**: Retrieves a list of all filters.
- **Response Format**: JSON

### Create Filter

- **URL**: /api/filters
- **Method**: POST
- **Description**: Creates a new filter.
- **Request Body**:
  - **filter**: A filter object with the following fields:
  - **name (String)**: The name of the filter.
  - **selection (String)**: The selection criteria for the filter.
  - **criteria (List of Criterion)**: A list of criteria associated with the filter.
- **Response Format**: JSON


