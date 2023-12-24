# Marina

### This repository contains the source code for the Merina application, which consists of both frontend and backend components. The backend is deployed on Render, while the app is hosted on Vercel.

## Links

Github link: https://github.com/Nidhikumari-4/Merina \
Hosted URL: https://merina-dair.vercel.app/

## Tools and Technologies:

Frontend: Next.js, Prime-react and SASS/SCSS \
Backend: Express

## Libraries and Packages Used

### Frontend

- Next js
- Prime react
- React-hot-toast
- Axios
- SASS/SCSS
- Date-fns

### Backend

- Express
- jsonwebtoken
- cors
- nodemon

## Approach

### Frontend Development:

- Utilized Next.js as the primary framework for building the frontend of the Merina application.
- Incorporated PrimeReact for UI components, enhancing the user interface with efficient.

### Styling with SASS/SCSS:

- Leveraged SASS/SCSS for styling the application, ensuring modularity and maintainability of stylesheets while enhancing the visual appeal of the app.

### User Feedback Implementation:

- Integrated react-hot-toast to provide immediate and informative feedback to users, enhancing their experience while navigating the application.

### Backend API Integration:

- Utilized Axios to establish communication between the frontend and backend services, facilitating seamless data exchange and fetching from the backend APIs.

### Date Handling with date-fns:

- Integrated date-fns to efficiently handle and manipulate dates within the chart in the application, ensuring accurate and user-friendly date-related functionalities.

### Backend Service with Express:

- Employed Express.js as the backend service to handle requests and responses.

### Authentication with JSON Web Tokens (JWT):

- Implemented user authentication and authorization using jsonwebtoken, ensuring secure access to authenticated routes and enhancing the app's security.

## Challenges faced

- Configuring Next.js with PrimeReact left with challenges in integration between the two frameworks, potentially leading to unexpected behavior and conflicts.

- Using SASS/SCSS for styling have introduced with challenges in the application. As PrimeReact components often comes with their default styles. Adapting these components to match the overall application's design while using SASS/SCSS for customization.

- Due to the less common use case of using PrimeReact with Next.js,I had faced trouble in finding adequate community support or resources for troubleshooting issues.

- It was a diificult task to achieve the figma chart designS for the chart as there are default styling for the chart IN PRIME REACT.

- Adjusting colums widths, ordering, and visibility based on design specifications was a tricky task,especially if the datatable component's API had limitations in column manipulation.

- Faced troble in implementing specific data manipulations, such as pagination.
