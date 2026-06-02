export default function Experience({ experiences }) {
  return (
    <section id="experience" className="py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Work Experience
          </h2>
          <div className="h-1 w-12 bg-indigo-600 mx-auto mt-4 rounded"></div>
        </div>

        <div className="space-y-12 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative pl-8"
            >
              <div className="absolute w-3 h-3 bg-indigo-600 rounded-full left-4 top-[30px]"></div>
              <div className="flex flex-wrap justify-between items-baseline mb-3">
                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-md font-medium text-slate-500 mb-4">
                {exp.company}
              </h4>

              <ul className="list-disc list-outside space-y-2 text-slate-600 text-sm pl-4">
                {exp.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
