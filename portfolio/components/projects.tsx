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
        <Section>
          <WorkGridItem
            id="Calculator"
            title="A colourful calculator"
            thumbnail={"/public/images/Screenshot 2023-10-03 at 17.15.10.png"}
            link="https://github.com/DevAranCarter/Calculator.github.io"
          >
            A colourful calculator
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Admin-dash"
            title="An admin dashboard"
            thumbnail={"/public/images/Screenshot 2023-10-03 at 17.14.09.png"}
            link="https://github.com/DevAranCarter/AdminDashboard.github.io"
          >
            An admin dashboard example
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from "../components/chakra";
