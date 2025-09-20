import AdoptionVisual from '@/components/visuals/adoption';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export default function CurrentAdoptionPage() {
  return (
    <div className="flex justify-center">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Documentation', href: '/docs' },
            { label: 'Introduction', href: '/intro', current: true },
          ]}
        />

        <div className="mt-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Current Adoption</h2>
            <AdoptionVisual />
            {/*    TODO: get this data from api
                   TODO: move to current adoption page
             */}
          </section>
        </div>
      </div>
    </div>
  );
}
