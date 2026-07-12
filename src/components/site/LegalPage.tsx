import { Fragment, ReactNode } from "react";
import SiteLayout from "./SiteLayout";

type LegalBlock = string | { list: string[] } | ReactNode;

type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

const renderInline = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
};

const isListBlock = (block: LegalBlock): block is { list: string[] } =>
  typeof block === "object" && block !== null && "list" in block;

const LegalPage = ({
  title,
  lastUpdated,
  sections,
}: {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}) => {
  return (
    <SiteLayout>
      <section className="py-16 lg:py-20">
        <div className="container-edalti max-w-2xl">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">Última actualización: {lastUpdated}</p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                {section.blocks.map((block, i) =>
                  typeof block === "string" ? (
                    <p key={i} className="mt-4 text-body leading-relaxed">
                      {renderInline(block)}
                    </p>
                  ) : isListBlock(block) ? (
                    <ul key={i} className="mt-4 space-y-2 text-body leading-relaxed list-disc pl-5">
                      {block.list.map((item, j) => (
                        <li key={j}>{renderInline(item)}</li>
                      ))}
                    </ul>
                  ) : (
                    <Fragment key={i}>{block}</Fragment>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default LegalPage;
export type { LegalSection };
