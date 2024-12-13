# SleepWell APP Backend/API

APIs were implemented to manage user authentication and integrate a machine learning model designed for face recognition to evaluate sleep sufficiency. The authentication API, utilizing Firebase Authentication, securely handles user registration, login, and token validation. The face recognition API leverages a TensorFlow.js model to analyze user-submitted facial images, identifying sleep adequacy by classifying the user's state as well-rested (Normal) or fatigued (Drowsy). This analysis provides actionable insights into the user’s sleep quality. The backend APIs were deployed on Google Compute Engine (GCE) for scalability and reliability, with comprehensive testing conducted via Postman. Detailed API documentation was created to ensure seamless integration and support for future development needs.


## Contributor

| ID           | Name                            | University                      | Specialization     |
| ------------ | ------------------------------- | ------------------------------- | ------------------ |
| C312B4KY0293 | Akhyar Amin                     | Sebelas Maret University        | Cloud Computing    |
| C312B4KY1228 | Edo Karnaedi                    | Sebelas Maret University        | Cloud Computing    |


## API Endpoints

The SleepWell API has been thoroughly documented using Postman Documenter, detailing each endpoint's functionality, parameters, responses, and example requests for seamless developer integration.

To access the API documentation, visit [SleepWell API Documentation](https://documenter.getpostman.com/view/39443488/2sAYHxnipG).


## Getting Started

To start using the **SleepWell APP Backend/API**, follow the steps below:

### Prerequisites

-   NodeJS 20.15.0 or higher
-   Google Cloud SDK
-   Postman (optional, for testing APIs)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Captone-C242-PS571/Cloud-Computing.git
   cd Cloud-Computing
   
2. Install all required dependencies
   ```bash
   **npm install**
   
3. Authenticate and set default application credentials
   ```bash
   gcloud auth application-default login
   
4. Configure the environment variables:
   ```bash
   ACCESS_TOKEN_SECRET="your_access_token_secret"

   GCS_MODEL_BUCKET_NAME="your_model_bucket_name"
   GCS_HISTORY_BUCKET_NAME="your_history_bucket_name"

   MODEL_FORM="your_model_form_link"
   MODEL_IMAGE="your_model_image_link"
   
5. Start the development server
   ```bash
   npm run start
   
6. Test the APIs using Postman or access them directly
   ```bash
   http://localhost:3000
