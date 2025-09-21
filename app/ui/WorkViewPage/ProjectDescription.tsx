import { Work } from "../../data/works";

export function ProjectDescription( {work} : {work: Work} ) {
    return (
        <div className="space-y-5 flex-2">
            <h2
              id="project-overview-heading"
              className="text-xl md:text-2xl font-semibold tracking-tight"
            >
              Description
            </h2>

            <p className="text-foreground/80 leading-relaxed">
              {work.description ??
                `Empty.`}
            </p>

            {/* My Contributions */}
            <h2
              className="text-xl md:text-2xl font-semibold tracking-tight mt-8"
            >
              My Contributions
            </h2>

            {work.contributions && work.contributions.length > 0 ? (
              <div className="mt-4 space-y-6">
                {work.contributions.map((item, index) => (
                  <section key={item.title + index}>
                    <h3 className="font-semibold text-lg md:text-xl">
                      {index + 1}. {item.title}
                    </h3>
                    <p className="mt-2 text-foreground/80 leading-relaxed" 
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </section>
                ))}
              </div>
            ) : (
              <p className="text-foreground/80 leading-relaxed">
                Empty.
              </p>
            )}
          </div>
    );
}