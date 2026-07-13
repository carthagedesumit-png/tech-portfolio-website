import { editionStatus } from '../pricingData';

export default function PricingStatusBadge({ status }) {
  const config = editionStatus[status] || editionStatus.planned;

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${config.className}`}
    >
      {config.label}
    </span>
  );
}
