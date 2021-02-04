import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { getCorporaDownloadUrls } from '@utils/data';
// CHAKRA COMPONENTS
import {
  Box,
  Container,
  Divider,
  Heading,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';

const Index = ({ corporaDatasetUrls }) => {
  const [selectedCorpus, setSelectedCorpus] = useState<Record<
    string,
    string
  > | null>(null);

  console.log(corporaDatasetUrls);

  return (
    <Container>
      <Box>
        <Heading as="h1" size="xl">
          Corpus Browser Web
        </Heading>
        <Text py="2">
          This is the corpus browser web app! Select the corpus you would like
          to work with:
        </Text>
      </Box>
      <Divider />
      <ul>
        {corporaDatasetUrls.datasets.map((dataset) => (
          <li key={dataset}>
            <Link href={`/corpus/${dataset}`}>
              <ChakraLink color={'teal.500'}>{dataset}</ChakraLink>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
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
