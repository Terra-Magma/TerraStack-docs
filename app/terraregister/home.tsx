import { Button } from '~/components/ui/button';
import { ListCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <div className="mt-8">
          {/*todo: fill with form*/}
          <div className="flex flex-row justify-end mt-8">
            <Button
              variant="default"
              size="lg"
              className="flex items-center gap-2 "
            >
              Register
              <ListCheck className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
