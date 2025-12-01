import { Button } from '~/components/ui/button';

interface DevelopmentButtonProps {
  link: string;
  title: string;
}

export default function DevelopmentButton({ link, title }: DevelopmentButtonProps) {
  const env = process.env.NODE_ENV;
  if (env !== 'development') {
    return null;
  }

  return (
    <Button
      variant={'default'}
      onClick={() => {
        window.location.href = link;
      }}
    >
      {title}
    </Button>
  );
}
