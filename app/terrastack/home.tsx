import { TableOfContents } from '~/components/layout/table-of-contents';
import HistoryPage, { historyTableOfContents } from '~/terrastack/pages/our-vision/history';
import ProblemsPage, { problemsTableOfContents } from '~/terrastack/pages/our-vision/problems';
import SolutionsPage, { solutionsTableOfContents } from '~/terrastack/pages/our-vision/solutions';
import SupportedPlatformsPage, {
  supportedPlatformsTableOfContents,
} from '~/terrastack/pages/our-vision/supported-platforms';
import ExistingProtocolsPage from '~/terrastack/pages/our-vision/what-about-existing-protocols';
import SchedulePage from '~/terrastack/pages/our-vision/schedule';
import OverviewPage, { overviewTableOfContents } from '~/terrastack/pages/overview';

export default function TerraStackHome() {
  const tableOfContents = [
    ...overviewTableOfContents,
    ...historyTableOfContents,
    ...problemsTableOfContents,
    ...solutionsTableOfContents,
    ...supportedPlatformsTableOfContents,
    { id: 'what-about', title: 'What About Other Protocols', level: 2 },
    { id: 'schedule', title: 'Schedule', level: 2 },
  ];
  // todo: use tailscale as example of long scroll page

  return (
    <div className="flex justify-center">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <div className="mt-8">
          <OverviewPage />
          <HistoryPage />
          <ProblemsPage />
          <SolutionsPage />
          <SupportedPlatformsPage />
          <ExistingProtocolsPage />
          <SchedulePage />
        </div>
      </div>

      <div className="hidden xl:block w-64 flex-shrink-0">
        <div className="sticky top-24 p-6">
          <TableOfContents items={tableOfContents} />
        </div>
      </div>
    </div>
  );
}
