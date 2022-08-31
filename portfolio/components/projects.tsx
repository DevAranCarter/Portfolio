import { Container, Heading, SimpleGrid, Divider, Center } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Works = () => (
  <Layout title="Work">
    <Container pt={{base:'650px', md:'400px', lg:'200px', xl:'100px'}}
    textColor={"blackAlpha.900"}>
      <Center>
      <Heading fontSize={50} mb={4} id='work'>
        Work
      </Heading>
      </Center>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="NFT-template" link="https://github.com/felwintrr/fantom-dapp" title="NFT template" thumbnail={'/images/Screenshot 2022-06-02 at 14.08.41.png'}>
            A website that NFT artists can customise for their own NFT project.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Google-Homepage"
            title="Google Homepage recreation"
            thumbnail={'/images/Screenshot 2022-06-02 at 14.13.03.png'}
            link="https://github.com/felwintrr/fantom-dapp"
          >
            A recreation of the Google Homepage
          </WorkGridItem>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
