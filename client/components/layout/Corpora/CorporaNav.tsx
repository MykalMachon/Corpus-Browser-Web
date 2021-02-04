import {
  Flex,
  Select,
  Center,
  Heading,
  Grid,
  Breadcrumb,
  BreadcrumbItem,
} from '@chakra-ui/react';
import { FC, ChangeEvent } from 'react';

type CorporaNavProps = {
  dispatch: Function;
  state: any;
};

const CorporaNav: FC<CorporaNavProps> = ({ dispatch }) => {
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
      gridTemplateColumns="repeat(3, 1fr)"
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
              {' '}
              <Select
                defaultValue="Gap-Corpus"
                onChange={dispatchCorporaUpdate}
              >
                <option>Gap-Corpus</option>
              </Select>
            </BreadcrumbItem>
            <BreadcrumbItem>
              {' '}
              <Select onChange={dispatchSubsetUpdate}>
                <option value="conversations">Conversations</option>
                <option value="utterances">Utterances</option>
                <option value="speakers">Speakers</option>
                <option value="corpus">Corpus</option>
              </Select>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </Center>
      <Center>
        <Heading as="h2" size="md">
          Corpus Browser
        </Heading>
      </Center>
      <Center justifySelf="end">Annotations</Center>
    </Grid>
  );
};

export default CorporaNav;
