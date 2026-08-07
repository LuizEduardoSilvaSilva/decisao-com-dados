import { useLanguage, type Lang } from "@/lib/i18n";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const options: { value: Lang; label: string }[] = [
    { value: "pt", label: "PT" },
    { value: "en", label: "EN" },
  ];

  return (
    <div
      className="inline-flex items-center rounded-full border border-hairline bg-surface p-0.5 text-[11px] font-medium"
      role="group"
      aria-label="Language / Idioma"
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setLang(o.value)}
          aria-pressed={lang === o.value}
          className={`rounded-full px-2.5 py-1 transition ${
            lang === o.value
              ? "bg-surface-elevated text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
