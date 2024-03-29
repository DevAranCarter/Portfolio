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
const Contact = () => {
  return (
    <Container id="contact" pt={{ base: "10px", md: "10px", lg: "100px" }}
    pb={{base: '100px'}} textColor={"blackAlpha.900"}>
      <Center>
        <Heading>Contact</Heading>
      </Center>
      <Flex
        h="50vh"
        py={[0, 10, 20]}
        pt={{ base: "20px" }}
        direction={{ base: "column", md: "row" }}
      >
        <VStack
          w="full"
          h="full"
          alignItems={"flex-start"}
          pt={{ base: "5px", md: '20px' }}
          pl={{base: '90px', md: '0px'}}
          textColor={"blackAlpha.900"}

        >
          <Heading>Email</Heading>
          <Link href="mailto:devinacarter97@gmail.com" pl="5px">
          <Avatar
            size={"lg"}
            src="http://cdn.onlinewebfonts.com/svg/img_262951.png"
            backgroundColor={"white"}
          ></Avatar>
          </Link>
        </VStack>
        <VStack
          w="full"
          h="full"
          alignItems={"center"}
          pt={{ base: "5px", md: '17px' }}
          textColor={"blackAlpha.900"}
        >
          <Heading>GitHub</Heading>
          <Link href="https://github.com/DevAranCarter">
          <Avatar
            size={"lg"}
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          ></Avatar>
        </Link>
        </VStack>
        <VStack
          w="full"
          h="full"
          alignItems={"flex-end"}
          pt={{ base: "5px", md: '17px' }}
          pr={{base: '80px', md: '0px'}}
          textColor={"blackAlpha.900"}
        >
          <Heading>Linkdeln</Heading>
          <Link href="https://www.linkedin.com/in/devin-carter2/" pr={{base:'20px', md: '30px'}}>
          <Avatar
            size={"lg"}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAfrv///8AebkAc7YAfLoAd7ju9fmGtdYmiMCCstUAcbWuy+Lz+PsAdbcAeLj7/f50qtGlxt9Wm8lkoczn8Pfe6vPS4u/Q4e5Fk8XA1+nH3OuRu9lOl8cMgbx8rtO50uY2jcKnyOCawNxtps/hjYWTAAALNElEQVR4nN2da4OqIBCGlcvmYprp2t1q2///Hw92tdSBMQg876fzoU4+KzADzCUIrWtabuLTJCt2q6iqgiCoqmi1K7LJKd6UU/s/H9j8z8vDtogoTTgnhDEWsOAi+S/GCOE8oTQqtofS5kPYIizj/VHQRIIFsCQqp+K4j21h2iAs5wWhnKjYnjgJT9JiboPSNOFsnTGaKt9c99tMKcvWM8NPZJRwGucC9+463qXYxUbXH4OEh53g79DdKSXkwdybNEW4yGhiAu8KmdBsaejJjBDO5lVCjOFdRJJqbuRFGiD82VNuGO8iTvc/HhAucmH69T1ERL5wTLhcCXOzr0tMrN6ckG8RLlbULt+Zka7eeo9vEP7klt/fnVHkbzg7gwmn2Yf4LozZYC9gKOHcuHmARejpo4SLyo59gJRUw6bjEMLZJwfoQ4z+DXEBBhCuyWcH6EOErD9AOCs+YCH6xGiBfo1Ywo2zF3gRIRu7hN9OZmBTTHxbJPw6fn4JbYtHX7YIN0Y2uO+LJZiRiiDcOh+hNzGxtUGYJ67BGkpy44TTyO0a+ioS6TqqmoRl6ssIvYmlmvsNPcKNcA3UFhN6640WYewhoJSITRGe/ASUiDo7Kg3Cra+AElHDaqgJJ9Q1ByA6eZ/Qa0BpGJWIKsKt34DyLaoGqoLQ20XmIdVyAxN6aiaepTAaIKGPhr5DsOmHCMtxAEpEyIEDCKep6n+uAyrUsQgfUAq44QBhBD864zTIs+99EQnuet/BoiGEOfjYTKzi22HCbJNRx4ykf7/YS7iFNryMvtyVzCYOzxhrJb1msY8QXEYZb5/Muj6l6l1Qewi/oEOnnv31t9NjDsZ7TuB6CKFVhhx7/lrgwLYu1vNY3YTfwIgD1q2904HKu4+KOwnBSUiB89ij0+Wmeyp2Ec6gwC3+2w8Yfjn1ghjRJSwA4wbZVqmt0g+yKVLoEa6hLSE/gIQzt9tJ2nG/2CYEx2j3QGgoc+rcMNK+XmwT/kHPSFRXW0u3Z/8kUxMuwHHW4cy8yPGph2iFM7QIK3DBh0zFRSu3/imrVIRz2GgnKkDHE1GOsjlMOIWnUfsv1NLW9V4xeXGaXwhVbwC2hmdC1xfhr4vNM+GPyicZwTsMxHPY7TNhrlomuJLQ9TyUU+l5v/9EuFC6ld6vpbWeLUaAezquvJX04LafrfoIl2prTVQXIQsPCAPaDJxuEmoMMMYUhN/Op2Hw8hIbhOpZKKUK1nFtKy5qzsQGoXIhrdV3GnLVyen+8K7mcvogVNrCixJogzj15baxYRMfhHu9GcRevaKmdu5NxUVk3ybU3p0D49S5x/YQvW+F74SKTUVDZNcD+OvRbdxji3EnrPS/na46Q5H9ikqpXglRlpoE7cSAqVexi3JFXLwQgqczbYm/Fwf10xkmSt03UVdC9CkgEcUjJ7mcEE/Chxuiz4QH/BBjnB6zyXa733H6VnazJd0M95VwmCFjhKTER7pabNcknHq1DBqSmDYIY39MtTnxuEGo5XSPTVf3+0w4+x8HqRymszvh+n8cpLcriDOh+/MxK7oY/TOhD4FbD52r85iIJrscudSEpS/71nOZGsFWRSZV7KKEJsMKwVxFyyvh3JOjB0LJX7xo7lu+lvM/MtzjTedXwgL1Z2IcUMev9H/4+Wc5/+5OZS631cCQMlZcCVEZPyyP+3VojYZ03v/phhVmvIIifZfDihswfiHETUP4TLhlWClwqjO5D7+UwQEQ8iHzITa7nogB1mXDEgIXHffTY6HOmgjDTYVfLmrHLdA+ZLNGSCrNLLQMvebXR24BNlTLOCEiWfKAnY31uWDQ8VQfJdQaoTeh731ETYi094YJxWtgAawSeVoil5ogPODcbrOE4hcFiM6QSA6SEHnxbpSwPzq7V2sUItlKQpxHY5Qw+UMDSiuKGXPSqwlUaRU2CdWRHV3CPDCLJCHSyBgkzIZVf0JNRRoG2Cs/g4RDy1thXBQ6DUqkiTFIOFQzxCMnZbBBntF4QIiJteabAHtU6gMhYmbxODghd9A+ECJuysgpmIyRUCO26f64QYZ0170g1D8dZFmAdGk8IdQOvWJFgL1X84Nwo2sw2C5Y4QA9IdS/s14FSLfUE0LtMFYWBYgoE6uEP5v4tD39rjUrB2tPxMoPwsU+oJynaco5DSY6kNr7diyfFcLlsRnqwIjI1MURse60U8J2rVDClNsOi1GQpglnxy43mioR9d1p1/Owpw4cV5Vji7T5HBMWPRuh53j7Dul6KpVje9ifr5oo8gA1vU1pD936NP0etCLhWDv2YOXWL/0F1vwErjavG7S9c7u3gJaLjoTXpjSdGrm3cLk/BK9MWGqEMHO6x4cvFBLQJmoSyj2+y3MaeIPAwRpemoT85PSsDfa84Mx4XcLY5XmpwntmfVkPKMKNyzNvVcAgeHGjSZiULu8tfhWEYGq8JiGdurx7UiW6CROETu8PVYaKQhthPcLz/aG7O2AlIbSD0iQsHN/jWyc83+Mjk0nGRXiOxXAbT2OZ8BxP4zgmyjKhD3FtNgmvcW2uYxMtEl5jE93Hl1ojvMaX2o0Rdkp4jRHGxXmPifAW543zakZFeIvVR+VbjInwnm+BmohjIrznzKDynkZE+Mh7QuWujYiwkbuGyT8cEWEj/xCTQzoiwkYOKSYPeDyEzTxgjOM2HsKnXG5EPv54CJ/y8RE1FUZD+FxTAXGUMRrCl7oY+nFioyF8qW2iH3U7FsLX+jT6WWFjIWzVGNKuEzUWwladKO1aXyMh7Kj1pbvWjISwo16b7pHbOAi7au7p1k0cB2Fn3URN93sUhN21L/Xql46DsKd+qV50+BgI+2rQ6uXajIGQNkuIIGtBj4Kwvxa01kwcASFQz1tnOfWfEKrJrmMT/ScE6+prnJx6Twj3RlD1txgDoaK/RXhSIfpOqOpRouoz4z1hOwC+3StIsdh4TqjRK0i12PhNSNq1RJA9uzwn1OvZBfdd85tQr+8a3DvPa0Ld3nnwOPWYkLGugNTOHpZLYD3FEgJRsMr4UuiXOr4sOvOI0H1IWRUBan8e+LDK9ELf7fgypg8pGM3HACE/rwDE/RaulyzcD9hLsQTXDxhuJ+ujsD2dXbcvRgvfl1vVW90zDemtjquL5lhQSi1AOPWjgLKOUsA3AAixVRjdSUC5mBDhWBbU3mVUTRjGY0AUYK6pgjA8+Y8oTjCCgjDcelORvkdUVQJVRRhO/EakyjLESkK/EdWAGoSedRt7ktCo0qtB6O9yo1pktAl9NRoKM4Eh9NP0w4YeSRiWqMyhT4ilmkV6NQnDaU89J1cikaqQFJZQ7hd92hIj2g3oE0qr4ctIZTpWYgBhuPHkeIqp2i4PJgy/jj409+JHVD1NFGEYfjsfqUyAZWveJgyXzO2aSghmhA4hDGfFwOZLJsRooS6L+S5hGK6Jq9dIiKIQnyHCcPbnZDYy+od+gQMJw3ARfX5R5VV30zI7hJ/vcEwSXMud9wnDabt0rD0xkem6oeYIw/BnWLu3IXy5ZoVow4RyOq4+YDkYXQ2bgCYIa0bL75GJ9/jeJpSMubC35hCRv8lngFDOx31ix3Zwun9j/hkklC7AvDJuPEhSzYcY+JaMEEotMpqYm5Esodnbw/MqU4RSh1wY2SIzLnaqpp0IGSSUXkCcUw6HNqroCBd5PNi6d8koodRsnTE6rE0xYyll2drI5GvINGGtcl4Q5LuU746mxXxonzJINghrlfH+KGii7q7Najh63Mc26GrZIjyrPGyLiNKE85TUkWg3WnbpLs55QmlUbA+24M6ySnjRtNzEp0lW7FZRVWeMV1W02hXZ5BRvSqNrSrf+AUpnuH2y+6WEAAAAAElFTkSuQmCC"
          ></Avatar>
        </Link>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Contact;
