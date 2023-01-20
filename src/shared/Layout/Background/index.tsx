import Image from 'next/image';

import backgroundImg from '@/assets/images/background.png';

function Background() {
  return (
    <Image
      src={backgroundImg}
      alt="background"
      style={{ opacity: 0.7, zIndex: -99 }}
      fill
      priority
    />
  );
}

export default Background;
