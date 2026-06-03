import GlobeComponent from '~/terrastack/pages/globe';

const tableOfContents = [
  { id: 'overview', title: 'Overview', level: 2 },
  { id: 'key-features', title: 'Key Features', level: 2 },
  { id: 'why-terrastack', title: 'Why Terra Stack?', level: 2 },
  { id: 'getting-started', title: 'Getting Started', level: 2 },
];

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <div className="mt-8">
          <GlobeComponent />
        </div>
      </div>
    </div>
  );
}
