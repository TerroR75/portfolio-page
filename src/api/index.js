import { gql, GraphQLClient } from "graphql-request";

const graphqlAPI = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/${
  import.meta.env.VITE_GRAPHCMS_PUBLIC_ENDPOINT
}/master`;
const graphcms = new GraphQLClient(graphqlAPI);

export const getAllTechs = async () => {
  const query = gql`
    query AllTechs {
      techStacks(first: 100) {
        id
        name
        short
        categories
        image {
          url
        }
      }
    }
  `;

  const result = await graphcms.request(query);
  const fetchDate = new Date();

  const data = {
    fetchDate,
    techArray: result.techStacks,
  };

  return data;
};

export const getAllProjects = async () => {
  const query = gql`
    query AllProjects {
      projects {
        id
        title
        description
        projectImage {
          id
          url
        }
        techStacks {
          id
          short
          image {
            url
          }
        }
      }
    }
  `;

  const result = await graphcms.request(query);
  const fetchDate = new Date();

  const data = {
    fetchDate,
    projectsArray: result.projects,
  };

  return data;
};
