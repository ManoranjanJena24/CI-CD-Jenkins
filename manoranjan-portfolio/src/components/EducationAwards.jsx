export default function EducationAwards() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Education
          </h3>
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
            June 2023
          </span>
          <h4 className="text-base font-bold text-slate-900 mt-2">
            Btech in Computer Science
          </h4>
          <p className="text-sm text-slate-600 mt-1">
            MIT Academy Of Engineering, Alandi, Pune
          </p>
        </div>

        {/* Awards */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Awards & Achievements
          </h3>
          <h4 className="text-base font-bold text-slate-900">Spot Awards</h4>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">
            Received <strong>"Customer Focus"</strong> and{" "}
            <strong>"Continuous Improvement"</strong> spot awards at Beltronic
            for exceptional professional contributions.
          </p>
        </div>
      </div>
    </section>
  );
}
