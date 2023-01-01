import {
  VStack,
  UnorderedList,
  ListItem,
  Button,
  Switch,
  HStack,
  Box,
  Heading,
  Link,
} from "@chakra-ui/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";

export const Animated = () => {
  const [items, setItems] = useState([0, 1, 2]);
  const [parent, enableAnimations] = useAutoAnimate();
  const add = () => setItems([...items, items.length]);
  const remove = () => setItems(items.slice(0, -1));
  const reverse = () => setItems([...items].reverse());
  return (
    <>
      <VStack>
        <Heading>Auto Animated</Heading>
        <Link href={"https://auto-animate.formkit.com/"}>check out more</Link>
        <HStack>
          <VStack
            p={5}
            m={5}
            border="1px solid"
            borderColor="gray.500"
            rounded="lg"
            bg="white"
          >
            <Switch
              defaultChecked
              onChange={(e) => enableAnimations(e.target.checked)}
            >
              Animations
            </Switch>
            <Button size="sm" onClick={add}>
              Add number
            </Button>
            <Button size="sm" onClick={remove}>
              Remove number
            </Button>
            <Button size="sm" onClick={reverse}>
              Reverse
            </Button>
          </VStack>

          <Box
            p={5}
            m={5}
            border="1px solid"
            borderColor="gray.500"
            rounded="lg"
            bg="white"
          >
            <UnorderedList ref={parent as React.LegacyRef<HTMLUListElement>}>
              {items.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </HStack>
      </VStack>
    </>
  );
};
