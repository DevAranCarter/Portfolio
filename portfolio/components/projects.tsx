import { Container, Heading, SimpleGrid, Divider, Center } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Works = () => (
  <Layout title="Work">
    <Container pt={{base:'700px', md:'400px', lg:'200px', xl:'100px'}}>
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

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={'/images/goldenboi.png'}
            link="https://github.com/felwintrr/fantom-dapp"
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={'/images/FFC04917-5D22-40B0-A793-26E06484DEB4_1_105_c.jpeg'} title="Menkiki"
          link="https://github.com/felwintrr/fantom-dapp">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
