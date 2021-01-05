import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { getCorporaDownloadUrls } from '@utils/data';
import CorporaSelector from '@components/corpora/CorporaSelector';
import CorporaEditor from '@components/corpora/CorporaEditor';

const Index = ({ corporaDatasetUrls }) => {
  const [selectedCorpus, setSelectedCorpus] = useState<Record<
    string,
    string
  > | null>(null);

  return (
    <>
      <h1>Corpus Browser Web</h1>
      <p>This is the corpus browser web app!</p>
      {selectedCorpus ? (
        <CorporaEditor corpora={selectedCorpus} />
      ) : (
        <CorporaSelector
          corpora={corporaDatasetUrls}
          setCorpus={setSelectedCorpus}
        />
      )}
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
