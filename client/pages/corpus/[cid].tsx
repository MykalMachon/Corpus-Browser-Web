import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { getCorporaSubset, getCorporaUrls } from '@utils/data';
import CorporaLayout from '@components/layout/Corpora/CorporaLayout';
import { useEffect, useState } from 'react';

const CorporaPage = ({ datasetInfo }) => {
  const router = useRouter();
  const { cid } = router.query;

  const [rows, setRows] = useState(() =>
    Object.keys(datasetInfo.data[0]).map((idx) => datasetInfo.data[0][idx])
  );

  return (
    <main>
      <CorporaLayout corporaData={rows} />
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
