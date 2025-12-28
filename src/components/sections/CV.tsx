const CV_URL =
  "https://drive.google.com/file/d/1CIAhVJQr6Yu0h24xeAC2sjbruQKGeJmw/view?usp=sharing";

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
