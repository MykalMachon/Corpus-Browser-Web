import { Flex, Select, Center } from '@chakra-ui/react';

const CorporaNav = () => (
  <Flex
    px={6}
    py={4}
    borderBottom="1px"
    borderTop="5px"
    borderColor="teal.300"
    justifyContent="space-between"
  >
    <Center>
      <Select defaultValue="Gap-Corpus">
        <option>Gap-Corpus</option>
        <option>Other-Corpuse</option>
      </Select>
    </Center>
    <Center>
      <Select>
        <option>Conversations</option>
        <option>Utterances</option>
        <option>Annotation</option>
        <option>Analsysis</option>
      </Select>
    </Center>
  </Flex>
);

export default CorporaNav;
