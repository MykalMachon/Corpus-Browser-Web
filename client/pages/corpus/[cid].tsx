import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { getCorporaSubset, getCorporaUrls } from '@utils/data';

const CorporaPage = ({ datasetInfo }) => {
  const router = useRouter();
  const { cid } = router.query;
  console.log(datasetInfo);

  return (
    <main>
      <h1>{cid}</h1>
      <hr />
      <h3>Conversations</h3>
      <ul>
        {Object.keys(datasetInfo.data[0]).map((idx) => (
          <li>{JSON.stringify(datasetInfo.data[0][idx])}</li>
        ))}
      </ul>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cid } = context.params;
  // TODO get information
  const datasetInfo = await getCorporaSubset(cid, 'conversations');

  return {
    props: {
      datasetInfo,
    },
  };
};

export default CorporaPage;
