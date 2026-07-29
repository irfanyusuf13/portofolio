const CV_URL =
  "https://drive.google.com/file/d/10VY8zjNcQl4paJzrvHhShHGDMxrh0DQ5/view?usp=drive_link";

export default function CVButton() {
  return (
    <div className="flex justify-center py-12">
      <a
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl bg-cyan-500 px-8 py-3 text-sm font-semibold text-gray-950 hover:bg-cyan-600 transition"
      >
        View CV
      </a>
    </div>
  );
}
