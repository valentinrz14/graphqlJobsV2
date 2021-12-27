// Dependencies
import { InMemoryCache } from '@apollo/client';
// Queries
import {
  GET_FAVORITE_JOBS_COUNT,
  GET_FAVORITE_JOBS_LIST,
  GET_POSTULATE_JOBS_COUNT,
  GET_POSTULATE_JOBS_LIST,
} from './queries';

export const getMemoryCache = new InMemoryCache({
  typePolicies: {
    Job: {
      fields: {
        favorite: {
          read(favorite = false) {
            return favorite;
          },
        },
        postulate: {
          read(postulate = false) {
            return postulate;
          },
        },
      },
    },
  },
});

getMemoryCache.writeQuery({
  query: GET_FAVORITE_JOBS_COUNT,
  data: {
    favoriteJobsCount: 0,
  },
});

getMemoryCache.writeQuery({
  query: GET_POSTULATE_JOBS_COUNT,
  data: {
    postulateJobsCount: 0,
  },
});

getMemoryCache.writeQuery({
  query: GET_FAVORITE_JOBS_LIST,
  data: {
    favoriteJobsList: [],
  },
});

getMemoryCache.writeQuery({
  query: GET_POSTULATE_JOBS_LIST,
  data: {
    postulateJobsList: [],
  },
});
