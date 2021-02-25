import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { getCorporaSubset, getCorporaUrls } from '@utils/data';
import CorporaLayout from '@components/layout/Corpora/CorporaLayout';
import { useEffect, useState } from 'react';

const CorporaPage = ({ corpora, subsetRows }) => {
  return (
    <main>
      <CorporaLayout cid={corpora} subsetRows={subsetRows} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cid } = context.params;
  const subsetRows = await getCorporaSubset(cid, 'conversations');
  return {
    props: {
      corpora: cid,
      subsetRows,
    },
  };
};

export default CorporaPage;
