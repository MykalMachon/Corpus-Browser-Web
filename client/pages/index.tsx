import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { getCorporaDownloadUrls } from '@utils/data';
import CorporaSelector from '@components/corpora/CorporaSelector';
import CorporaEditor from '@components/corpora/CorporaEditor';

const Index = ({ corporaDatasetUrls }) => {
  const [selectedCorpus, setSelectedCorpus] = useState<Record<
    string,
    string
  > | null>(null);

  console.log(corporaDatasetUrls);

  return (
    <>
      <h1>Corpus Browser Web</h1>
      <p>This is the corpus browser web app!</p>
      <hr />
      <ul>
        {corporaDatasetUrls.datasets.map((dataset) => (
          <li key={dataset}>
            <Link href={`/corpus/${dataset}`}>
              <a>{dataset}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const corporaDatasetUrls = await getCorporaDownloadUrls();
  return {
    props: {
      corporaDatasetUrls,
    },
  };
};

export default Index;
