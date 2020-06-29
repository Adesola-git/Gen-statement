export default {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://ly55wbovq4.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "notes-user-pool",
      APP_CLIENT_ID: "notes-app",
      IDENTITY_POOL_ID: "us-east-1:3eb9653f-e567-4dba-8a35-a0c7c3e390a3"
    }
  };