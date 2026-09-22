import React from "react";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mb-2 flex flex-col items-start gap-2">
      <h2 className="pb-1 text-3xl font-bold text-secondary md:text-4xl">
        {title}
      </h2>
      <div className="flex items-center rounded-full gap-3 pl-2">
        <div className="h-[3px] w-16 bg-primary rounded-md "></div>
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
          {subtitle}
        </h3>
      </div>
    </div>
  );
};

export default SectionTitle;
