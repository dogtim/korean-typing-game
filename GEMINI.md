# Workspace Rules

## Deployment Policy (Strict)

- **No Automatic Deployment**: Never execute deployment commands unless the user explicitly gives a direct command to deploy in the current request.
- **Restricted Commands**:
  - `npm run deploy`
  - `firebase deploy` (including any target flags such as `firebase deploy --only hosting`)
  - Any CI/CD rollout triggers or remote release scripts
- **No Inferred Permission**:
  - Do **NOT** interpret general phrases like *"finish this"*, *"save changes"*, *"commit"*, *"test it"*, *"looks good"*, or *"all done"* as permission to deploy.
  - Deploying is strictly prohibited unless the user provides an explicit prompt command such as:
    - `"deploy"`
    - `"deploy to firebase"`
    - `"npm run deploy"`
    - `"please deploy now"`
- **Local Verification Allowed**:
  - Local verification steps—such as `npm run build`, `npm run preview`, `npm run dev`, and `npm run lint`—are permitted for verifying correctness.
  - However, you must **never** automatically chain or follow a build/verification step with a deployment command.
- **Hand-off When Ready**:
  - When changes are implemented and verified, notify the user that changes are ready for deployment and ask if they would like you to deploy, rather than deploying automatically.
