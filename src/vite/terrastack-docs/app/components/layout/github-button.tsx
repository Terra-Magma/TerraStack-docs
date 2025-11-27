import githubDark from '@/assets/github-mark.svg';
import githubLight from '@/assets/github-mark-white.svg';
import { useLocation } from 'react-router';

export default function GithubButton() {
  const { pathname } = useLocation();

  const githubRoute = pathname.includes('terrastack')
    ? 'https://github.com/Terra-Magma/TerraStack'
    : 'https://github.com/Terra-Magma';

  const navigate = () => {
    window.open(githubRoute, '_blank', 'noopener,noreferrer');
  };

  // const { theme } = useTheme();
  const theme = 'light'; //TODO: Placeholder for theme, replace with actual theme logic
  const iconSize = 30;
  console.log({ theme });
  return (
    <img
      src={theme === 'light' ? githubDark : githubLight}
      width={iconSize}
      height={iconSize}
      alt="GitHub Link"
      onClick={navigate}
    />
  );
}
