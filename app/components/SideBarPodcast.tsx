import Image from "next/image";
import Link from "next/link";

type SideBarPodcastProps = {
  podcastId: number;
  image: string;
  title: string;
  artistName?: string;
  description?: string;
};

export function SideBarPodcast({
  podcastId,
  image,
  title,
  artistName,
  description,
}: SideBarPodcastProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg p-4 shadow">
      <div className="flex justify-center border-b border-gray-300 pb-6">
        <Link href={`/podcast/${podcastId}`}>
          <Image src={image} width={200} height={200} alt={title} />
        </Link>
      </div>
      <Link href={`/podcast/${podcastId}`}>
        <div className="pt-6 pb-6 border-b border-gray-300">
          <h3 className="text-gray-900 font-bold">{title}</h3>
          <p className="text-gray-900">by {artistName}</p>
        </div>
      </Link>
      <div className="pt-6 pb-6">
        <p className="text-gray-900 font-bold">Description</p>
        <p className="text-gray-900">{description}</p>
      </div>
    </div>
  );
}
