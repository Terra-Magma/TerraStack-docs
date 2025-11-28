import { Link } from '@mui/material';

export default function VisionPage() {
  const links = [
    { href: '/our-vision/history', label: 'A Brief History', id: 'history' },
    { href: '/our-vision/problems', label: 'Problems', id: 'problems' },
    { href: '/our-vision/solutions', label: 'Solutions', id: 'solutions' },
    { href: '/our-vision/supported-platforms', label: 'Supported Platforms', id: 'supported-platforms' },
    {
      href: '/our-vision/what-about-existing-protocols',
      label: 'What About Existing Protocols?',
      id: 'what-about-existing-protocols',
    },
    { href: '/our-vision/schedule', label: 'Schedule', id: 'schedule' },
  ];

  return (
    <div className="m-4 vision flex justify-center">
      <div className="flex-1 px-6 py-8 max-w-4xl">
        <div className="row">
          <div className="col text-center">
            <h1 id="history">Vision</h1>
          </div>
        </div>
        <div className="row">
          <div className="flex flex-col gap-4">
            <p>The Internet is a hack.</p>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                style={{ fontSize: '2em' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div
          className="row text-center"
          style={{ marginTop: '3em' }}
        >
          <div className="col">
            <p>
              <i>
                Statements made herein are the views of Terra Magma and do not imply the endorsement by any person or
                organization.
              </i>
            </p>
            <p>
              <i>
                Please <Link href="/Contact/Contact.stm">inform us</Link> of any factual errors so that we may correct
                them.
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
