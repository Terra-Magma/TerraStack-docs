import { usePathname } from 'next/navigation';
import githubDark from '@/assets/github-mark.svg';
import githubLight from '@/assets/github-mark-white.svg';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function GithubButton() {
  const pathname = usePathname();

  const githubRoute = pathname.includes('terrastack')
    ? 'https://github.com/Terra-Magma/TerraStack'
    : 'https://github.com/Terra-Magma';

  const navigate = () => {
    window.open(githubRoute, '_blank', 'noopener,noreferrer');
  };

  const { theme } = useTheme();
  const iconSize = 30;
  console.log({ theme });
  return (
    <Image
      src={theme === 'light' ? githubDark : githubLight}
      width={iconSize}
      height={iconSize}
      alt="GitHub Link"
      onClick={navigate}
    />
  );
}
