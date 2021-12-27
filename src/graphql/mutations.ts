import {
  FAVORITE_JOB_FRAGMENT,
  GET_FAVORITE_JOBS_COUNT,
  GET_FAVORITE_JOBS_LIST,
} from './queries';

export const handleAddOrRemoveJobFromFavorite = (
  _root,
  args,
  { client, cache },
) => {
  // id identify
  const jobId = cache.identify({
    __typename: 'Job',
    id: args.jobId,
  });
  const { favorite } = client.readFragment({
    fragment: FAVORITE_JOB_FRAGMENT,
    id: jobId,
  });
  client.writeFragment({
    fragment: FAVORITE_JOB_FRAGMENT,
    id: jobId,
    data: {
      favorite: !favorite,
    },
  });
  const { favoriteJobsCount } = client.readQuery({
    query: GET_FAVORITE_JOBS_COUNT,
  });
  client.writeQuery({
    query: GET_FAVORITE_JOBS_COUNT,
    data: {
      favoriteJobsCount: favorite
        ? favoriteJobsCount - 1
        : favoriteJobsCount + 1,
    },
  });
  // Add from Postulates
  const { company, title, description, countries, cities, postedAt, slug } =
    args;
  const newFavoriteList = {
    id: args.jobId,
    company,
    title,
    description,
    countries,
    cities,
    postedAt,
    slug,
    favorite: !favorite,
  };
  const { favoriteJobsList } = client.readQuery({
    query: GET_FAVORITE_JOBS_LIST,
  });
  if (favorite === true) {
    const newFavoriteJobsList = favoriteJobsList.filter(
      ({ id }) => id !== args.jobId,
    );
    client.writeQuery({
      query: GET_FAVORITE_JOBS_LIST,
      data: {
        favoriteJobsList: newFavoriteJobsList,
      },
    });
  } else {
    const filterFavoriteJobsList = favoriteJobsList.find(
      ({ id }) => newFavoriteList.id === id,
    );
    if (filterFavoriteJobsList === undefined) {
      return client.writeQuery({
        query: GET_FAVORITE_JOBS_LIST,
        data: {
          favoriteJobsList: [...favoriteJobsList, newFavoriteList],
        },
      });
    }
  }
};
