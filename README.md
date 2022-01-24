# tech-matchup-app

MERN-stack application that allows users to create a matchup between two technologies and vote on their favorite technology. The application currently uses  GraphQL API built with Apollo Server and Apollo Client. Also use React Router's `<Switch>` component in the routes.

## Acceptance Criteria

The application is complete when the following criteria are met:

* The `/` homepage route renders a list of technologies.

* The `/matchup` route renders a form to choose two technologies to create a matchup.

* The `/matchup/:id` route renders a matchup to vote on.

* An Apollo Server is set up to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

* Apollo Client is set up so that requests can communicate with an Apollo Server.

* A 404 page `NotFound` is rendered if the user tries to access a page that doesn't exist.
