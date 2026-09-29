import Image from "next/image";

interface LegalDharaBrandProps {
  compact?: boolean;
  inverse?: boolean;
  priority?: boolean;
}

export function LegalDharaBrand({
  compact = false,
  inverse = false,
  priority = false,
}: LegalDharaBrandProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/assets/brand/legal-dhara-mark.webp"
        alt="Legal Dhara monogram"
        width={48}
        height={48}
        priority={priority}
        className={`h-10 w-10 object-contain sm:h-12 sm:w-12 ${
          inverse ? "rounded-md bg-white p-1" : ""
        }`}
      />
      {!compact && (
        <span
          className={`font-serif text-xl font-semibold tracking-[-0.025em] sm:text-2xl ${
            inverse ? "text-white" : "text-ink"
          }`}
        >
          Legal Dhara
        </span>
      )}
    </span>
  );
}
