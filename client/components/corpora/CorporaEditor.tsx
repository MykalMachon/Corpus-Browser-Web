const CorporaEditor = ({ corpora }) => {
  const selectFolder = async () => {
    try {
      const [fileHandle] = await window.showOpenFilePicker();
      console.log(fileHandle);
    } catch (err) {
      console.error('failed to select file');
    }
  };

  return (
    <main>
      <p>You selected {corpora.name}</p>
      <button onClick={selectFolder}>Select the utterances.json file</button>
      <button onClick={selectFolder}>Select the speakers.json file</button>
      <button onClick={selectFolder}>Select the conversations.json file</button>
      <button onClick={selectFolder}>Select the corpus.json file</button>
      <button onClick={selectFolder}>Select the index.json file</button>
    </main>
  );
};

export default CorporaEditor;
