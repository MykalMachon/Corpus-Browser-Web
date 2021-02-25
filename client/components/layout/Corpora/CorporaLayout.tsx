import { Spacer, Box, useToast } from '@chakra-ui/react';
import { getCorporaSubset } from '@utils/data';
import { useRouter } from 'next/router';
import { FC, useEffect, useReducer } from 'react';
import CorporaNav from './CorporaNav';
import CorporaTable from './CorporaTable';

type CorporaLayoutProps = {
  cid: string;
  subsetRows: any;
};

const CorporaLayout: FC<CorporaLayoutProps> = ({ subsetRows, cid }) => {
  const toast = useToast();
  const router = useRouter();

  const initCorporaState = {
    corpora: cid,
    subset: 'conversations',
    data: subsetRows,
    isLoaded: true,
  };

  const corporaReducer = (state, action) => {
    switch (action.type) {
      case 'SET_CORPORA':
        router.push(`/corpus/${action.payload.name}`);
        return { ...state, corpora: action.payload.name, isLoaded: false };
      case 'SET_SUBSET':
        return { ...state, subset: action.payload.name, isLoaded: false };
      case 'UPDATE_DATA':
        return { ...state, data: action.payload.data, isLoaded: true };
      case 'UPDATE_DATA_ERR':
        return { ...state, isLoaded: true };
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
        dispatch({ type: 'UPDATE_DATA_ERR' });
        console.error(err);
      }
    };
    getSubset();
  }, [state.subset, state.corpora]);

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
