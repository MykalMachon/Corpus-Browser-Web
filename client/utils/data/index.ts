import fetch from 'isomorphic-fetch';

export const getCorporaDownloadUrls = async () => {
  const corporaResponse = await fetch(
    'https://zissou.infosci.cornell.edu/convokit/datasets/download_config.json'
  );
  const corporaInfo = await corporaResponse.json();
  const corporaDatasets = corporaInfo.DatasetURLs;
  const corporaDatasetUrls = Object.keys(corporaDatasets).map((corporaName) => {
    return {
      name: corporaName,
      url: corporaDatasets[`${corporaName}`],
    };
  });
  return corporaDatasetUrls;
};
