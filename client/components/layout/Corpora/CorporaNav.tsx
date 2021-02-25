import {
  Flex,
  Select,
  Center,
  Heading,
  Grid,
  Breadcrumb,
  BreadcrumbItem,
  Badge,
} from '@chakra-ui/react';
import { FC, ChangeEvent } from 'react';

type CorporaNavProps = {
  dispatch: Function;
  state: any;
};

const CorporaNav: FC<CorporaNavProps> = ({ dispatch, state }) => {
  const dispatchSubsetUpdate = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'SET_SUBSET',
      payload: {
        name: e.currentTarget.value,
      },
    });
  };

  const dispatchCorporaUpdate = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'SET_CORPORA',
      payload: {
        name: e.currentTarget.value,
      },
    });
  };

  return (
    <Grid
      gridTemplateColumns="repeat(2, 1fr)"
      px={6}
      py={4}
      borderBottom="1px"
      borderTop="5px"
      borderColor="teal.300"
      position="fixed"
      width="100%"
      background="white"
    >
      <Center justifySelf="start">
        <Flex>
          <Breadcrumb>
            <BreadcrumbItem>
              <Select
                size="sm"
                defaultValue={state.corpora}
                onChange={dispatchCorporaUpdate}
                disabled={!state.isLoaded}
              >
                <option value="gap-corpus">Gap-Corpus</option>
                <option value="persuasionforgood-corpus">
                  PersuasionForGood-Corpus
                </option>
              </Select>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Select
                size="sm"
                onChange={dispatchSubsetUpdate}
                disabled={!state.isLoaded}
              >
                <option value="conversations">Conversations</option>
                <option value="speakers">Speakers</option>
                <option value="corpus">Corpus</option>
                <option value="utterances" disabled>
                  Utterances (WIP)
                </option>
              </Select>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </Center>

      <Center justifySelf="end">
        <Badge colorScheme="teal">Annotation View</Badge>
      </Center>
    </Grid>
  );
};

export default CorporaNav;
