import { getCorporaFolder } from '@utils/filesystem';
import { useState } from 'react';

const CorporaEditor = ({ corpora }) => {
  const [corporaFiles, setCorporaFiles] = useState([]);

  const selectFolder = async () => {
    const files = await getCorporaFolder();
    setCorporaFiles(files);
  };

  return (
    <main>
      <p>You selected {corpora.name} </p>
      <button onClick={selectFolder}>Select the unzipped corpus</button>
      <hr />
      <p>Corpora's Files:</p>
      <ul>
        {corporaFiles.map((file) => {
          return <li>{file[0]}</li>;
        })}
      </ul>
    </main>
  );
};

export default CorporaEditor;
