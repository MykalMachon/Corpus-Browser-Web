const CorporaSelector = ({ corpora, setCorpus }) => {
  return (
    <div>
      <h2>List of corpora</h2>
      <ul>
        {corpora.map((dataset) => {
          return (
            <li key={dataset.url}>
              <button
                onClick={() => {
                  setCorpus(dataset);
                }}
              >
                {dataset.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CorporaSelector;
