import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Center,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

const Works = () => (
  <Layout title="Work">
    <Container
      pt={{ base: "650px", md: "400px", lg: "200px", xl: "100px" }}
      textColor={"blackAlpha.900"}
    >
      <Center>
        <Heading fontSize={50} mb={4} id="work">
          Work
        </Heading>
      </Center>

      <SimpleGrid columns={[1, 1, 2]} gap={6}> 
        <Section>
          <WorkGridItem
            id="Google-Homepage"
            title="Google Homepage recreation"
            thumbnail={"/images/Screenshot 2022-06-02 at 14.13.03.png"}
            link="https://github.com/DevAranCarter/google-homepage"
          >
            A recreation of the Google Homepage
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="NoMoreWaste"
            title="NoMoreWaste Application"
            thumbnail={"/images/Screenshot 2023-05-03at13.50.01.png"}
            link="https://github.com/jannikuhl/NoMoreWaste"
          >
            An app designed to reduce food waste{" "}
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="Food pricing app"
            title="Dish pricing application"
            thumbnail={"/images/Screenshot 2023-05-03 at 15.17.11.png"}
            link="https://github.com/DevAranCarter"
          >
            An app that allows users to effectively price their dishes.{" "}
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from "../components/chakra";
