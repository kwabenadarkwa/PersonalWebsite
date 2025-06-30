interface BlogPaneProps {
  title: string;
  tags: string[];
  date: string;
}
export default function BlogPane(props: BlogPaneProps) {
  return (
    <div className="flex flex-row justify-between font-main text-sm">
      <div className="flex flex-row gap-4">
        <div>{props.title}</div>
        <div className="flex flex-row gap-2">
          {props.tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="bg-[#262626] border border-[#000000] rounded-full p-1 "
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>
      <div>{props.date}</div>
    </div>
  );
}
