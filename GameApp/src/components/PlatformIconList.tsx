import { FaWindows, FaPlaystation, FaXbox, FaApple,FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendoswitch } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import type { Platform } from '../services/api-client';

interface PlatformIconListProps {
    platform: Platform[];
}

const PlatformIconList = ({ platform }: PlatformIconListProps) => {
   const iconMap: { [key: string]: React.ComponentType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  android: FaAndroid,
  nintendo: SiNintendoswitch,
  web: BsGlobe,
};
  return (
    <HStack marginY={1}>
    {platform.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={'green'}/>
    ))}
    </HStack>
    );
};

export default PlatformIconList;