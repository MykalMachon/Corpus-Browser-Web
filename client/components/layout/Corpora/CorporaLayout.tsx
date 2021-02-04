import { Spacer, Box, useToast } from '@chakra-ui/react';
import { getCorporaSubset } from '@utils/data';
import { FC, useEffect, useReducer } from 'react';
import CorporaNav from './CorporaNav';
import CorporaTable from './CorporaTable';

type CorporaLayoutProps = {
  subsetRows: any;
};

const CorporaLayout: FC<CorporaLayoutProps> = ({ subsetRows }) => {
  const toast = useToast();

  const initCorporaState = {
    corpora: 'gap-corpus',
    subset: 'conversations',
    data: subsetRows,
    isLoaded: true,
  };

  const corporaReducer = (state, action) => {
    switch (action.type) {
      case 'SET_CORPUS':
        return { ...state, corpus: action.payload.name };
      case 'SET_SUBSET':
        return { ...state, subset: action.payload.name };
      case 'UPDATE_DATA':
        return { ...state, data: action.payload.data };
      default:
        throw new Error('improper state mutation');
    }
  };

  const [state, dispatch] = useReducer(corporaReducer, initCorporaState);

  useEffect(() => {
    const getSubset = async () => {
      try {
        const data = await getCorporaSubset(state.corpora, state.subset);
        dispatch({
          type: 'UPDATE_DATA',
          payload: {
            data: data,
          },
        });
      } catch (err) {
        toast({
          title: 'An error occured',
          description: `Unable to load the ${state.subset} subset`,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        console.error(err);
      }
    };
    getSubset();
  }, [state.subset]);

  return (
    <div>
      <CorporaNav dispatch={dispatch} state={state} />
      <Box>
        <Spacer pt="5em" />
        <CorporaTable rows={state.data} />
      </Box>
    </div>
  );
};

export default CorporaLayout;
