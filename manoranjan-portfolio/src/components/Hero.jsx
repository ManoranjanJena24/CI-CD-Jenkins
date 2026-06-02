export default function Hero({ profile }) {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Hi, I'm <span className="text-indigo-400">{profile.name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-6 font-medium">
          {profile.title}
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300 mb-8">
          <span className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {profile.location}
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {profile.email}
          </span>
        </div>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
          {profile.about}
        </p>

        <div className="flex justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition text-white"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="bg-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
