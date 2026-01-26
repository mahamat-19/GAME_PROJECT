
import { HStack, Image } from "@chakra-ui/react";
import logosana from "../../assets/Logosana.png";

export const NavBar = () => {
  return (
    <HStack>
        <Image src={logosana} alt="Logo Sana" boxSize="60px"/>
    </HStack>
  )
}
export default NavBar
