// Depencies
import { Resolvers } from '@apollo/client';
import { Alert } from 'react-native';
import { handleAddOrRemoveJobFromFavorite } from './mutations';
// Queries
import {
  GET_POSTULATE_JOBS_COUNT,
  GET_POSTULATE_JOBS_LIST,
  POSTULATES_JOB_FRAGMENT,
} from './queries';
// Resolvers
export const getResolvers: Resolvers = {
  Job: {
    favorite() {
      return false;
    },
    postulate() {
      return false;
    },
  },
  Mutation: {
    // Add or Remove Jobs from Favorites
    addOrRemoveJobFromFavorite(_root, args, { client, cache }) {
      return handleAddOrRemoveJobFromFavorite(_root, args, { client, cache });
    },
    // Add from Postulates
    addJobFromPostulate(_root, args, { client, cache }) {
      const jobId = cache.identify({
        __typename: 'Job',
        id: args.jobId,
      });
      const { postulate } = client.readFragment({
        fragment: POSTULATES_JOB_FRAGMENT,
        id: jobId,
      });
      client.writeFragment({
        fragment: POSTULATES_JOB_FRAGMENT,
        id: jobId,
        data: {
          postulate: !postulate,
        },
      });

      const { postulateJobsCount } = client.readQuery({
        query: GET_POSTULATE_JOBS_COUNT,
      });
      client.writeQuery({
        query: GET_POSTULATE_JOBS_COUNT,
        data: {
          postulateJobsCount: postulateJobsCount + 1,
        },
      });
      const { company, title, description, countries, cities, postedAt, slug } =
        args;
      const newPostulateList = {
        id: args.jobId,
        company: {
          name: company,
        },
        title,
        description,
        countries,
        cities,
        postedAt,
        slug,
        activated: true,
      };
      const { postulateJobsList } = client.readQuery({
        query: GET_POSTULATE_JOBS_LIST,
      });
      const postulateFilter = postulateJobsList.find(
        ({ id }) => id === newPostulateList.id,
      );
      if (postulateFilter !== undefined) {
        client.writeQuery({
          query: GET_POSTULATE_JOBS_COUNT,
          data: {
            postulateJobsCount: postulateJobsCount,
          },
        });
        return Alert.alert(
          '!Oops',
          'Ya se encuentra postulado para esta oferta laboral',
        );
      } else {
        client.writeQuery({
          query: GET_POSTULATE_JOBS_LIST,
          data: {
            postulateJobsList: [...postulateJobsList, newPostulateList],
          },
        });
        return Alert.alert('Exito al postularse.', 'Suerte!');
      }
    },
  },
};
