import Image from "next/image";

type SideBarPodcastProps = {
  image: string;
  title: string;
  author: string;
  description: string;
};

export function SideBarPodcast({
  image,
  title,
  author,
  description,
}: SideBarPodcastProps) {
  return (
    <div>
      <div>
        <Image src={image} width={54} height={54} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      <div>
        <p>Description</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
