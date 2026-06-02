export default function Skills({ skillGroups }) {
  return (
    <section
      id="skills"
      className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Technical Expertise
        </h2>
        <div className="h-1 w-12 bg-indigo-600 mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-4">
              {group.icon}
              <h3 className="font-semibold text-base text-slate-900">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
