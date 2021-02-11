import fetch from 'isomorphic-fetch';

export const getCorporaDownloadUrls = async () => {
  let url =
    process.env.NODE_ENV == 'development'
      ? 'http://localhost:5000/dataset/list'
      : 'http://cbw-api.mykalmachon.com/dataset/list';

  const corporaResponse = await fetch(url);
  const corporaInfo = await corporaResponse.json();
  return corporaInfo;
};

export const getCorporaUrls = async (cid) => {
  let url =
    process.env.NODE_ENV == 'development'
      ? `http://localhost:5000/dataset/${cid}`
      : `http://cbw-api.mykalmachon.com/dataset/${cid}`;

  const corporaResponse = await fetch(url);
  const corporaUrls = await corporaResponse.json();
  return corporaUrls;
};

export const getCorporaSubset = async (cid, subsetId) => {
  let url =
    process.env.NODE_ENV == 'development'
      ? `http://localhost:5000/dataset/${cid}/${subsetId}`
      : `http://cbw-api.mykalmachon.com/dataset/${cid}/${subsetId}`;

  const corporaResponse = await fetch(url);
  const corporaSubset = await corporaResponse.json();
  const dataArray = Object.keys(corporaSubset.data[0]).map(
    (idx) => corporaSubset.data[0][idx]
  );
  return dataArray;
};
