import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { getCorporaSubset, getCorporaUrls } from '@utils/data';
import CorporaLayout from '@components/layout/Corpora/CorporaLayout';
import { useEffect, useState } from 'react';

const CorporaPage = ({ subsetRows }) => {
  console.log(subsetRows);

  return (
    <main>
      <CorporaLayout subsetRows={subsetRows} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cid } = context.params;
  // TODO get information
  const subsetRows = await getCorporaSubset(cid, 'conversations');
  return {
    props: {
      subsetRows,
    },
  };
};

export default CorporaPage;
