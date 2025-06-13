import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  let logoSrcToRender: string;

  if (!mounted) {
    logoSrcToRender = '/logo.png';
  } else {
    logoSrcToRender = resolvedTheme === 'dark' ? '/logo.png' : '/logo-dark.png';
  }

  return (
    <Image
      src={logoSrcToRender}
      width={300}
      height={300}
      alt="Logo"
      key={mounted ? resolvedTheme : 'initial'}
    />
  );
};

export default Logo;
