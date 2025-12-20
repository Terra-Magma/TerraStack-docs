import { Button } from '~/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page Not Found</p>
        <Button
          variant={'default'}
          onClick={() => {
            window.location.href = '/';
          }}
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
}
