import { ReactNode } from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  Flex,
  Avatar,
  Stack,
  Link,
  Button,
  Menu,
  Center,
  Image,
  Container,
  Grid,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxWidth={"full"} p={0} id="about"
    maxHeight={"full"}>
      <Flex
        h="100vh"
        py={[0, 10, 20]}
        pt={{ base: "20px" }}
        direction={{ base: "column", md: "row" }}
        textColor={"blackAlpha.900"}
      >
        <VStack
          w="full"
          h="full"
          alignItems={"center"}
          p={2}
          pt={{ base: "30px" }}
        >
          <Heading>Devin Carter.</Heading>
          <Heading>Software Engineer.</Heading>
          <Text>Web3 Full stack Creator</Text>
          <Image
            w={{ base: "200px", md: "280px", lg: "300px" }}
            h={{ base: "240px", md: "350px", lg: "380px" }}
            borderRadius="full"
            src="images/FFC04917-5D22-40B0-A793-26E06484DEB4_1_105_c.jpeg"
            alt="Picture of me"
          />
        </VStack>

        <VStack
          w="full"
          h="full"
          alignItems={"center"}
          pt={{ base: "20px", md: "120px" }}
          pr={{ md: "50px" }}
        >
          <Heading>Skills</Heading>
          <Flex>
            <Stack pr={{ base: "10px", lg: "40px" }} pb="40px">
              <Image
                borderRadius="full"
                boxSize="50px"
                alt="Chakra UI"
                src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
              />
              <br />
              <Image
                borderRadius="full"
                boxSize="50px"
                alt="Chakra UI"
                src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
              />
              <br />
              <Image
                borderRadius="full"
                boxSize="50px"
                alt="Chakra UI"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png"
              />
            </Stack>
            <Stack pr={{ base: "10px", lg: "40px" }}>
              <Image
                borderRadius="full"
                boxSize="50px"
                alt="Chakra UI"
                src="https://cdn.worldvectorlogo.com/logos/java.svg"
              />
              <br />
              <Image
                borderRadius="full"
                boxSize="50px"
                alt="Chakra UI"
                src="https://iconape.com/wp-content/files/xa/367772/png/367772.png"
              />
              <br />
              <Image
                borderRadius="full"
                boxSize="50px"
                alt="Chakra UI"
                src="https://gitconnected.com/public/images/tutorials/svg/solidity.svg"
              />
            </Stack>
            <Stack>
              <Image
                borderRadius="full"
                boxSize="50px"
                alt="Chakra UI"
                src="data:image/png;base64,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"
              />
              <br />
              <Image
                borderRadius="full"
                boxSize="50px"
                alt="Chakra UI"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4TDhEODhAQEREOERASDg4REREREQ4SFxIjFxcSFhYcHiohGRsmHBQWIjMmJistMDAwGCA1OkIuOSo7MC0BCgoKDw4PHBERHDImHiMvLy8vLy0vLy8vMi8vLy0vLy0tLy8vLTEvLS8vLy8vLzEvLy0tLS0vLy8vLy0tLy0vL//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYEBQcCAwj/xABGEAACAQEDBAoPBwQDAQAAAAAAAQIDBAUREiExUQYHQVJhcZGTodETFBUWFyIyM1Nyc4GSseEjNKKys8HSNUKC8CRidML/xAAbAQACAwEBAQAAAAAAAAAAAAAAAQMEBQIGB//EADgRAAIBAQMJBQYGAwEAAAAAAAABAgMEETEFEhMhUVKBkaEyQWFx0RQVIrHB8DNCU2Ki4SNygjT/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAGvvi86VnoSr1X4scyivKnJ6IRWt/UaTbuQm0lezLrVYwi5zlGMYrGUpNRjFa23oKpeuz6yU8Y0VOvJbsfEp4+s879yaKFf2yC0WqeVVlhBP7OjFvIhq9aXC+jQao0KdiWM+Rn1LY3qgWy27YFuniqap0luZMcuS98sU+Q09fZJeE/KtVb/AAm6a5IYGqILUaUI4Jcis6s3i3z9DJqW+vLyq1SXrVJv5s+EpN6W3xvEgg7SuOb2FJrQ2uJ4GRTt9oj5FepH1as4/JmKBagTfcbez7J7xh5Fqrf5y7L+fE3Nh2xLbDBVoUay3czpzfvWb8JUDyRypQeKRJGrNYNnW7o2e2Kq1Gq5Web9Jh2NvgqLMv8ALAtUZJpNNNNYprOmtZ+ejebG9k9oskkot1KLfj0JPxeFwf8AY+h7pVqWRYw5Fqna3hPmdrBg3VeVK0UY16MsqE/dKL3YyW40ZxQau1MvJ360AAAAAAAAAAAAAAAAAAAAAAAA5ftm2+UrVTs+PiUaeU1rnPdfFFLlZ1A5Hti/1Gfs6X5S1Y1/k4Mq2x/4+KKyX/YjsLpSpQtNsTm6iUqVHFxjGDzqU8M7b04aMHn4OfT0PiZ3yx1YTpQnTwyJwjKGGjJccV0Fm2VJRis3vK1kpxlJ53cae27ELvqRcewRg9yVL7OSevNmfvTOW7ILoqWW0SoTeUsFKnUwwU4PRLDceZp8KO5HM9tarB17PBYZcadRz15MpLJ/LIgslWWfmt3ontVKOZnLUyjnkEmiZwAPIDABAhggAQy27W98SpWxWeT+ytXi4bkaqXiy9+GTw4rUdcOA3PJq10GtKr0WuNVFgd+M+1xSkntNCyP4WgACoWgAAAAAAAAAAAAAAAAAAAAcj2xv6jP2dP8AKdcOR7Y/9Rn7Kn8i1Y/xODKts/D4oq5ati2zOdmgqNWDq0U3k4PCpTxztRxzSXA8NOncKsQaU4RmrpGdCcoO+J0i27ZFHIfYKFaU8M3ZciMFwvJk2+LMc+t9uqVqs61WWVObxk9CWpJbiSzGMSR06MKfZR3Uqzn2mADySkYAIEMEACGCAAAy7p+9UPbUv1Ed/OAXT96oe2pfqI7+ULZii/ZOy/MAAplsAAAAAAAAAAAAAANJfmyWy2XNVm5TwxVGGEpvhe5FcbRTbdtjWmT+wo0qcdc8qrLjzYJdJNToTmr0tRDOvCGpvWdNByLv8vH0lPmojv8ALx9JT5qJJ7HU8OZF7ZT8TrpoL32JWS01XWq9ky3GMXkzyVgtGbAoPf7ePpKfNRI7/bx9JT5qJ1Gy1Yu9PqKVppSVzXQuXg+u/VV5z6Dwe3fqrc59Cnd/t4+kp81E89/t5b+nzUTvRWje6nOlobvQuXg9u7VV5z6Dwe3dqq859Cm9/t5b+nzUR3+3l6SnzURaKvvdQ0tDd6Fy8Hl3aqvOPqHg9u7VW5z6FM7/AG8t/T5qI7/ry39Pmohoq+91DS0N3oaS+rNClaq1KGORSqzhDF4vJjLBYswT7Wy0zq1J1Z4OdScpzaWCcm8XmPiXFfdrKjx1AgAYgAQIZl3R96oe2pfqI/QB+f7o+9UPbUvzo7zam1Tk1maTwa3DPt0s3XsTZfsavTXifcFd7Zqb+fxMds1N/P4mea9+U9x80avsj2liBXVaqi0Sny4mTQvSSzTWP/bRh1klLLNCTuknHxxXQ5lZZLDWbkHinUUllReKe6ezWTTV6KwAAwBTtm2yntZdr2drs81jKeZqhF6HhvnuL3vcxsN+XlGz2apaJZ+xx8WO/m80Y+9tHEbTXnUqTqTllTqScpye63+xbstFTedLBFS1VnBZscWeKk5Sk5SblKTblKTblJvS23pZ5BBpmaCQQAA8gkQAA8gMAECGCABDBAAAACBDAAADKun7zZ/bUv1Ed7tXm5eqzgd0feqHtqP6iO+Wrzc/VfyM3KHZ4M0LD9SvEAHzdHowAeRjMmw2pwl/1eldRvotNJrOnoesrBt7nr4xcHphnXEzbyPa2paGWDw88WuKvfn5lO1UtWeuJswAekKBzzbTvDPRsqeurUX4Yf8A30HPzfbOLTl3jXeOKpuNOPAoxSa+LKNAbNCObTS+9Zj15Z1RsEgglIgeQSIAAeQGACBDBAAhggAAABAhgAAAIBAhmw2P0nO22aCz5Voo48SqJt8iZ3a1ebn6rOV7V91OpbHaZLxLNF4PXVmslLhwi5Pg8XWdNvOeFJrfNJcuJk5TqKMJPZF/JmlYYPV4s0oB5Pnp6EAEAAMi7quTVjqbwfy+ZjkY4Z1uaDqnUdOamsU7+QpRzk1tLYDG7dgD3emo7yMfRz2HEL4qZVqrz39arLlqNmIKksZN623ysg31hcYLd7vB5BICAB5AYAIEMEGRYrDWrSyKFKpVluqEXLJ4W9CXGWGzbX94zWMoUqXBUqrH8CkcSnGOLuO4wlLBXlWILn4Nrf6Wy85W/gPBrb/S2XnKv8DjTQ2negqbCmAufg1t/pbLzlb+BHg1t/pbLzlb+AaaG0ehnsKYC5+DW3+ksvx1v4DwaW/0tl+Ot/AWnp7R6CewphBc/Bpb/SWX4638D6UNrK1t/aV6EFrh2Sp0NRB14bQ0E9hRzZ3BcVotdXsdGPiprstWSfY6a4XuvUlnfFnXQrs2trJDCVepUrtf2+ahyJ5X4i42WzU6cFTpQjThHNGEIqMVxJEE7UsIksLK/wAxiXHdVKzUIWekvFjnlJ+VOT0zlwvqW4Y17V8ZZC0Q08e7/vGZNut6inGDxlutaImoPI5Xt6ktDB37z+nPHltu27LQu+J8CACDALwAAhggHkBnrF6yCAF4XHKprBtam0eDLvWnk2mtDeVaseSo1+xin1xO9HhmrncADyMAAQIYLXsM2JO1fb1sqFni2klmlXaedJ7kVob9y1rR3FdsrTaqdnjilOXjyX9kEsZS48E8OHA7nZ6EKcI06cVGFOKjCK0RilgkVbTWcVmrFlqz0VJ5zwR4sVjpUqap0YRhCOiEEkvq+EVrXTjmbz6lpMG121yeTB4LXr+hhnkbXlhKTjSV/i8OC7/PDzNunZtXxcjZSvRbkHynjuq95+L6GAQZjypan+fpH0J1QhsNh3Ve8/F9B3Ve8XxfQ1xAveVq3+kfQegp7DY91nvF8X0HdZ7xfF9DXEB7ztW/0j6D9np7DZd1nvF8X0Hdd7z8X0NaQL3nat/pH0D2ensNhK95bkUuNmNWtlSWZyzalmR8DyR1LbXqK6U3dy+Wo7jRgsEACCoSgAAMEA8gMAAQwCMAAFB2Z2fsd42mOuplrhy4qfzkzTl221LDk2ijaEs1Wm4S9aDxz8an+Eo59Zoyvgn4Hia0c2bQAIJDgEACGX/amsadS0V2vIhClB+s8qX5YcpfLyrYQUVpl8t0q21Sv+HVe67Q1yU49bLBekvHS1L9zzeW6zhTm14R++BtWGCuiuJhgEHijXBAIGMAEAMAEHIAA8gMAEAMAAQwQAAweQBDBCTeZaXmRJk3VRyqsXuR8Z+7R0klKm6k1Bd7S5ilLNTlsN32jAGUD3eho7qMXST2lf2a3U7RYqkILGpT+1pLdcorPFccXJcbRxfE/RByfbA2NujVdqox+xrSxmloo1G86eqMno4XhqL9kq3fA+Bn2ulf8a4lPIALxSBAAAdU2qPuVb/0y/Sgb29POPiRotqj7lV/9Mv0oG9vTzj4keUy/wDhP/ZfJm9Ye7yMU8gg8kagAIAYAIOQAB5AYAIAYAAhggABg8gCGADyAwb657Nk08p6Z4PiW518hg3Zd7k1Oa8VaFv/AKFgPQZHsTv081/rx7/otuvuuvz7XW/IuPoAAehKAPlWoxnCUJxUoyTjKMknGSelNbqPqAA5psh2vZpupYWpReftecsJR4ITeZrglhxspdruy0Um1Wo1qeG+pySfE8MH7jv4LULXJY6yrOyxeGo/O+RLU+RkZEtT5GfokHftn7ev9HHsf7un9lJ2qE+0quKa/wCTLT7KBvL184+JG6NLevnHxIwMuSzqLltkvkzTscc2SXgYYBB5Q0wAQcgACBM6R91YqzWKg8HnWddZ67Qrbzp+psaVuoqKTnnSSeaWriPfdGjv+iXUbysFh/W/lD0KWmrbvRmp7Qrbzp+pHaFfedK6zb90aO/6JdQ7o0d/0S6g932D9b+UPQNNW3OjNR2hX9H0rrHaFf0fTHrNv3Rob/ol1Ed0qG/6JdQe77B+t/KHoPT1tzozUdz6/o+ldY7n1/R9K6zbq8aDaSnnbwWaXUZpLTyTZanYqN+Ti/kjmVqqx7UbuDK13Pr+j6Y9ZHc6v6PpXWWYHfuOhvS6egvbZ7EVynddZ/2qPC5L9sTPst0Qjnm8t6tCNoCxRyVZ6bvucn+7X0SS6Ec7VUl4eQABpFcAAAAAAAAAAAAABpL184/cbs0l6+cfEjKyz/5/+l8mWLL2+BhgEHlTRAAAZBAIAZJAAhggGfZ7qlJZU3k46Fhi/fqJqFnqVpZtNX/f39Dmc4wV8mYB5NhabqlFNweVrWGD92s14V7PUoyzaiu+9v34hCcZq+LPdDy4+si1lTo+VHjRbDdyF2J+a+pTtuMQADdKIAAAAAAAAAAAAAAAAAAAANJe3nHxI3Zq74pZlUW5mlxbjM3K0HKzO7ud/Dv+d/Anszun5mrAB5I0weQQAwABDBAAAfe7op1oJ6NPIsf2LKVOnNxkpR0xawN/Z7fTmvKSe6m8OTWegyLXpxjKm3dJu9X96u7vK58yjbKcm1JYGaVi8IpVZpaMfnn/AHN1abwpwWZqUtyKeOf9ivVJuUnJ6ZN4+8WWrRTko04u9p3u7u1YcfoOxwkm5PAmj5ceNfMtpVbFTcqsYrXi/dp+RaiXISejm/FdF/aFbn8SAANwogAAAAAAAAAAAAAAAAAAAA8TimmnnT0rWewJoDRW6wyhjKOeHTH/AHWYRajBr3bTlnXivWuowLXkZ351B/8AL+j+jw29xdpWrunzNEDOq3XUXk+MuB4dDMWdlqLTCS5cOUx6lkrU+1Brhq5q9FuNSMsGfMgPhIxK2ctpLcSeRiRiJyW0dxJB6jCT8mPQz7wu+tLRDDjwXzJYUZ1OzFvyV/yOXOMcXcYpMINtRim29CWlm1o3Lv5rij1vqNnZ7NCCwhFLXut8bNKz5HrTf+T4VzfLDnrWwr1LXCPZ1sx7tsOQsqWecln4OBGeAemo0YUoKEFcl98zNnNyd7AAJTkAAAAAAAAAAAAAAAAAAAAAAAAAAAADqOImeamg1lYAqZQLFA+cTOsoBUsfaJauBlgA2auJSQABEMAAAAAAAAAAAAAAAAD/2Q=="
              />
              <br />
              <Image
                borderRadius="full"
                boxSize="50px"
                alt="Chakra UI"
                src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
              />
            </Stack>
          </Flex>
        </VStack>

        <VStack
          w="full"
          h="full"
          alignItems={"center"}
          pt={{ base: "20px", md: "180px" }}
          pr={{ md: "50px" }}
        >
          <Heading>About Me</Heading>
          <Text fontSize={{ base: "15px" }}>
            I am currently a student studying BSc (Honours) Computing and IT at
            the Open University where I am on my way to getting a First Class
            Honours. Beyond university, my passion in computer science drives
            me to be on the lookout for other things to learn. For example, I am
            currently studying the Harvard CS50x - Introduction to Computer
            Science.{" "}
          </Text>
          <Text fontSize={{ base: "15px" }}>
            {" "}
            I am currently looking for either a junior or intern role, where im
            looking forward to working on a challenging and impactful problem
            space. I am proficient in python and java, at the same time im open
            to learn and work with any tech stack. I decided to pursue
            software engineering because I am passionate about technology, enjoy
            problem solving and want to have real world impact.
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};
export default About;
